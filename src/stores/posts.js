import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { supabase } from '@/supabase.js'

export const usePostsStore = defineStore('posts', () => {
  const posts = ref([])

  async function fetchPosts() {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .order('data_publicacao', { ascending: false })

    if (!error) posts.value = data
  }

  async function addPost(newPost) {
    const { data, error } = await supabase
      .from('posts')
      .insert([newPost])
      .select()

    if (!error && data.length) {
      posts.value.unshift(data[0])
      return data[0]
    }
    return null
  }

  function getPostBySlug(slug) {
    return posts.value.find(post => post.slug === slug) || null
  }

  async function fetchPostBySlug(slug) {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .eq('slug', slug)
      .single()

    if (!error) {
      const exists = posts.value.find(p => p.id === data.id)
      if (!exists) posts.value.push(data)
      return data
    }
    return null
  }

  function getFeaturedPost() {
    return posts.value.find(post => post.destaque === true) || null
  }
  const postsCount = computed(() => posts.value.length)


  async function incrementViews(postId) {
  try {
    
    const { error } = await supabase.rpc('increment_post_views', {
      post_id: postId
    });

    if (error) {
      console.error('Erro ao incrementar views:', error);
      throw error;
    }


    const { data: updatedPost, error: fetchError } = await supabase
      .from('posts')
      .select('views')
      .eq('id', postId)
      .single();

    if (fetchError) {
      throw fetchError;
    }

    const postIndex = posts.value.findIndex(p => p.id === postId);
    if (postIndex !== -1) {
      posts.value[postIndex].views = updatedPost.views;
    }

    return updatedPost.views;

  } catch (error) {
    console.error('Erro completo:', error);
    return null;
  }
}


  return { posts, fetchPosts, addPost, getPostBySlug, fetchPostBySlug, getFeaturedPost, postsCount, incrementViews }
})

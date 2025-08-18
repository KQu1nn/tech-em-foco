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

  return { posts, fetchPosts, addPost, getPostBySlug, fetchPostBySlug, getFeaturedPost, postsCount }
})

import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { supabase } from '@/supabase.js'

export const usePostsStore = defineStore('posts', () => {
  const posts = ref([])
  const mostPopular = ref([])

  async function fetchPosts() {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .order('data_publicacao', { ascending: false })

    if (!error) posts.value = data
  }

  async function fetchMostPopular() {
    const { data, error } = await supabase.from("posts").select("*").order("views", { ascending: false }).limit(5);

    if (!error) {
      mostPopular.value = data;
    } else {
      console.error(`Erro ao buscar posts populares`, error)
    }
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

  async function delPost(postToDelete) {
    const postId = postToDelete.id;

    const { data, error } = await supabase.from('posts').delete().eq('id', postId)

    if (!error) {
      console.log('Postagem removida com sucesso', data);
      posts.value = posts.value.filter(p => p.id !== postToDelete.id)
    } else {
      console.error('Erro ao excluir postagem:', error);
    }
  }

  async function updateFeaturedPost() {
  // pega o mais visto
  const { data: postsData, error } = await supabase
    .from("posts")
    .select("id, views")
    .order("views", { ascending: false })
    .limit(1)

  if (error) {
    console.error(error)
    return
  }

  if (!postsData || postsData.length === 0) {
    console.log("Nenhum post encontrado")
    return
  }

  const topPostId = postsData[0].id

  // zera todos os destaques
  await supabase.from("posts").update({ destaque: false }).neq("id", topPostId)

  // marca o top como destaque
  const { error: updateError } = await supabase
    .from("posts")
    .update({ destaque: true })
    .eq("id", topPostId)

  if (updateError) {
    console.error("Erro ao atualizar destaque:", updateError)
  } else {
    console.log("Post em destaque atualizado com sucesso!")
    // recarrega posts da store
    await fetchPosts()
  }
}


  const featuredPost = computed(() =>
    posts.value.find(post => post.destaque === true) || null
  )
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


  return { posts, fetchPosts, mostPopular, updateFeaturedPost, fetchMostPopular, addPost, getPostBySlug, fetchPostBySlug, featuredPost, postsCount, incrementViews, delPost }
})

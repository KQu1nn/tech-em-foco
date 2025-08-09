// stores/posts.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePostsStore = defineStore('posts', () => {
  const posts = ref([
    {
      id: 1,
      slug: 'introducao-ao-vuejs',
      titulo: 'Introdução ao VueJS',
      categoria: 'Frontend',
      resumo: 'Um guia rápido para começar no VueJS.',
      imagemCapa: '',
      conteudo: '<p>Conteúdo do post...</p>',
      destaque: true,
      visualizacoes: 153,
      status: 'publicado',
      dataPublicacao: '2025-08-08T14:30:00Z'
    }
  ])

  function getPostBySlug(slug) {
    return posts.value.find(post => post.slug === slug) || null
  }

  function addPost(novoPost) {
    posts.value.push(novoPost)
  }

  return { posts, getPostBySlug, addPost }
})
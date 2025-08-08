// stores/posts.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePostsStore = defineStore('posts', () => {
  const posts = ref([])

  function loadPosts() {
    // busca do Supabase ou mock
    posts.value = [
        { id: 1, titulo: 'O Futuro da Inteligência Artificial: Tendências para 2024', conteudo: 'Explore as principais tendências em IA que estão moldando o futuro da tecnologia' },
        { id: 2, titulo: 'Computação Quântica: A Próxima Fronteira', conteudo: 'Uma introdução ao mundo da computação quântica e seu potencial revolucionário.' },
        { id: 3, titulo: 'Computação Quântica: A Próxima Fronteira', conteudo: 'Uma introdução ao mundo da computação quântica e seu potencial revolucionário.' },
        { id: 4, titulo: 'Computação Quântica: A Próxima Fronteira', conteudo: 'Uma introdução ao mundo da computação quântica e seu potencial revolucionário.' }
    ]
  }

  return { posts, loadPosts }
})
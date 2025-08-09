<template>
  <div v-if="post">
    <h1>{{ post.titulo }}</h1>
    <img :src="post.imagem_capa" alt="" />
    <div v-html="post.conteudo"></div>
  </div>
  <div v-else>
    <p>Post não encontrado.</p>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { usePostsStore } from '@/stores/posts'

const route = useRoute()
const router = useRouter()
const postsStore = usePostsStore()

const post = ref(null)

async function loadPost(slug) {
  // Tenta achar post no store local
  post.value = postsStore.getPostBySlug(slug)

  if (!post.value) {
    // Se não achar, busca direto no Supabase
    const fetchedPost = await postsStore.fetchPostBySlug(slug)
    if (fetchedPost) {
      post.value = fetchedPost
    } else {
      // Se não encontrar, redireciona para home ou exibe mensagem
      router.push('/')
    }
  }
}

watch(() => route.params.slug, (slug) => {
  loadPost(slug)
})

onMounted(() => {
  loadPost(route.params.slug)
})
</script>

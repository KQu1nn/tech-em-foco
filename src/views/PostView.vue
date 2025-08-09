<template>
  <div v-if="post">
    <h1>{{ post.titulo }}</h1>
    <img :src="post.imagemCapa" alt="" />
    <div v-html="post.conteudo"></div>
  </div>
  <div v-else>
    <p>Post não encontrado.</p>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { usePostsStore } from '@/stores/posts'

const route = useRoute()
const postsStore = usePostsStore()
const post = ref(null)

function loadPost(slug) {
  post.value = postsStore.getPostBySlug(slug)
}

watch(() => route.params.slug, (slug) => {
  loadPost(slug)
})

onMounted(() => {
  loadPost(route.params.slug)
})
</script>

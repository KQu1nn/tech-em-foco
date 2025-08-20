<template>
  <div class="w-full flex flex-col bg-[#09090b] text-white pt-25 pb-10">
    <HeaderNav />

    <div class="w-11/12 md:w-9/12 mx-auto">

      <div class="w-full pt-6 flex flex-row justify-between text-[#a1a1aa] items-center">
        <div @click="goBack" class="flex flex-row gap-1 items-center cursor-pointer">
          <font-awesome-icon :icon="['fas', 'arrow-left']" />
          <p class="text-sm font-medium">Voltar</p>
        </div>

        <div class="flex flex-col gap-2 items-center">
          <button
            class="text-sm font-medium px-3 py-2 flex flex-row items-center border rounded border-[#27272a] gap-2 cursor-pointer">
            <font-awesome-icon icon="share-alt" />
            <p>Compartilhar</p>
          </button>
          <p v-if="post" class="text-sm text-[#a1a1aa]">
            Visualizações: {{ post.views || 0 }}
          </p>
        </div>
      </div>

      <div v-if="post" class="flex flex-row gap-5 py-8 text-sm text-[#a1a1aa]">
        <p class="border border-[#6b26d9] font-medium px-3 py-0.5 rounded-2xl text-xs text-[#6b26d9] bg-[#130c20] cursor-pointer">
          {{ post.categoria }}
        </p>
        <p class="flex flex-row gap-1 items-center">
          <font-awesome-icon :icon="['far', 'calendar']" class="rounded" />
          {{ formatDate(post.data_publicacao) }}
        </p>
        <p class="flex flex-row gap-1 items-center">
          <font-awesome-icon :icon="['far', 'clock']" class="rounded" />
          8 min
        </p>
      </div>

      <div v-if="post" class="w-full flex flex-col gap-6 pb-2">
        <h1 class="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          {{ post.titulo }}
        </h1>
        <p class="text-xl text-[#a1a1aa]">{{ post.resumo }}</p>

        <AutorMeta :post="post" />

        <div class="w-full">
          <div class="w-full h-auto bg-blue-700 border-0 rounded-2xl">
            <img :src="post.imagem_capa" class="rounded-2xl w-full" />
          </div>

          <div class="post-content py-8" v-html="conteudoHtml"></div>
        </div>
      </div>

      <div v-else>
        <p>Carregando post...</p>
      </div>
    </div>
  </div>

  <Footer />
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { usePostsStore } from '@/stores/posts'
import { marked } from 'marked'
import AutorMeta from '@/components/AutorMeta.vue'

import HeaderNav from '@/components/HeaderNav.vue'
import Footer from '@/components/Footer.vue'

const route = useRoute()
const router = useRouter()
const postsStore = usePostsStore()

const post = ref(null)
const conteudoHtml = ref('')

function goBack() {
  router.back()
}

function formatDate(dateString) {
  if (!dateString) return '';

  const date = new Date(dateString);

  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('pt-BR', options); 
}

async function loadPost(slug) {
  if (!slug) return

  post.value = postsStore.getPostBySlug(slug)

  if (!post.value) {
    const fetchedPost = await postsStore.fetchPostBySlug(slug)
    if (fetchedPost) post.value = fetchedPost
    else {
      router.push('/')
      return
    }
  }

  conteudoHtml.value = post.value.conteudo ? marked.parse(post.value.conteudo) : ''

  if (post.value?.id) {
    const updatedViews = await postsStore.incrementViews(post.value.id)
    if (updatedViews !== null) {
      post.value.views = updatedViews
    }
  }
}

defineProps({ slug: String })

watch(() => route.params.slug, (slug) => {
  loadPost(slug)
})

onMounted(() => {
  loadPost(route.params.slug)
})
</script>

<style scoped>
.post-content ::v-deep(p) {
  margin-bottom: 1em;
  line-height: 1.6;
  color: #d4d4d8;
  font-size: 1.125rem;
}

.post-content ::v-deep(h1),
.post-content ::v-deep(h2),
.post-content ::v-deep(h3) {
  margin-top: 1.5em;
  margin-bottom: 0.75em;
  font-weight: 700;
}

.post-content ::v-deep(ul) {
  padding-left: 1.25rem;
  margin-bottom: 1em;
  list-style-type: disc;
}

.post-content ::v-deep(img) {
  max-width: 100%;
  border-radius: 0.5rem;
  margin: 1rem 0;
}

.post-content ::v-deep(a) {
  color: #6b26d9;
  text-decoration: underline;
}
</style>

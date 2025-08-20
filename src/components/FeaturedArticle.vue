<template>
  <div v-if="featuredPost" class="w-full flex flex-col gap-5 pb-10 items-center md:items-start">

    <h1 class="text-xl flex flex-row items-center gap-3">
      <div class="w-1 h-6 rounded bg-gradient-to-b from-purple-500 to-blue-500"></div>
      Artigo em Destaque
    </h1>

    <router-link
      :to="`/post/${featuredPost.slug}`"
      class=" w-11/12 md:w-4/6 border border-[#1f133d] rounded-lg cursor-pointer hover:shadow-lg transition-shadow"
    >
      <div class="h-48 w-full rounded-t-lg flex justify-center items-center bg-purple-700 overflow-hidden">
        <img
          v-if="featuredPost.imagem_capa"
          :src="featuredPost.imagem_capa"
          alt="Imagem do artigo"
          class="h-48 w-full object-cover rounded-t-lg"
        />
        <div v-else class="text-white">Sem imagem</div>
      </div>

      <div class="p-6 flex flex-col gap-3">
        <div class="flex flex-row gap-3 text-[#a1a1aa]">
          <p class="flex flex-row gap-1 items-center text-sm">
            <font-awesome-icon :icon="['far', 'calendar']" class="rounded" />
            {{ formattedDate }}
          </p>
          <p class="flex flex-row gap-1 items-center text-sm">
            <font-awesome-icon :icon="['far', 'clock']" class="rounded" />
            {{ featuredPost.tempo_leitura || '—' }} min
          </p>
        </div>

        <div class="flex flex-col gap-3">
          <h2 class="text-xl font-medium hover:text-purple-700">{{ featuredPost.titulo }}</h2>
          <p class="text-[#a1a1aa]">{{ featuredPost.resumo }}</p>
        </div>

        <div
          class="text-start text-purple-700 cursor-pointer transition hover:brightness-110 flex items-center gap-1"
        >
          Ler mais
          <font-awesome-icon icon="arrow-right" style="width: 14px; height: 14px" />
        </div>
      </div>
    </router-link>
  </div>

  <div v-else class="text-[#a1a1aa]">
    Nenhum artigo em destaque no momento.
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue'
import { usePostsStore } from '@/stores/posts'
import { computed } from 'vue'

const postsStore = usePostsStore()
const featuredPost = computed(() => postsStore.featuredPost)

onMounted(async () => {
  if (!postsStore.posts.length) {
    await postsStore.fetchPosts()
  }
  await postsStore.updateFeaturedPost()
})

// Formata a data
const formattedDate = computed(() => {
  if (!featuredPost.value?.data_publicacao) return ''
  const date = new Date(featuredPost.value.data_publicacao)
  return date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })
})
</script>

<template>
  <div class="w-full">
    <h1 class="w-full justify-center md:justify-start py-5 text-xl flex flex-row items-center gap-3 text-white">
      <div class="w-1 h-6 rounded bg-gradient-to-b from-purple-500 to-blue-500"></div>
      Últimas postagens
    </h1>

    <div class="w-full justify-center md:justify-normal flex flex-row flex-wrap gap-8 pb-16">
      <!-- Articles -->
      <div
        v-for="(post, i) in posts"
        :key="post.id"
        class="w-11/12 md:w-72 cursor-pointer border border-[#27272a] rounded-md"
        @click="goToPost(post.slug)"
      >
        <div class="w-full h-48 flex justify-center items-center bg-purple-700 rounded-t-md">
          <img
            :src="post.imagem_capa || 'https://blog.marcusoliveiradev.com.br/wp-content/uploads/2022/11/pexels-luis-gomes-546819-1.jpg'"
            alt="Capa do post"
            class="w-full h-full object-cover rounded-t-md"
          />
        </div>
        <div class="p-6 flex flex-col gap-3">
          <div class="flex flex-row gap-3 text-[#a1a1aa]">
            <p class="flex flex-row gap-1 items-center text-sm">
              <font-awesome-icon :icon="['far', 'calendar']" class="rounded" />
              {{ formatDate(post.data_publicacao) }}
            </p>
            <p class="flex flex-row gap-1 items-center text-sm">
              <font-awesome-icon :icon="['far', 'clock']" class="rounded" />
              8 min
            </p>
          </div>
          <div class="flex flex-col gap-3">
            <h2 class="text-xl text-white font-medium hover:text-purple-700">
              {{ post.titulo }}
            </h2>
            <p class="text-[#a1a1aa]">
              {{ post.resumo.length > 210 ? post.resumo.slice(0, 150) + '...' : post.resumo }}
            </p>
          </div>
          <router-link
            :to="`/post/${post.slug}`"
            class="inline-flex text-purple-700 cursor-pointer transition hover:brightness-110 items-center gap-1 text-start"
            @click.stop
          >
            Ler mais
            <font-awesome-icon icon="arrow-right" style="width: 14px; height: 14px" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { useRouter } from 'vue-router'

defineProps({
  posts: {
    type: Array,
    required: true
  }
})

const router = useRouter()

function goToPost(slug) {
  router.push(`/post/${slug}`)
}

const formatDate = (dateStr) => {
  if (!dateStr) return 'Data inválida'
  const date = new Date(dateStr)
  if (isNaN(date)) return 'Data inválida'

  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  }).format(date)
}
</script>

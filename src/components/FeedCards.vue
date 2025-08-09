<template>
  <div class="w-full">
    <h1 class="w-full justify-center md:justify-start py-5 text-xl flex flex-row items-center gap-3 text-white">
      <div class="w-1 h-6 rounded bg-gradient-to-b from-purple-500 to-blue-500"></div>
      Últimas postagens
    </h1>

    <div class="w-full justify-center md:justify-normal flex flex-row flex-wrap gap-8 pb-16">
      <!-- Articles -->
      <router-link
        v-for="(post, i) in posts"
        :key="post.id"
        :to="`/post/${post.slug}`"
        class="w-11/12 md:w-72 cursor-pointer border border-[#27272a] rounded-md no-underline hover:no-underline"
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
              {{ post.resumo }}
            </p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>


<script setup>
defineProps({
  posts: {
    type: Array,
    required: true
  }
})

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

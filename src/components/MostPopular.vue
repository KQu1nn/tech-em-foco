<template>
    <div class="w-full h-auto flex flex-col gap-4 border border-[#27272a] rounded-lg py-6 px-4">

        <h1 class="text-[22px] font-medium">
            <font-awesome-icon :icon="['fas', 'arrow-trend-up']" class="text-[#6b26d9]" size="sm" />
            Mais Populares
        </h1>
        <div class="flex flex-col divide-y divide-[#27272a]">
            <router-link :to="`/post/${post.slug}`" v-for="post in postsStore.mostPopular" :key="post.id" class="py-5 flex flex-col gap-1">
                <p class="font-medium text-sm">{{ post.titulo }}</p>
                <div class="flex flex-row justify-between items-center text-[#a1a1aa] text-xs">
                    <p>{{ formatDate(post.data_publicacao) }}</p>
                    <p>{{ formatViews(post.views) }}</p>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script setup>
import { onMounted } from 'vue';
import { usePostsStore } from '@/stores/posts';

const postsStore = usePostsStore()

function formatViews(views) {
  if (views >= 1_000_000) return (views / 1_000_000).toFixed(1) + 'M'
  if (views >= 1_000) return (views / 1_000).toFixed(1) + 'K'
  return views.toString()
}
function formatDate(dateString) {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  }).format(date)
}
onMounted(async() => {
    await postsStore.fetchMostPopular();
})
</script>
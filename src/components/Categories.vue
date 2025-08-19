<template>
  <div class="w-full h-auto flex flex-col gap-4 border border-[#27272a] rounded-lg py-6 px-4">
    <h1 class="text-[22px] font-medium">
      <font-awesome-icon :icon="['fas', 'rss']" class="text-blue-500" size="sm" />
      Categorias
    </h1>

    <div
      v-for="cat in categoriesStore.categories"
      :key="cat.id"
      @click="goToCategory(cat.nome)"
      class="flex flex-row items-center justify-between text-sm font-medium p-1.5 transition cursor-pointer hover:bg-[#27272a] hover:rounded"
    >
      <div class="flex flex-row items-center gap-2">
        <div :class="['w-3 h-3 rounded', getCategoryColor(cat.id)]"></div>
        <p>{{ cat.nome }}</p>
      </div>
      <p class="px-2.5 py-0.5 rounded-xl bg-[#27272a]">
        {{ countPosts(cat.nome) }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { useCategoryStore } from "@/stores/category";
import { usePostsStore } from "@/stores/posts";
import { onMounted, reactive } from "vue";
import { useRouter } from "vue-router";

const categoriesStore = useCategoryStore();
const postsStore = usePostsStore();
const router = useRouter();

const palette = [
  "bg-purple-700",
  "bg-blue-400",
  "bg-blue-500",
  "bg-purple-500",
  "bg-blue-700",
  "bg-purple-800",
];

const categoryColors = reactive({});

onMounted(async () => {
  await categoriesStore.fetchCategories();
  categoriesStore.categories.forEach(cat => {
    if (!categoryColors[cat.id]) {
      const randomIndex = Math.floor(Math.random() * palette.length);
      categoryColors[cat.id] = palette[randomIndex];
    }
  });
});

function countPosts(nomeCategoria) {
  return postsStore.posts.filter(post => post.categoria === nomeCategoria).length;
}

function goToCategory(nomeCategoria) {
  router.push(`/categoria/${nomeCategoria}`);
}

function getCategoryColor(id) {
  return categoryColors[id] || "bg-gray-500";
}
</script>

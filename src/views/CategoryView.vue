<template>
  <div class="min-h-full bg-[#09090bf8] text-white">
    <HeaderNav />

    <div class="w-full pt-25 px-10">
      <h1 class="text-3xl md:text-5xl font-bold mb-8">
        Categoria: {{ categoria }}
      </h1>

      <FeedCards :posts="filteredPosts" />
    </div>

    <div class="w-full px-10 pb-15 flex flex-col md:flex-row gap-8 justify-between text-white">
      <MostPopular />
      <PopularTags />
    </div>

    <Footer />
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from "vue";
import { useRoute } from "vue-router";

import FeedCards from "@/components/FeedCards.vue";
import HeaderNav from "@/components/HeaderNav.vue";
import MostPopular from "@/components/MostPopular.vue";
import PopularTags from "@/components/PopularTags.vue";
import Footer from "@/components/Footer.vue";

import { usePostsStore } from "@/stores/posts";

const route = useRoute();
const postsStore = usePostsStore();

const categoria = ref(route.params.categoria || "");

const filteredPosts = computed(() => {
  return postsStore.posts.filter(post => post.categoria === categoria.value);
});

watch(
  () => route.params.categoria,
  (newCategoria) => {
    categoria.value = newCategoria;
  }
);

onMounted(async () => {
  if (postsStore.posts.length === 0) {
    await postsStore.fetchPosts();
  }
});
</script>

<template>
  <div class="min-h-full bg-[#09090bf8]">
    <HeaderNav />
    <div class="w-full pt-25 px-10 text-white">
      <FeedCards :posts="posts" />
    </div>
    <div class="w-full px-10 pb-15 flex flex-col md:flex-row gap-8 justify-between text-white">
      <MostPopular />
      <Categories />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import FeedCards from '@/components/FeedCards.vue';
import HeaderNav from '@/components/HeaderNav.vue';
import MostPopular from '@/components/MostPopular.vue';
import Categories from '@/components/Categories.vue';
import Footer from '@/components/Footer.vue';

import { usePostsStore } from '@/stores/posts';

const postsStore = usePostsStore();
const posts = postsStore.posts;
</script>

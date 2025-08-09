<template>
    <Hero />
    <MainLayout :posts="postsStore.posts"/>
</template>

<script setup>
import { onMounted } from 'vue'
import { usePostsStore } from '@/stores/posts'
import Hero from '@/components/Hero.vue';
import MainLayout from '@/components/MainLayout.vue';

const postsStore = usePostsStore()

onMounted(() => {
  postsStore.fetchPosts()
})

</script>

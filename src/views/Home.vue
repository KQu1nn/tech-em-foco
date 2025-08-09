<template>
    <Hero />
    <MainLayout :posts="postsStore.posts"/>
</template>

<script setup>
import { usePostsStore } from '@/stores/posts'
import Hero from '@/components/Hero.vue';
import MainLayout from '@/components/MainLayout.vue';

const postsStore = usePostsStore()

</script>

<style scoped>
 
</style>

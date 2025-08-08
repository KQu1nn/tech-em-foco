<template>
    <div class="min-h-full h-full bg-[#09090bf8]">
        <HeaderNav />
        <FeedCards :posts="postsStore.posts"/>
    </div>
</template>
<script setup>
import { usePostsStore } from '@/stores/posts'
import FeedCards from '@/components/FeedCards.vue';
import HeaderNav from '@/components/HeaderNav.vue';

const postsStore = usePostsStore()
postsStore.loadPosts()

defineProps({
  posts: {
    type: Array,
    required: true
  }
})
</script>
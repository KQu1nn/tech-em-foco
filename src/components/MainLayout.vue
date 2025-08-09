<template>
    <div class="flex flex-col md:flex-row min-h-screen bg-[#09090b] text-white">
        <div class="flex-1 md:p-6">
            <div class="h-52 md:h-60 w-full flex flex-col justify-center items-center gap-3">
                <h1 class="text-4xl font-bold">Últimos <span class="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Artigos</span></h1>
                <p class="w-5/6 md:w-4/6 text-lg text-center text-[#a1a1aa]">Fique por dentro das últimas novidades e tendências em tecnologia e inteligência artificial</p>
            </div>

            <FeaturedArticle />
            <FeedCards :posts="posts"/>
        </div>

        <aside class="w-full md:w-80 flex flex-col gap-10 p-6 min-w-[200px] break-words whitespace-normal">
            <Newsletter />
            <Categories />
            <MostPopular />
            <PopularTags />
        </aside>
    </div>
    <Footer />
</template>
<script setup>
import Categories from './Categories.vue';
import FeaturedArticle from './FeaturedArticle.vue';
import FeedCards from './FeedCards.vue';
import Footer from './Footer.vue';
import MostPopular from './MostPopular.vue';
import Newsletter from './Newsletter.vue';
import PopularTags from './PopularTags.vue';

defineProps({
  posts: {
    type: Array,
    required: true
  }
})
</script>
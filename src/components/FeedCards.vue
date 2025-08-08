<template>
    <div class="w-full">
        <h1 class="w-full justify-center md:justify-start py-5 text-xl flex flex-row items-center gap-3">
            <div class="w-1 h-6 rounded bg-gradient-to-b from-purple-500 to-blue-500"></div>
            Últimas postagens
        </h1>

        <div class="w-full justify-center md:justify-normal flex flex-row flex-wrap cursor-pointer gap-8 pb-16"> <!-- Articles -->
            <div v-for="(post, i) in posts"  class="w-11/12 md:w-72 border border-[#27272a] rounded-md">
                <div class="w-full h-48 flex justify-center items-center bg-purple-700 rounded-t-md">
                    Imagem
                </div>
            <div class="p-6 flex flex-col gap-3">
                <div class="flex flex-row gap-3 text-[#a1a1aa]">
                    <p class="flex flex-row gap-1 items-center text-sm">
                        <font-awesome-icon :icon="['far', 'calendar']" class="rounded"/>
                        15 Jan 2025
                    </p>
                    <p class="flex flex-row gap-1 items-center text-sm">
                        <font-awesome-icon  :icon="['far', 'clock']"  class="rounded" />
                        8 min
                    </p>
                </div>
                <div class="flex flex-col gap-3">
                    <h2 class="text-xl text-white font-medium hover:text-purple-700">
                        {{ post.titulo }}
                    </h2>
                    <p class="text-[#a1a1aa]">
                        {{ post.conteudo }}
                    </p>
                </div>
                <button class="text-start text-purple-700 cursor-pointer transition hover:brightness-110">
                    Ler mais
                    <font-awesome-icon icon="arrow-right" style="width: 14px; height: 14px"/>
                </button>
                </div>
            </div>
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
</script>
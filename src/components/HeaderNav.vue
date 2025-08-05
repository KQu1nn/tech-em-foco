<template>
    <div class="w-full flex flex-row flex-wrap justify-between items-center px-5 py-5 bg-[#09090b] border-b-1 border-b-[#27272a] text-[#e7e7e7]">
        <a href="/">
            <Logo />
        </a>
        <ul class="flex flex-row gap-8">
            <li v-for="(nav, i) in navs" :key="i" class="hover:text-[#6b26d9]">
                <a :href="nav.url"> {{ nav.name }} </a>
            </li>
        </ul>
        <font-awesome-icon icon="search" class="cursor-pointer text-[#e7e7e7]" />
    </div>    
</template>
<script setup>
import Logo from '@/components/Logo.vue';
const navs = [
    { name: 'Início', url: '/'  },
    { name: 'IA', url: '#'  },
    { name: 'Tech', url: '#' },
    { name: 'Tutoriais', url: '#' },
    { name: 'Sobre', url: '/about' }
]
</script>
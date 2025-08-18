<template>
  <div class="fixed top-0 w-full z-50 flex flex-wrap justify-between items-center px-5 py-5
              bg-[#09090b]/70 backdrop-blur-md border-b border-[#27272a] text-[#e7e7e7]">

    <router-link to="/">
      <Logo />
    </router-link>

    <ul class="hidden md:flex flex-row gap-8">
      <li v-for="(nav, i) in navs" :key="i" class="hover:text-[#6b26d9]">
        <router-link :to="nav.url"> {{ nav.name }} </router-link>
      </li>
    </ul>

    <font-awesome-icon icon="search" class="cursor-pointer text-[#e7e7e7] md:block hidden" />

    <button @click="menuAberto = !menuAberto" class="md:hidden">
      <font-awesome-icon :icon="faBars" class="text-2xl" />
    </button>

    <ul v-if="menuAberto" class="w-full mt-4 flex flex-col gap-4 md:hidden">
      <li v-for="(nav, i) in navs" :key="'mobile-' + i" class="hover:text-[#6b26d9]">
        <router-link :to="nav.url"> {{ nav.name }} </router-link>
      </li>
    </ul>
  </div>
</template>


<script setup>
import { ref } from 'vue'
import Logo from '@/components/Logo.vue'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const menuAberto = ref(false)

const navs = [
  { name: 'Início', url: '/' },
  { name: 'Artigos', url: '/Articles' },
  //{ name: 'Tech', url: '#' },
  //{ name: 'Tutoriais', url: '#' },
  { name: 'Sobre', url: '/About' }
]
</script>

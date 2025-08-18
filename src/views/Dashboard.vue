<template>
  <div class="w-full bg-[#09090b] text-white">
    <HeaderNav />
    <div class="w-full h-[500px] gap-10 pt-20 flex flex-col px-10">

      <div class="w-full py-5 flex flex-row justify-between">
        <p>Olá, {{ userStore.user.display_name || userStore.user.email }}</p>
        <div class="flex flex-row gap-5 items-center">
          <router-link :to="{ name: 'create-post' }" class="cursor-pointer h-11 text-sm px-3 md:text-base md:px-7 rounded-md font-medium bg-gradient-to-r from-blue-500 to-purple-500 flex items-center gap-2"> Criar Postagem </router-link>
          <button @click="logout" class="cursor-pointer flex flex-row items-center gap-2">
            Sair
            <LogOut color="white" size="15" />
          </button>
        </div>
      </div>

      <div>Postagens: {{ postsStore.postsCount }}</div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import HeaderNav from '@/components/HeaderNav.vue'
import Footer from '@/components/Footer.vue'
import { useUserStore } from '@/stores/user'
import { supabase } from '@/supabase.js'
import { useRouter } from 'vue-router'
import { usePostsStore } from '@/stores/posts'
import { LogOut } from 'lucide-vue-next'

const postsStore = usePostsStore()
const userStore = useUserStore()
const router = useRouter()

async function logout() {
  await supabase.auth.signOut()

  userStore.logout()

  router.push('/login')
}
onMounted(async () => {
  await postsStore.fetchPosts();
})
</script>

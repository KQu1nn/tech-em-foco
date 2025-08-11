<template>
  <button @click="logout">Sair</button>
  <p>Olá, {{ userStore.user.display_name || userStore.user.email }}</p>
</template>

<script setup>
import { useUserStore } from '@/stores/user'
import { supabase } from '@/supabase.js'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()

async function logout() {
  await supabase.auth.signOut()

  userStore.logout()

  router.push('/login')
}
</script>

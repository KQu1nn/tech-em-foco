<template>
  <router-view />
</template>

<script setup>
import { onMounted } from 'vue'
import { supabase } from '@/supabase.js'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()

onMounted(async () => {
  const { data: { session } } = await supabase.auth.getSession()
  if (session?.user) {
    userStore.setUser(session.user)
  }
})

supabase.auth.onAuthStateChange((event, session) => {
  if (session?.user) {
    userStore.setUser(session.user)
  } else {
    userStore.logout()
  }
})
</script>

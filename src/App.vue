<template>
  <router-view />
</template>

<script setup>
import { supabase } from '@/supabase.js'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()

supabase.auth.onAuthStateChange((event, session) => {
  if (session?.user) {
    userStore.setUser(session.user)
  } else {
    userStore.logout()
  }
})
</script>

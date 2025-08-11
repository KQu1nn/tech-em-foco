<template>
  <div>
    <button @click="login">Testar Login</button>
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from '@/supabase.js'

const message = ref('')

async function login() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: 'themastertechbr@gmail.com',
    password: 'Qu1nn1@23'
  })

  if (error) {
    message.value = 'Erro: ' + error.message
    return
  }

  message.value = 'Logado: ' + data.user.email

  // Veja se o token está salvo no localStorage
  console.log('Token:', localStorage.getItem('supabase.auth.token'))
}
</script>

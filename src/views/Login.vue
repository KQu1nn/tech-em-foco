<template>
    <div class=" w-full h-dvh flex items-center justify-center bg-[#09090b]">
        <div class=" w-[450px] h-auto pb-15 bg-transparent border border-[#27272a] rounded-lg text-white">
            <div class=" w-full h-auto flex flex-col items-center gap-3 py-6">
                <div class=" h-13 w-13 bg-[#130c20] flex items-center justify-center rounded-full">
                    <LockClosedIcon class="h-8 w-8 text-[#6b26d9]" />
                </div>
                <div class="flex flex-col items-center gap-2">
                    <h1 class="text-2xl font-bold">Login Administrativo</h1>
                    <p class=" text-sm text-[#a1a1aa]">Acesse o painel de administração</p>
                </div>
            </div>
            <form @submit.prevent="login" class="flex flex-col items-center gap-3">
                <label class="w-full flex flex-col items-center gap-1">
                    <span class="w-full text-start px-10">
                        <p class="text-sm font-medium">Email</p>
                    </span>
                    <span class=" flex flex-row gap-1 items-center border border-[#27272a] w-10/12 rounded">
                        <font-awesome-icon :icon="['fas', 'user']" class="text-[#a1a1aa] text-sm p-2" />
                        <input v-model="email" type="email" placeholder="admin@email.com" class="text-sm w-full py-2 outline-0">
                    </span>
                </label>
                <label class="w-full flex flex-col items-center gap-1">
                    <span class="w-full text-start px-10">
                        <p class="text-sm font-medium">Senha</p>
                    </span>
                    <span class="flex flex-row gap-1 items-center border border-[#27272a] w-10/12 rounded">
                        <font-awesome-icon :icon="['fas', 'lock']" class="text-[#a1a1aa] text-sm p-2" />
                        <input v-model="senha" type="password" placeholder="••••••••" class="text-sm w-full py-2 outline-0">
                    </span>
                </label>
                <button class="w-10/12 py-2 my-2 rounded bg-[#6b26d9] font-medium cursor-pointer">Entrar</button>
                <p class="text-[#a1a1aa] text-sm">Acesso restrito a administradores</p>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '@/supabase.js'
import { useUserStore } from '@/stores/user'

const router = useRouter()
const userStore = useUserStore()
const email = ref('')
const senha = ref('')

async function login() {
  if (!email.value || !senha.value) {
    alert('Preencha todos os campos!')
    return
  }
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: senha.value
  })
  if (error) {
    alert(error.message)
    return
  }
  userStore.setUser(data.user)
  router.push('/Dashboard')
}
</script>


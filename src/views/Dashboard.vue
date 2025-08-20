<template>
  <div class="w-full min-h-full bg-[#09090b] text-white">
    <HeaderNav />
    <div class="w-full h-auto gap-10 pt-20 flex flex-col px-10">

      <div class="w-full py-5 flex flex-row justify-between">
        <p>Olá, {{ userStore.user.display_name || userStore.user.email }}</p>
        <div class="flex flex-row gap-5 items-center">
          <router-link :to="{ name: 'create-post' }"
            class="cursor-pointer h-11 text-sm px-3 md:text-base md:px-7 rounded-md font-medium bg-gradient-to-r from-blue-500 to-purple-500 flex items-center gap-2">
            Criar Postagem </router-link>
          <button @click="logout" class="cursor-pointer flex flex-row items-center gap-2">
            Sair
            <LogOut color="white" size="15" />
          </button>
        </div>
      </div>

      <div class="w-5/12 flex flex-col gap-2 border border-[#27272a] p-8 rounded-lg ">
        <div class="text-lg font-medium">
          Postagens: {{ postsStore.postsCount }}
        </div>
        <div>
          <ul class="flex flex-col gap-2 divide-y divide-gray-600">
            <li v-for="post in postsStore.posts" :key="post.id" class="flex flex-row justify-between py-4">
              <div>
                <p>{{ post.titulo }}</p>
                <p>Visualizações: {{ post.views }}</p>
              </div>
              <button @click="postsStore.delPost(post)" class="cursor-pointer">
                <Trash2 color="#ff4d4f" size="18" />
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div class="w-5/12 flex flex-col gap-2 border border-[#27272a] p-8 rounded-lg mb-10">
        <div class="flex flex-col gap-2">
          <p class="text-lg font-medium ">Adicionar Categorias</p>
          <input v-model="newCategory" type="text" placeholder="Nova categoria" required
            class="border border-gray-600 rounded-md px-3 py-1 outline-0">
          <button @click="handleAddCategory"
            class="cursor-pointer h-11 text-sm px-3 md:text-base md:px-7 rounded-md font-medium bg-gradient-to-r from-blue-500 to-purple-500">Adicionar</button>
        </div>
        <ul class="flex flex-col gap-2 divide-y divide-gray-600">
          <li v-for="cat in categoryStore.categories" :key="cat.id" class="flex flex-row justify-between py-4">
            <div>
              <p>{{ cat.nome }}</p>
            </div>
            <button @click="categoryStore.delCategory(cat)" class="cursor-pointer">
              <Trash2 color="#ff4d4f" size="18" />
            </button>
          </li>
        </ul>
      </div>

    </div>
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { onMounted } from 'vue'
import HeaderNav from '@/components/HeaderNav.vue'
import Footer from '@/components/Footer.vue'
import { useUserStore } from '@/stores/user'
import { supabase } from '@/supabase.js'
import { useRouter } from 'vue-router'
import { usePostsStore } from '@/stores/posts'
import { useCategoryStore } from '@/stores/category'
import { LogOut } from 'lucide-vue-next'
import { Trash2 } from 'lucide-vue-next'

const postsStore = usePostsStore()
const userStore = useUserStore()
const categoryStore = useCategoryStore()
const router = useRouter()
const newCategory = ref('');
const showError = ref(false);

async function logout() {
  await supabase.auth.signOut()

  userStore.logout()

  router.push('/login')
}

const handleAddCategory = () => {
  if (!newCategory.value.trim()) {
    showError.value = true;
    return;
  }

  showError.value = false;
  categoryStore.addNewCategory(newCategory.value.trim());
  newCategory.value = '';
}

onMounted(async () => {
  await postsStore.fetchPosts();
  await categoryStore.fetchCategories()
})
</script>

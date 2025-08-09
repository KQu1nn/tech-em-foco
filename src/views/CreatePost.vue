<template>
    <div class="min-h-full bg-[#09090bf8] text-white">
        <HeaderNav />
        <div class="w-full flex flex-col items-center pt-25">

            <div class="w-9/12 h-24 items-center flex flex-row gap-8">
                <div class="flex flex-row gap-2 items-center cursor-pointer">
                    <font-awesome-icon :icon="['fas','arrow-left']" />
                    <p class="text-sm font-medium"> Voltar</p>
                </div>
                <div>
                    <p
                        class="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                        Criar Nova Postagem</p>
                    <p class="text-md text-[#a1a1aa]">Compartilhe suas ideias sobre tecnologia e IA</p>
                </div>
            </div>

            <div class="w-9/12 flex flex-col gap-6 p-8 mb-15 border border-[#27272a] rounded-md">
                <p class="text-xl font-medium">Informações do Post</p>
                <form @submit.prevent="sendPost" class="w-full flex flex-row md:flex-col gap-5 ">
                    <div class="flex flex-row gap-8">
                        <label class="w-1/2 flex flex-col text-sm font-medium gap-1">Titulo * 
                            <input
                                v-model="titulo" 
                                type="text"
                                placeholder="Digite o título do post"
                                class="p-2 text-sm font-normal rounded-md outline-0 border border-[#27272a]">
                        </label>
                        <label for="categoria" class="w-1/2 flex flex-col text-sm font-medium gap-1">
                            Categoria *
                            <select
                                v-model="categoria" 
                                id="categoria" required
                                class="p-2 text-sm font-normal rounded-md outline-0 border border-[#27272a] bg-[#0f0f10] cursor-pointer appearance-none">
                                <option value="" disabled selected>Selecione uma categoria</option>
                                <option value="valor1">Valor 1</option>
                                <option value="valor2">Valor 2</option>
                                <option value="valor3">Valor 3</option>
                            </select>
                        </label>
                    </div>
                    <label class="flex flex-col text-sm font-medium gap-1">Resumo *
                        <textarea
                            v-model="resumo"
                            placeholder="Escreva um breve resumo do post..."
                            class="h-20 p-2 text-sm font-normal rounded-md outline-0 border border-[#27272a]"></textarea></label>
                    <label class="flex flex-col text-sm font-medium gap-1">URL da imagem
                        <input
                            v-model="imagem_capa"
                            type="text"
                            placeholder="https://exemplo.com/imagem.jpg"
                            class="p-2 text-sm font-normal rounded-md outline-0 border border-[#27272a]"></input></label>
                    <label class="flex flex-col text-sm font-medium gap-1">Conteúdo *
                        <textarea
                            v-model="conteudo"
                            placeholder="Escreva o conteúdo completo do post..."
                            class="h-52 p-2 text-sm font-normal rounded-md outline-0 border border-[#27272a]"></textarea></label>
                    <div class="flex flex-row gap-3">
                        <button
                            type="submit"
                            class="cursor-pointer h-11 text-sm px-3 md:text-base md:px-7 rounded-md font-medium bg-gradient-to-r from-blue-500 to-purple-500 flex items-center gap-2">Publicar
                            Post</button>
                        <button
                            class="cursor-pointer h-11 text-sm px-3 md:text-base md:px-7 rounded-md font-medium bg-transparent border border-[#27272a] flex items-center gap-2">Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script setup>
    import { ref } from 'vue';
import { usePostsStore } from '@/stores/posts';
import { useRouter } from 'vue-router';

import HeaderNav from '@/components/HeaderNav.vue';
import Footer from '@/components/Footer.vue';

const titulo = ref('');
const categoria = ref('');
const resumo = ref('');
const imagem_capa = ref('');
const conteudo = ref('');

const postsStore = usePostsStore();
const router = useRouter();

function gerarSlug(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+|-+$/g, '');
}

async function sendPost() {
  if (!titulo.value || !categoria.value || !resumo.value || !conteudo.value) {
    alert('Preencha todos os campos obrigatórios (*)');
    return;
  }

  const novoPost = {
    titulo: titulo.value,
    slug: gerarSlug(titulo.value),
    categoria: categoria.value,
    resumo: resumo.value,
    imagem_capa: imagem_capa.value || '',
    conteudo: conteudo.value,
    destaque: false,
    visualizacoes: 0,
    status: 'publicado',
    data_publicacao: new Date().toISOString(),
  };

  const insertedPost = await postsStore.addPost(novoPost);

  if (insertedPost) {
    titulo.value = '';
    categoria.value = '';
    resumo.value = '';
    imagem_capa.value = '';
    conteudo.value = '';

    router.push(`/post/${insertedPost.slug}`);
  } else {
    alert('Erro ao criar o post, tente novamente.');
  }
}
</script>
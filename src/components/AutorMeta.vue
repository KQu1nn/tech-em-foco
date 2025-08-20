<template>
  <div class="w-full flex flex-col gap-2">
    <div class="flex flex-row gap-2 items-center">

      <div class="w-10 h-10 flex justify-center items-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500">
        <span class="text-md font-medium">
          {{ post.author.charAt(0).toUpperCase() }}
        </span>
      </div>

      <div class="text-sm">
        <p class="font-medium">Por {{ post.author }}</p>
        <p class="text-[#a1a1aa]">Publicado em {{ formatDate(post.data_publicacao) }}</p>
      </div>
    </div>
  </div>
</template>


<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  post: {
    type: Object,
    required: true
  }
})


function formatDate(dateString) {
  if (!dateString) return '';

  const date = new Date(dateString);

  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('pt-BR', options); 
}

</script>
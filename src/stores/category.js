import { defineStore } from "pinia";
import { ref } from "vue";
import { supabase } from "@/supabase.js";

export const useCategoryStore = defineStore("Category", () => {
  const categories = ref([]);

  async function fetchCategories() {
    const { data, error } = await supabase.from("categories").select("*");
    if (!error) categories.value = data;
    else console.error("Erro ao buscar categorias:", error);
  }

  async function addNewCategory(newCategory) {
    if(!newCategory || !newCategory.trim()) {
      console.error("Erro: Categoria não pode estar vazia");
      return;
    }

    const { data, error } = await supabase.from("categories").insert([{ nome: newCategory }]).select();
    if(!error) {
      categories.value.push(...data);
      console.log('Categoria adicionado com sucesso')
    } else {
      console.error("Erro ao adicionar categorias:", error);
    }
  }

  async function delCategory(categoryToDelete) {
    const categoryId = categoryToDelete.id;
    const {data, error } = await supabase.from("categories").delete().eq('id', categoryId).select();
    if(!error) {
      console.log(`Categoria deletado`);
      categories.value = categories.value.filter(cat => cat.id !== categoryId);
    } else {
      console.error(error);
    }
  }
  return { categories, fetchCategories, addNewCategory, delCategory };
});

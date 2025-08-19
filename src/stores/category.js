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

  return { categories, fetchCategories };
});

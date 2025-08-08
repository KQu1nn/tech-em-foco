<template>
    <div class="w-full py-7 md:py-0 px-6 bg-[#1f1f22] text-white divide-y divide-[#27272a]">
        <div class="flex flex-col md:flex-row gap-3 items-center justify-between ">
            <div class="w-80 flex flex-col gap-5 ">
                <Logo />
                <p class="text-[#a1a1aa]">Explorando o futuro da tecnologia através de artigos, tutoriais e análises sobre inteligência artificial e inovação.</p>
                <div class="flex gap-8">
                    <a href="https://x.com/" target="_blank" rel="noopener">
                        <font-awesome-icon :icon="['fab', 'x-twitter']" />
                    </a>
                    <a href="https://github.com/" target="_blank" rel="noopener">
                        <font-awesome-icon :icon="['fab', 'github']" />
                    </a>
                    <a href="https://instagram.com/" target="_blank" rel="noopener">
                        <font-awesome-icon :icon="['fab', 'instagram']" />
                    </a>
                    <a href="https://facebook.com/" target="_blank" rel="noopener">
                        <font-awesome-icon :icon="['fab', 'facebook']" />
                    </a>
                </div>
            </div>

            <div class="hidden md:flex flex-row gap-30">
                <div class="flex flex-col gap-5">
                <p class="font-medium">Links Rápidos</p>
                <ul class="flex flex-col gap-1 text-[#a1a1aa]">
                    <li><a href="/" class="hover:text-white">Início</a></li>
                    <li><a href="/about" class="hover:text-white">Sobre</a></li>
                    <li><a href="/contato" class="hover:text-white">Contato</a></li>
                    <li><a href="/privacidade" class="hover:text-white">Política de Privacidade</a></li>
                    <li><a href="/termos" class="hover:text-white">Termos de Uso</a></li>
                </ul>
            </div>
            <div class="hidden md:flex flex-col gap-5">
                <p class="font-medium">Categorias</p>
                <ul class="flex flex-col gap-1 text-[#a1a1aa]">
                    <li><a href="/categoria/ia" class="hover:text-white">Inteligência Artificial</a></li>
                    <li><a href="/categoria/ml" class="hover:text-white">Machine Learning</a></li>
                    <li><a href="/categoria/data-science" class="hover:text-white">Data Science</a></li>
                    <li><a href="/categoria/robotica" class="hover:text-white">Robótica</a></li>
                    <li><a href="/categoria/tutoriais" class="hover:text-white">Tutoriais</a></li>
                </ul>
            </div>
            </div>
            
            <div class="w-full md:w-80 bg-transparent">
                <Newsletter />
            </div>
        </div>
        <div class="py-5 flex flex-col gap-2 md:flex-row items-center justify-between mx-3 text-sm text-[#a1a1aa]">
            <p class="text-center md:flex md:flex-row md:gap-1">© 2025 <a href="/" class="hover:text-blue-500">Tech em Foco.</a> Todos os direitos reservados.</p>
            <p>Feito com <font-awesome-icon :icon="['fas', 'heart']" class="text-red-500" /> por <a href="#" class="hover:text-blue-500">Ramon Kelvin</a></p>
        </div>
    </div>
</template>

<script setup>
import Logo from './Logo.vue';
import Newsletter from './Newsletter.vue';
</script>

<style scoped>
:deep(.newsletter) {
    background-color: transparent;
    border: none;
}
</style>

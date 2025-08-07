<template>
    <div
        class="min-h-full relative bg-center bg-no-repeat bg-cover bg-[url(@/assets/hero.jpg)]">
        <div class="absolute inset-0 bg-[#09090bf8]"></div>

        <div class="relative z-10 pt-24 space-y-4">
            <HeaderNav />

            <div class="mt-20">
                <div class="w-full flex flex-col text-white ">
                    <div class="w-full flex justify-center mt-3">
                        <div
                            class="inline-flex items-center gap-2 bg-[#27272a] px-5 py-2 my-2 rounded-3xl max-w-max cursor-pointer">
                            <Sparkles size="16" color="#7c3aed" />
                            <p class="text-sm font-medium">
                                Explorando o futuro da tecnologia
                            </p>
                        </div>
                    </div>

                    <div
                        class="w-full flex flex-col gap-7 items-center justify-center py-8">
                        <h1 class="text-center text-7xl font-bold leading-none">
                            <span
                                class="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                                Inteligência Artificial </span
                            ><br />
                            <span class="text-white">& Tecnologia</span>
                        </h1>

                        <p class="text-center text-[#a1a1aa] text-2xl">
                            Descubra as últimas tendências em IA, tecnologia e
                            inovação. Artigos, <br />
                            tutoriais e análises para quem quer estar na
                            vanguarda digital.
                        </p>
                        <div class="flex flex-row gap-4 pb-15 ">
                            <button
                                class="cursor-pointer h-11 px-7 rounded-md font-medium bg-gradient-to-r from-blue-500 to-purple-500 flex items-center gap-2">
                                Explorar Artigos
                                <font-awesome-icon
                                    icon="arrow-right"
                                    style="width: 14px; height: 14px"
                                />
                            </button>
                            <button
                                class="cursor-pointer h-11 px-7 rounded-md text-[#6b26d9] font-medium border-1 border-[#6b26d9] hover:bg-[#6b26d9] hover:text-black">
                                Newsletter Gratuita
                            </button>
                        </div>
                        <div class="w-4/6 border-b-1 border-b-[#27272a]"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import HeaderNav from './HeaderNav.vue'
    import { Sparkles } from 'lucide-vue-next'
</script>

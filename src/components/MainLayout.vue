<template>
    <div class="flex min-h-screen bg-[#09090b] text-white">

        <div class="flex-1 p-6">
            <div class="h-60 w-full flex flex-col justify-center items-center gap-3">
                <h1 class="text-4xl font-bold">Últimos <span class="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Artigos</span></h1>
                <p class="md:w-4/6 text-lg text-center text-[#a1a1aa]">Fique por dentro das últimas novidades e tendências em tecnologia e inteligência artificial</p>
            </div>

            <div class="w-full flex flex-col gap-5">

                <h1 class="text-xl flex flex-row items-center gap-3">
                    <div class="w-1 h-6 rounded bg-gradient-to-b from-purple-500 to-blue-500"></div>
                    Artigo em Destaque
                </h1>

                <div class="h-auto md:w-4/6 border border-[#1f133d] rounded-lg cursor-pointer">
                    <div class="h-48 w-full rounded-t-lg flex justify-center items-center bg-purple-700">
                        <!-- <img src="https://via.placeholder.com/600x200" alt="imagem artigo" class="h-48 w-full object-cover rounded-t-lg"> -->
                        Imagem
                    </div>
                    <div class="p-6 flex flex-col gap-3">
                        <div class="flex flex-row gap-3 text-[#a1a1aa]">
                            <p class="flex flex-row gap-1 items-center text-sm">
                                <font-awesome-icon :icon="['far', 'calendar']" class="rounded"/>
                                15 Jan 2025
                            </p>
                            <p class="flex flex-row gap-1 items-center text-sm">
                                <font-awesome-icon  :icon="['far', 'clock']"  class="rounded" />
                                8 min
                            </p>
                        </div>
                        <div class="flex flex-col gap-3">
                            <h2 class="text-xl font-medium">O Futuro da Inteligência Artificial: Tendências para 2024</h2>
                            <p class="text-[#a1a1aa]">Explore as principais tendências em IA que estão moldando o futuro da tecnologia, desde machine learning até redes neurais avançadas.</p>
                        </div>
                        <button class="text-start text-purple-700 cursor-pointer transition hover:brightness-110">
                            Ler mais
                            <font-awesome-icon icon="arrow-right" style="width: 14px; height: 14px"/>
                        </button>
                    </div>
                </div>
            </div>

        </div>

        <aside class="w-80 flex flex-col gap-10 p-6 min-w-[200px] break-words whitespace-normal">

            <div class="w-full h-60 flex flex-col gap-5 bg-[#0e0c16] border border-[#1f133d] rounded-lg py-6 px-4">
                <h1 class="text-[22px] font-medium">
                    <font-awesome-icon :icon="['far', 'envelope']" class="text-[#6b26d9]" size="lg" />
                    Newsletter
                </h1>
                <div class="flex flex-col gap-3 text-sm">
                    <p class="text-[#a1a1aa]">Receba os melhores artigos sobre IA e tecnologia diretamente no seu email.</p>
                    <form @submit.prevent="" class="flex flex-col gap-2">
                        <input type="text" placeholder="Seu email" class="w-full border border-[#292929] rounded px-3 py-2 bg-[#09090b] text-[#a1a1aa]">
                        <button class="w-full rounded py-2 font-medium bg-gradient-to-r from-blue-500 to-purple-500 cursor-pointer transition hover:brightness-110">Inscrever-se</button>
                    </form>
                </div> 
            </div>

            <div class="w-full h-auto flex flex-col gap-4 border border-[#27272a] rounded-lg py-6 px-4">
                <h1 class="text-[22px] font-medium">
                    <font-awesome-icon :icon="['fas', 'rss']" class="text-blue-500" size="sm" />
                    Categorias
                </h1>
                <div class="flex flex-row items-center justify-between text-sm font-medium p-1.5 transition cursor-pointer hover:bg-[#27272a] hover:rounded">
                    <div class="flex flex-row items-center gap-2">
                        <div class="w-3 h-3 rounded bg-purple-700"></div>
                        <p>Inteligência Artificial</p>
                    </div>
                    <p class="px-2.5 py-0.5 rounded-xl bg-[#27272a]">42</p>
                </div>
                <div class="flex flex-row items-center justify-between text-sm font-medium p-1.5 transition cursor-pointer hover:bg-[#27272a] hover:rounded">
                    <div class="flex flex-row items-center gap-2">
                        <div class="w-3 h-3 rounded bg-purple-700"></div>
                        <p>Machine Learning</p>
                    </div>
                    <p class="px-2.5 py-0.5 rounded-xl bg-[#27272a]">38</p>
                </div>
                <div class="flex flex-row items-center justify-between text-sm font-medium p-1.5 transition cursor-pointer hover:bg-[#27272a] hover:rounded">
                    <div class="flex flex-row items-center gap-2">
                        <div class="w-3 h-3 rounded bg-blue-400"></div>
                        <p>Data Science</p>
                    </div>
                    <p class="px-2.5 py-0.5 rounded-xl bg-[#27272a]">29</p>
                </div>
                <div class="flex flex-row items-center justify-between text-sm font-medium p-1.5 transition cursor-pointer hover:bg-[#27272a] hover:rounded">
                    <div class="flex flex-row items-center gap-2">
                        <div class="w-3 h-3 rounded bg-purple-700"></div>
                        <p>Robótica</p>
                    </div>
                    <p class="px-2.5 py-0.5 rounded-xl bg-[#27272a]">10</p>
                </div>
                <div class="flex flex-row items-center justify-between text-sm font-medium p-1.5 transition cursor-pointer hover:bg-[#27272a] hover:rounded">
                    <div class="flex flex-row items-center gap-2">
                        <div class="w-3 h-3 rounded bg-blue-700"></div>
                        <p>Automação</p>
                    </div>
                    <p class="px-2.5 py-0.5 rounded-xl bg-[#27272a]">18</p>
                </div>
                <div class="flex flex-row items-center justify-between text-sm font-medium p-1.5 transition cursor-pointer hover:bg-[#27272a] hover:rounded">
                    <div class="flex flex-row items-center gap-2">
                        <div class="w-3 h-3 rounded bg-purple-700"></div>
                        <p>IoT</p>
                    </div>
                    <p class="px-2.5 py-0.5 rounded-xl bg-[#27272a]">15</p>
                </div>
            </div>
        </aside>
        
    </div>
</template>
<script setup>

</script>
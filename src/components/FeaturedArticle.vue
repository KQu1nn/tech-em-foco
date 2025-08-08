<template>
    <div class="w-full flex flex-col gap-5 pb-10 items-center md:items-start">

        <h1 class="text-xl flex flex-row items-center gap-3">
            <div class="w-1 h-6 rounded bg-gradient-to-b from-purple-500 to-blue-500"></div>
            Artigo em Destaque
        </h1>

        <div class="w-11/12 md:w-4/6 border border-[#1f133d] rounded-lg cursor-pointer">
            <div class="h-48 w-full rounded-t-lg flex justify-center items-center bg-purple-700">
                <!-- <img src="https://via.placeholder.com/600x200" alt="imagem artigo" class="h-48 w-full object-cover rounded-t-lg"> -->
                Imagem
            </div>
            <div class="p-6 flex flex-col gap-3">
                <div class="flex flex-row gap-3 text-[#a1a1aa]">
                    <p class="flex flex-row gap-1 items-center text-sm">
                        <font-awesome-icon :icon="['far', 'calendar']" class="rounded" />
                        15 Jan 2025
                    </p>
                    <p class="flex flex-row gap-1 items-center text-sm">
                        <font-awesome-icon :icon="['far', 'clock']" class="rounded" />
                        8 min
                    </p>
                </div>
                <div class="flex flex-col gap-3">
                    <h2 class="text-xl font-medium hover:text-purple-700">O Futuro da Inteligência Artificial: Tendências para 2024</h2>
                    <p class="text-[#a1a1aa]">Explore as principais tendências em IA que estão moldando o futuro da
                        tecnologia, desde machine learning até redes neurais avançadas.</p>
                </div>
                <button class="text-start text-purple-700 cursor-pointer transition hover:brightness-110">
                    Ler mais
                    <font-awesome-icon icon="arrow-right" style="width: 14px; height: 14px" />
                </button>
            </div>
        </div>
    </div>
</template>
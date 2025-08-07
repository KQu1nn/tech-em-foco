<template>
    <div class="newsletter w-full h-60 flex flex-col gap-5 bg-[#0e0c16] border border-[#1f133d] rounded-lg py-6 px-4">
            <h1 class="text-[22px] font-medium">
                <font-awesome-icon :icon="['far', 'envelope']" class="text-[#6b26d9]" size="lg" />
                Newsletter
            </h1>
            <div class="flex flex-col gap-3 text-sm">
                <p class="text-[#a1a1aa]">Receba os melhores artigos sobre IA e tecnologia diretamente no seu email.</p>
                <form @submit.prevent="" class="flex flex-col gap-2">
                    <input type="text" placeholder="Seu email" class="w-full outline-0 border border-[#292929] rounded px-3 py-2 bg-[#09090b] text-[#a1a1aa]">
                    <button class="w-full rounded py-2 font-medium bg-gradient-to-r from-blue-500 to-purple-500 cursor-pointer transition hover:brightness-110">Inscrever-se</button>
                </form>
            </div> 
        </div>
</template>
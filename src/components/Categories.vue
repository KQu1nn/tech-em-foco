<template>
    <div class="w-full h-auto flex flex-col gap-4 border border-[#27272a] rounded-lg py-6 px-4">
        <h1 class="text-[22px] font-medium">
            <font-awesome-icon :icon="['fas', 'rss']" class="text-blue-500" size="sm" />
            Categorias
        </h1>
        <div
            class="flex flex-row items-center justify-between text-sm font-medium p-1.5 transition cursor-pointer hover:bg-[#27272a] hover:rounded">
            <div class="flex flex-row items-center gap-2">
                <div class="w-3 h-3 rounded bg-purple-700"></div>
                <p>Inteligência Artificial</p>
            </div>
            <p class="px-2.5 py-0.5 rounded-xl bg-[#27272a]">42</p>
        </div>
        <div
            class="flex flex-row items-center justify-between text-sm font-medium p-1.5 transition cursor-pointer hover:bg-[#27272a] hover:rounded">
            <div class="flex flex-row items-center gap-2">
                <div class="w-3 h-3 rounded bg-purple-700"></div>
                <p>Machine Learning</p>
            </div>
            <p class="px-2.5 py-0.5 rounded-xl bg-[#27272a]">38</p>
        </div>
        <div
            class="flex flex-row items-center justify-between text-sm font-medium p-1.5 transition cursor-pointer hover:bg-[#27272a] hover:rounded">
            <div class="flex flex-row items-center gap-2">
                <div class="w-3 h-3 rounded bg-blue-400"></div>
                <p>Data Science</p>
            </div>
            <p class="px-2.5 py-0.5 rounded-xl bg-[#27272a]">29</p>
        </div>
        <div
            class="flex flex-row items-center justify-between text-sm font-medium p-1.5 transition cursor-pointer hover:bg-[#27272a] hover:rounded">
            <div class="flex flex-row items-center gap-2">
                <div class="w-3 h-3 rounded bg-purple-700"></div>
                <p>Robótica</p>
            </div>
            <p class="px-2.5 py-0.5 rounded-xl bg-[#27272a]">10</p>
        </div>
        <div
            class="flex flex-row items-center justify-between text-sm font-medium p-1.5 transition cursor-pointer hover:bg-[#27272a] hover:rounded">
            <div class="flex flex-row items-center gap-2">
                <div class="w-3 h-3 rounded bg-blue-700"></div>
                <p>Automação</p>
            </div>
            <p class="px-2.5 py-0.5 rounded-xl bg-[#27272a]">18</p>
        </div>
        <div
            class="flex flex-row items-center justify-between text-sm font-medium p-1.5 transition cursor-pointer hover:bg-[#27272a] hover:rounded">
            <div class="flex flex-row items-center gap-2">
                <div class="w-3 h-3 rounded bg-purple-700"></div>
                <p>IoT</p>
            </div>
            <p class="px-2.5 py-0.5 rounded-xl bg-[#27272a]">15</p>
        </div>
    </div>
</template>
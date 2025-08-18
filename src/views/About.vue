<template>
    <div class="min-h-full bg-[#09090b] text-white">

        <HeaderNav />
        <div class="pt-20 px-5">
            <div class=" w-full flex flex-col justify-center items-center gap-5 py-15 md:py-20">
                <h1 class=" text-center text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Sobre o Tech em Foco</h1>
                <p class="w-11/12 px-1 md:w-8/12 text-center text-[22px] text-[#a1a1aa]">Explorando o futuro da tecnologia através da inteligência artificial, machine learning e inovações que transformam nosso mundo.</p>
            </div>
            <div class="w-full flex flex-col md:flex-row justify-center gap-5 md:gap-10 py-5">
                
                <div class=" w-full md:w-[620px] bg-[#0d0a13a8] p-7 flex flex-col gap-3 border border-[#20103c] rounded-lg">
                    <div class=" flex flex-row items-center text-2xl font-bold gap-3">
                        <span class=" w-10 h-10 rounded border-0 bg-[#140c22] flex items-center justify-center">
                            <Target color="#6b26d9" size="25"/>
                        </span>
                        <h1>Nossa Missão</h1>
                    </div>
                    <p class="text-[#a1a1aa]">Democratizar o conhecimento sobre inteligência artificial e tecnologias emergentes, tornando conceitos complexos acessíveis para todos os níveis de expertise.</p>
                
                </div>
                <div class="w-full md:w-[620px] p-7 flex flex-col gap-3 bg-[#0c0f14ad] border border-[#15243f] rounded-lg">
                    <div class=" flex flex-row items-center text-2xl font-bold gap-3">
                        <span class=" w-10 h-10 rounded border-0 bg-[#0e1525] flex items-center justify-center">
                            <Lightbulb color="#3c83f6" size="25" />
                        </span>
                        <h1>Nossa Missão</h1>
                    </div>
                    <p class="text-[#a1a1aa]">Ser a principal fonte de referência em português para profissionais e entusiastas que desejam compreender e aplicar IA em suas áreas de atuação.</p>
                </div>
            </div>
            <div class=" w-full flex flex-col items-center gap-10 py-15">
                <h1 class="text-3xl font-bold">O que Cobrimos</h1>
                <div class="flex flex-col gap-10 md:flex-row">
                    <div class="w-96 flex flex-col items-center text-center gap-3">
                        <div class="flex flex-col items-center gap-3">
                            <span class=" w-17 h-17 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
                                <Brain color="#ffff" size="33" />
                            </span>
                            <h2 class="text-xl font-medium">Inteligência Artificial</h2>
                        </div>
                        <p class="text-[#a1a1aa]">Algoritmos, redes neurais, deep learning e as últimas descobertas em IA.</p>
                    </div>
                    <div class="w-96 flex flex-col items-center text-center gap-3">
                        <div class="flex flex-col items-center gap-3">
                            <span class=" w-17 h-17 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
                                <Code color="#ffff" size="33" />
                            </span>
                            <h2 class="text-xl font-medium">Tecnologia</h2>
                        </div>
                        <p class="text-[#a1a1aa]">Frameworks, ferramentas e tendências tecnológicas que moldam o futuro.</p>
                    </div>
                    <div class="w-96 flex flex-col items-center text-center gap-3">
                        <div class="flex flex-col items-center gap-3">
                            <span class=" w-17 h-17 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
                                <Rocket color="#ffff" size="33" />
                            </span>
                            <h2 class="text-xl font-medium">Inovação</h2>
                        </div>
                        <p class="text-[#a1a1aa]">Startups, produtos revolucionários e o impacto da tecnologia na sociedade.</p>
                    </div>
                </div>
            </div>
            <div class=" w-full flex flex-col gap-8 p-5 md:p-10 rounded-2xl bg-gradient-to-r from-[#130c20] to-[#0f1523]">
                <div class="flex flex-row gap-3 items-center">
                    <span class=" w-10 h-10 rounded-md border-0 bg-[#291847] flex items-center justify-center">
                        <Users color="#6b26d9" size="25" />
                    </span>
                    <h1 class=" text-2xl md:text-3xl font-bold">Nossa Abordagem</h1>
                </div>
                <div class=" w-full flex flex-col md:flex-row gap-8">
                    <div class=" w-full md:w-11/12 flex flex-col gap-3">
                        <h2 class=" text-xl font-medium">Conteúdo Acessivel</h2>
                        <p class="text-[#a1a1aa]">Explicamos conceitos complexos de forma clara e objetiva, sem perder a profundidade técnica.</p>
                        <ul class="text-center text-xs font-medium flex flex-row gap-3">
                            <li class=" bg-[#27272a] rounded-full px-3 py-0.5">Tutoriais Práticos</li>
                            <li class=" bg-[#27272a] rounded-full px-3 py-0.5">Exemplos Reais</li>
                            <li class=" bg-[#27272a] rounded-full px-3 py-0.5">Linguagem Clara</li>
                        </ul>
                    </div>
                    <div class=" w-full md:w-11/12 flex flex-col gap-3">
                        <h2 class=" text-xl font-medium">Atualização Constante</h2>
                        <p class="text-[#a1a1aa]">O mundo da IA evolui rapidamente. Nosso conteúdo acompanha as últimas tendências e descobertas.</p>
                        <ul class="text-center text-xs font-medium flex flex-row gap-2">
                            <li class=" bg-[#27272a] rounded-full px-3 py-0.5">Pesquisa Contínua</li>
                            <li class=" bg-[#27272a] rounded-full px-3 py-0.5">Fontes Confiáveis</li>
                            <li class=" bg-[#27272a] rounded-full px-3 py-0.5">Análise Crítica</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class=" w-full text-center flex flex-col items-center gap-6 py-16">
                <h1 class="text-3xl font-bold ">Junte-se a Nossa Comunidade</h1>
                <p class=" md:text-xl text-[#a1a1aa] md:w-9/12">Faça parte de uma comunidade apaixonada por tecnologia e IA.<br> Compartilhe conhecimento, tire dúvidas e acompanhe as últimas novidades.</p>
                <ul class="flex flex-col md:flex-row gap-4">
                    <li class="border border-[#3e3e42] rounded-full px-4 py-2">🤖 Entusiastas de IA</li>
                    <li class="border border-[#3e3e42] rounded-full px-4 py-2">💻 Desenvolvedores</li>
                    <li class="border border-[#3e3e42] rounded-full px-4 py-2">🎓 Estudantes</li>
                    <li class="border border-[#3e3e42] rounded-full px-4 py-2">🚀 Empreendedores</li>
                </ul>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script setup>
import HeaderNav from '@/components/HeaderNav.vue';
import Footer from '@/components/Footer.vue';
import { Target, Lightbulb, Brain, Code, Rocket, Users } from "lucide-vue-next"

</script>
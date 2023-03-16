<template>
    <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

    <div class="max-w-2xl m-auto mt-16">

        <div class="text-center px-4">
            <div class="inline-flex mb-8">
            <img :src="Logo" width="176" height="176" alt="404 illustration" />
            </div>
            <div class="mb-6 text-2xl font-semibold">
                <p>¡Próximamente más contenido!</p>
                <p>(Error 404)</p>
            </div>
            <NuxtLink to="/" class="btn bg-indigo-500 hover:bg-indigo-600 text-white">Volver al Inicio</NuxtLink>
        </div>

    </div>

    </div>        
</template>
<script setup>
import Logo from "~/assets/img/logo.png"
</script>
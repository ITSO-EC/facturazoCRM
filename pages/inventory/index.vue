<script setup lang="ts">

definePageMeta({
  middleware: 'auth'
})

const router = useRouter();
const user = await useUser()

function goToRegister() {
  router.push('/register')
}

</script>

<template>
  <div v-if="user" class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
    <div class="sm:flex sm:justify-between sm:items-center mb-8">

       <!-- Left: Title -->
       <div class="mb-4 sm:mb-0">
          <h1 class="text-2xl md:text-3xl text-secondaryText dark:text-slate-50 font-medium">Inventario
          
          </h1>
        
      </div>

    

    </div>
    <!-- Right: Actions  -->
    <div class="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-between gap-2">
      <SearchInput/>
      <button class="btn bg-primary text-white font-bold hover:scale-105 active:scale-95">Crear Producto</button>

              
    </div>
    <div class="h-auto my-10 ">
      <div class="m-auto text-center lg:w-8/12 xl:w-7/12">
        <h2 class="text-2xl text-gray-800 dark:text-gray-200 font-bold md:text-4xl">Index
        </h2>
      </div>
      <GenericTable></GenericTable>

    </div>
  </div>
</template>

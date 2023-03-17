<script setup lang="ts">
import TheBillboard from "~~/components/elements/TheBillboard.vue";

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
        <h1 class="text-2xl md:text-3xl text-secondaryText dark:text-slate-50 font-medium">Panel de Control
         
        </h1>
      </div>
       <!-- Right: Actions  -->
      <div class="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">

      
                  
      </div>
      

    </div>
    
    <div class="h-auto my-10 ">
      <div class="m-auto text-center lg:w-8/12 xl:w-7/12">
        <h2 class="text-2xl text-gray-800 dark:text-gray-200 font-bold md:text-4xl">Mi dashboard
        </h2>
      </div>
     

    </div>
  </div>
</template>

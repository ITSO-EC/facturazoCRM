<script setup lang="ts">
import { ref } from "vue";
const sidebarOpen = ref(false)

</script>

<template>
  <div class="flex h-screen overflow-hidden dark:bg-black">

    <!-- Sidebar -->
    <ClientOnly >
      <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" />
     
    </ClientOnly>
    <!-- Content area -->
    <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      
      <!-- Site header -->
      <Header :sidebarOpen="sidebarOpen" @toggle-sidebar="sidebarOpen = !sidebarOpen" />
      
      <!-- <Navbar/> -->
      <main>
        <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
          <slot/>
        </div>
       
      
      </main>
    </div> 

  </div>
</template>
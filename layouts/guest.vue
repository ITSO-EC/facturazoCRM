<script setup lang="ts">
import { ref } from "vue";
import Navbar from "~~/components/layout/TheNavBar.vue";
import TheFooter from "~~/components/layout/TheFooter.vue";
const sidebarOpen = ref(false)

</script>

<template>
  <div class="flex h-screen overflow-hidden">

    <!-- Sidebar -->
    <!-- <ClientOnly >
      <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" />
     
    </ClientOnly> -->
    <!-- Content area -->
    <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      
     
      <!-- <Navbar/> -->
      <main>
        <div class="">
          <slot/>
        </div>
       
      
      </main>
    </div> 

  </div>
</template>
  
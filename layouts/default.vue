<script setup lang="ts">
import { ref } from "vue";

const sidebarOpen = ref(false)


</script>

<template>
  
  <Head>
      <Title>Facturazo</Title>
  </Head>
  <div class="h-screen overflow-hidden">

    <!-- Sidebar -->
   
    <!-- Content area -->
    
      
      <!-- Site header -->
      <Header :sidebarOpen="sidebarOpen" @toggle-sidebar="sidebarOpen = !sidebarOpen" ></Header>
      <div class="flex">
        <ClientOnly>
          <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" />
          
        </ClientOnly>   
        <main class="grow">
        
          <slot/>
        
        </main>
      </div>
        
     

  </div>
</template>
  
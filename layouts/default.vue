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
      
      <main>
        <ClientOnly >
      <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" />
     
    </ClientOnly>     
          <slot/>
      
      </main>

  </div>
</template>
  
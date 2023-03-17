<template>
  <div>
    <!-- Sidebar backdrop (mobile only) -->
    <div class="fixed z-40 inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200" :class="sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'" aria-hidden="true"></div>

    <!-- Sidebar -->
    <div
      id="sidebar"
      ref="sidebar"
      class="flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 p-4 transition-all duration-200 ease-in-out"
      :class="sidebarOpen ? 'translate-x-0 bg-whiteColor' : '-translate-x-64'"
    >

      <!-- Sidebar header -->
      <div class="flex justify-between mb-10 pr-3 sm:px-2">
        <!-- Close button -->
        <button
          ref="trigger"
          class="lg:hidden text-slate-500 hover:text-slate-400"
          @click.stop="$emit('close-sidebar')"
          aria-controls="sidebar"
          :aria-expanded="sidebarOpen"
        >
          <span class="sr-only">Close sidebar</span>
          <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
          </svg>
        </button>
        
      </div>

      <!-- Links -->
      <div class="space-y-8">
        <!-- Pages group -->
        <div>
         
          <ul class="mt-3">
          
        
            <!-- Home -->
            <NuxtLink to="/dashboard" custom v-slot="{ href, navigate, isExactActive }">
              <li class="rounded-lg overflow-hidden px-3 py-4 text-lg font-semibold text-primaryText hover:text-blackColor mb-0.5 last:mb-0 hover:text-secondaryText hover:bg-tertiary hover:bg-opacity-20 " 
              :class="(currentRoute.fullPath === '/dashboard' ) && 'bg-tertiary bg-opacity-20'">
               <a class="block truncate transition duration-150" :class="isExactActive" :href="href" @click="navigate">
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                    :class="(currentRoute.fullPath === '/dashboard' ) && 'text-primary'">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3 13H11V3H3V13ZM3 21H11V15H3V21ZM13 21H21V11H13V21ZM13 3V9H21V3H13Z" fill="currentColor"/>
                    </svg>
                    <span class="ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Panel de Control</span>
                  </div>
                  
                </div>
              </a>
              </li>
            </NuxtLink>
          
            <!-- Users -->
            <NuxtLink to="/inventory" custom v-slot="{ href, navigate, isExactActive }">
              <li class="rounded-lg overflow-hidden px-3 py-4 text-lg font-semibold text-primaryText hover:text-blackColor mb-0.5 last:mb-0 hover:text-secondaryText hover:bg-tertiary hover:bg-opacity-20 " :class="isExactActive && 'bg-tertiary bg-opacity-20'">
               <a class="block truncate transition duration-150" :class="isExactActive" :href="href" @click="navigate">
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    :class="isExactActive && 'text-primary'">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 7V3H2V21H22V7H12ZM6 19H4V17H6V19ZM6 15H4V13H6V15ZM6 11H4V9H6V11ZM6 7H4V5H6V7ZM10 19H8V17H10V19ZM10 15H8V13H10V15ZM10 11H8V9H10V11ZM10 7H8V5H10V7ZM20 19H12V17H14V15H12V13H14V11H12V9H20V19ZM18 11H16V13H18V11ZM18 15H16V17H18V15Z" fill="currentColor"/>
                    </svg>
                    <span class="ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Inventario</span>
                  </div>
                  
                </div>
              </a>
              </li>
            </NuxtLink>
              
            <!-- Users -->
            <NuxtLink to="/users" custom v-slot="{ href, navigate, isExactActive }">
              <li class="rounded-lg overflow-hidden px-3 py-4 text-lg font-semibold text-primaryText mb-0.5 last:mb-0 hover:text-secondaryText hover:bg-tertiary hover:bg-opacity-20 " :class="isExactActive && 'bg-tertiary bg-opacity-20'">
               <a class="block truncate transition duration-150" :class="isExactActive" :href="href" @click="navigate">
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                    class="w-6 h-6"
                    :class="isExactActive && 'text-primary'">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>

                    <span class="ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Users</span>
                  </div>
                  
                </div>
              </a>
              </li>
            </NuxtLink>
                       
         
          </ul>
        </div>
      </div>

      <!-- Expand / collapse button -->
      <div class="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
        <div class="px-3 py-2">
          <button @click.prevent="sidebarExpanded = !sidebarExpanded">
            <span class="sr-only">Expand / collapse sidebar</span>
            <svg class="w-6 h-6 fill-current sidebar-expanded:rotate-180" viewBox="0 0 24 24">
              <path class="text-slate-400" d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z" />
              <path class="text-slate-600" d="M3 23H1V1h2z" />
            </svg>
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch} from 'vue'
import Logo from "~/assets/img/logo.png"

import SidebarLinkGroup from './SidebarLinkGroup.vue'

const props = defineProps(['sidebarOpen'])
const emit = defineEmits(['close-sidebar'])

const trigger = ref(null)
const sidebar = ref(null)


const storedSidebarExpanded = localStorage.getItem('sidebar-expanded')
const sidebarExpanded = ref(storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true')

const currentRoute = useRoute();
// close on click outside
const clickHandler = ({ target }) => {
  if (!sidebar.value || !trigger.value) return
  if (
    !props.sidebarOpen ||
    sidebar.value.contains(target) ||
    trigger.value.contains(target)
  ) return
  emit('close-sidebar')
}

// close if the esc key is pressed
const keyHandler = ({ keyCode }) => {
  if (!props.sidebarOpen || keyCode !== 27) return
  emit('close-sidebar')
} 

onMounted(() => {
  document.addEventListener('click', clickHandler)
  document.addEventListener('keydown', keyHandler)
})

onUnmounted(() => {
  document.removeEventListener('click', clickHandler)
  document.removeEventListener('keydown', keyHandler)
})

watch(sidebarExpanded, () => {
  
  localStorage.setItem('sidebar-expanded', sidebarExpanded.value)
  if (sidebarExpanded.value) {
    document.querySelector('body').classList.add('sidebar-expanded')
  } else {
    document.querySelector('body').classList.remove('sidebar-expanded')
  }
})


</script>
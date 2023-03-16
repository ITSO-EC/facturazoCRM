<script setup lang="ts">
import { ref } from 'vue'
import Logo from "~~/components/elements/Logos/colorMode.vue"
const props = defineProps<{
  sidebarOpen: Boolean
}>();
const searchModalOpen = ref(false)
const colorMode = useColorMode()



const user = useState('user')
const initalCheck = await useLoggedIn()
const isLoggedIn = ref(initalCheck)
const router = useRouter();

const setColorTheme = (newTheme: Theme) => {
  colorMode.preference = newTheme
}

async function checkIfLoggedIn() {
  const check = await useLoggedIn()
  isLoggedIn.value = check
}

watch(user, async () => {
  await checkIfLoggedIn()
}, { deep: true });



</script>
<template>
  <header class="sticky top-0  bg-white dark:bg-slate-600 shadow   z-30">
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 -mb-px">

        <!-- Header: Left side -->
        <div class="flex items-center">
         
          <Logo/>
          <span class="text-secondaryText mx-4 text-2xl font-normal">Facturazo</span>
          <!-- Hamburger button -->
          <button class="text-slate-500 hover:text-slate-600 lg:hidden" @click.stop="$emit('toggle-sidebar')" aria-controls="sidebar" :aria-expanded="sidebarOpen">
            <span class="sr-only">Open sidebar</span>
            <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="5" width="16" height="2" />
              <rect x="4" y="11" width="16" height="2" />
              <rect x="4" y="17" width="16" height="2" />
            </svg>
          </button>

        </div>

        <!-- Header: Right side -->
        <div class="flex items-center space-x-6">

         
          <span class="hidden md:block hover:cursor-pointer" @click="setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
            <path d="M12 15H17L15.595 13.595C15.4063 13.4063 15.2567 13.1822 15.1546 12.9357C15.0525 12.6891 15 12.4249 15 12.158V9C15.0002 7.75894 14.6156 6.54834 13.8992 5.53489C13.1829 4.52144 12.17 3.75496 11 3.341V3C11 2.46957 10.7893 1.96086 10.4142 1.58579C10.0391 1.21071 9.53043 1 9 1C8.46957 1 7.96086 1.21071 7.58579 1.58579C7.21071 1.96086 7 2.46957 7 3V3.341C4.67 4.165 3 6.388 3 9V12.159C3 12.697 2.786 13.214 2.405 13.595L1 15H6M12 15V16C12 16.7956 11.6839 17.5587 11.1213 18.1213C10.5587 18.6839 9.79565 19 9 19C8.20435 19 7.44129 18.6839 6.87868 18.1213C6.31607 17.5587 6 16.7956 6 16V15M12 15H6" stroke="#64748B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <!-- <svg v-if="$colorMode.value == 'dark'" xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-gray-50 hidden lg:block hover:dark:text-yellow-400 hover:text-yellow-400" 
              viewBox="0 0 20 20" 
              fill="currentColor">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
            <svg v-if="$colorMode.value == 'light'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hidden lg:block hover:dark:text-yellow-400 hover:text-yellow-400"
              viewBox="0 0 20 20" fill="currentColor ">
              <path fill-rule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clip-rule="evenodd" />
            </svg> -->
          </span>
          <DropdownProfile :is-logged-in="isLoggedIn" align="right" />

        </div>

      </div>
    </div>
  </header>
</template>


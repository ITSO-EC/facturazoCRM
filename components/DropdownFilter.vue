<template>
  <div class="relative inline-flex">
    <button
      ref="trigger"
      class="btn bg-white border-slate-200 hover:border-slate-300 text-slate-500 hover:text-slate-600"
      aria-haspopup="true"
      @click.prevent="dropdownOpen = !dropdownOpen"
      :aria-expanded="dropdownOpen"
    >
      <span class="sr-only">Filter</span><wbr />
      <svg class="w-4 h-4 fill-current" viewBox="0 0 16 16">
        <path d="M9 15H7a1 1 0 010-2h2a1 1 0 010 2zM11 11H5a1 1 0 010-2h6a1 1 0 010 2zM13 7H3a1 1 0 010-2h10a1 1 0 010 2zM15 3H1a1 1 0 010-2h14a1 1 0 010 2z" />
      </svg>
    </button>
    <transition
      enter-active-class="transition ease-out duration-200 transform"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-out duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-show="dropdownOpen" class="origin-top-right z-10 absolute top-full min-w-56 bg-white border border-slate-200 pt-1.5 rounded shadow-lg overflow-hidden mt-1" :class="align === 'right' ? 'right-0' : 'left-0'">
        <div ref="dropdown">
          <div class="text-xs font-semibold text-slate-400 uppercase pt-1.5 pb-2 px-4">Claves</div>
          <ul class="mb-4">
            <li class="py-1 px-3" v-for="option in options" :key="option" @click="filterKeys[option] = false">
              <label class="flex items-center">
                <input type="checkbox" class="form-checkbox" v-model="filterKeys[option]"/>
                <span class="text-sm font-medium ml-2">{{ option }}</span>
              </label>
            </li>
            
          </ul>
          <div class="py-2 px-3 border-t border-slate-200 bg-slate-50">
            <ul class="flex items-center justify-between">
              <li>
                <button @click="clearFilters()" class="btn-xs bg-white border-slate-200 hover:border-slate-300 text-slate-500 hover:text-slate-600">Cancelar</button>
              </li>
              <li>
                <button @click="dropdownOpen = false; applyFilters(); clearFilters()" class="btn-xs bg-indigo-500 hover:bg-indigo-600 text-white" @focusout="dropdownOpen = false">Aplicar</button>
              </li>
            </ul>
          </div>          
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps(['align','options'])
const emit = defineEmits(['apply-filters'])
const filterKeys = ref({});
const dropdownOpen = ref(false)
const trigger = ref(null)
const dropdown = ref(null)

const clearFilters = () => {
  for(let key in filterKeys.value) {
      filterKeys.value[key] = false;
  }
}
const applyFilters = () => {
  emit('apply-filters', filterKeys.value);
}

// close on click outside
const clickHandler = ({ target }) => {
  if (!dropdownOpen.value || dropdown.value.contains(target) || trigger.value.contains(target)) return
  dropdownOpen.value = false
}

// close if the esc key is pressed
const keyHandler = ({ keyCode }) => {
  if (!dropdownOpen.value || keyCode !== 27) return
  dropdownOpen.value = false
}

onMounted(() => {
  document.addEventListener('click', clickHandler)
  document.addEventListener('keydown', keyHandler)
})

onUnmounted(() => {
  document.removeEventListener('click', clickHandler)
  document.removeEventListener('keydown', keyHandler)
})

</script>
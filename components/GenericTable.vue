<template>
  <div class="bg-white shadow-lg rounded-xl border border-slate-200 relative">
    <header class="px-5 py-4">
      <div class="flex items-center gap-2">
        <!-- SelectAll Checkbox -->
        <label class="inline-flex">
          <span class="sr-only">Select all</span>
          <input class="form-checkbox focus:outline-none focus:ring-0" type="checkbox" v-model="selectAll" @click="checkAll" />
        </label>
        <!-- Chevron-down -->
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
          <g clip-path="url(#clip0_49_69)">
          <path d="M8.29289 0.292893C8.68342 -0.097631 9.31658 -0.097631 9.70711 0.292893C10.0976 0.683418 10.0976 1.31658 9.70711 1.70711L5.70711 5.70711C5.31658 6.09763 4.68342 6.09763 4.29289 5.70711L0.292893 1.70711C-0.097631 1.31658 -0.097631 0.683418 0.292893 0.292893C0.683418 -0.097631 1.31658 -0.097631 1.70711 0.292893L5 3.58579L8.29289 0.292893Z" fill="#64748B"/>
          </g>
          <defs>
          <clipPath id="clip0_49_69">
          <rect width="10" height="6" fill="white"/>
          </clipPath>
          </defs>
        </svg>

        <h2 v-if="title" class="font-semibold text-slate-800 ml-4">{{title}} <span v-if="showTotal" class="text-slate-400 font-medium">248</span></h2>
      </div>
     
    </header>
    
    <div>

      <!-- Table -->
      <div class="overflow-x-auto">
        <table class="table-auto w-full">
          <!-- Table header -->
          <thead class="text-xs font-semibold uppercase text-slate-500 bg-whiteColor border-t border-b border-slate-200">
            <tr class="w-full">
              <th class="text-left px-4 mx-4 py-3 whitespace-nowrap w-auto" :key="index" v-for="(header,index) in headers">
                {{ header }}
              </th>
              <th class="px-2 w-2/5 first:pl-5 last:pr-5 py-3 whitespace-nowrap"></th>
            </tr>
          </thead>
          <!-- Table body -->
          <tbody class="text-sm divide-y divide-slate-200">

            <GenericTableItem
              v-for="model in models"
              :key="model.id"
              :customer="model"
              v-model:selected="selected"
              :value="model.id"
              :keysToShow="['id','name','category','amount','price','createdAt']"
            />
           
          </tbody>
        </table>
        <footer class="px-5 py-1 border border-t ">
          <div class="flex justify-between w-full items-center gap-2 text-sm text-secondaryText ">
            <button class="h-8 font-bold">Anterior</button>
            <span class="font-semibold">129 de 352</span>
            <button class="h-8 text-primary font-bold">Siguiente</button>
            
          </div>
          
        </footer>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import GenericTableItem from'./GenericTableItem'



const props = defineProps({
  selectedItems: {
    
    type: String
  },
  title: {
    type: String,
    default: ''
  },
  showTotal: {
    type: Boolean,
    default: false
  },
  headers: {
    type: Array,
    default: ['','ID', 'NOMBRE','CATEGORIA','CANTIDAD','PRECIO','CREACIÓN']
    
  },
  models: {
    type: Array,
    default: [
      {
        id: '235',
       
        name: 'Zapatos Naiki',
        category: 'Zapatos',
        amount: '20',
        price: '$59',
        createdAt: '08/20/22',
        
      }, {
        id: '12',
       
        name: 'Zapatos Naiki',
        category: 'Zapatos',
        amount: '20',
        price: '$59',
        createdAt: '08/20/22',
        
      }, {
        id: '13',
       
        name: 'Zapatos Naiki',
        category: 'Zapatos',
        amount: '20',
        price: '$59',
        createdAt: '08/20/22',
        
      }]
  }
})    

   
const selectAll = ref(false)
const selected = ref([])

const checkAll = () => {
  selected.value = []
  if (!selectAll.value) {
    selected.value = customers.value.map(customer => customer.id)
  }
}

watch(selected, () => {
  selectAll.value = customers.value.length === selected.value.length ? true : false
  emit('change-selection', selected.value)
})    
    
</script>
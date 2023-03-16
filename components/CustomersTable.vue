<template>
  <div class="bg-white dark:bg-gray-600 shadow-lg rounded-sm border border-slate-200 relative">
    <header class="px-5 py-4">
      <h2 class="font-semibold text-blackColor">Usuarios <span class="text-slate-400 font-medium">{{ customers?.length ? customers.length : 0 }}</span></h2>
    </header>
    <div>

      <!-- Table -->
      <div class="overflow-x-auto">
        <table class="table-auto w-full">
          <!-- Table header -->
          <thead class="text-xs font-semibold uppercase text-slate-500 bg-slate-50 border-t border-b border-slate-200">
            <tr>
              
              
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                <div class="font-semibold">Usuario</div>
              </th>
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div class="font-semibold text-center">Correo</div>
              </th>
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div class="font-semibold text-center">Grupo</div>
              </th>
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div class="font-semibold text-center">Rol</div>
              </th>
             
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div class="font-semibold text-center">Invertido</div>
              </th>
                
          
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <span class="sr-only">Menu</span>
              </th>
            </tr>
          </thead>
          <!-- Table body -->
          <tbody class="text-sm divide-y divide-slate-200">
            <Customer
              v-for="customer in customers"
              :key="customer.id"
              :customer="customer"
              
              :value="customer.id"
            />
          </tbody>
        </table>

      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import Customer from './CustomersTableItem.vue'



const props = defineProps(['selectedItems'])    
const customers = await useFetch("/api/users").data
   
</script>
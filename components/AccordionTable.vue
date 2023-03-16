<template>
  <div class="bg-white dark:bg-gray-600 shadow-lg rounded-sm border border-slate-200 relative">
    <header class="px-5 py-4 bg-slate-50">
      <h2 class="font-semibold text-blackColor">Grupos <span class="text-slate-400 font-medium">{{ items2?.length }}</span></h2>
    </header>
    <div>

      <!-- Table -->
      <div class="overflow-x-auto">
        
        <!-- Rich Table Row with Accordion -->
        <div class="rounded-sm border border-slate-200">
          <div class="overflow-x-auto">
            <table class="table-auto w-full divide-y divide-slate-200">
              <AccordionTableRichItem
                v-for="item in items2"
                :key="item.id"
                :item="item"
              />                        
            </table>
          </div>
        </div>
       
        
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import Group from './AccordionTableRichItem.vue'

import Image01 from '~/assets/img/meetups-thumb-02.jpg'



const props = defineProps(['selectedItems']);
const emit = defineEmits('change-selection')
  
const items2 = await useFetch("/api/groups").data; 
    
   
</script>
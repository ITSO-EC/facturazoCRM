<template>
  <tbody class="text-sm">
    <tr class="hover:cursor-pointer hover:bg-slate-100 active:bg-slate-300" @click.prevent="descriptionOpen = !descriptionOpen" >
      <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap flex overflow-hidden">
          <!-- Image -->
          <div class="relative block w-24 h-auto sm:w-56 xl:sidebar-expanded:w-40 2xl:sidebar-expanded:w-56 shrink-0">
            <img class="absolute object-cover object-center w-full h-full" :src="Image01" width="220" height="236" alt="Group Logo" />
            <!-- Like button -->
            
          </div>
          <!-- Content -->
          <div class="grow p-5 flex flex-col">
            <div class="grow">
              <div class="text-sm font-semibold text-indigo-500 uppercase mb-2">Mon 27 Dec, 2021</div>
              <div class="inline-flex mb-2">
                <h3 class="text-lg font-bold text-blackColor">{{ item.name }}</h3>
              </div>
              <div class="text-sm">{{ item.description }}</div>
            </div>
            <!-- Footer -->
            <div class="flex justify-start mt-3">
              <!-- Tag -->
              <div class="text-xs inline-flex items-center font-medium bg-slate-100 text-slate-600 rounded-full text-center px-2.5 py-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                </svg>

                <span>Compañías: {{ item?.companies?.length || 0 }}</span>

              </div>
              <!-- Add company button -->
              <button class="btn bg-indigo-500 hover:bg-indigo-600 text-white shadow-2xl ml-4" @click.stop="createCompanyModalOpen=true">
                  <svg class="w-4 h-4 fill-current opacity-100 shrink-0" viewBox="0 0 16 16">
                  <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                  </svg>
              
              </button>     
              <!-- Edit companies button -->
              <button class="btn bg-slate-500 hover:bg-slate-600 text-slate-50 shadow-2xl ml-4" @click.stop="edittingCompany = !edittingCompany; descriptionOpen = true">
                <svg v-if="!edittingCompany" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 shrink-0">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                </svg>

                <svg v-else class="w-4 h-4 fill-current opacity-50 shrink-0 rotate-45" viewBox="0 0 16 16">
                  <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                </svg>
              
              </button>     
            </div>
          </div>
      </td>
      <td >   
        <DropdownEditMenu @click.stop="" align="right" class="absolute -mt-4 -ml-4">
          <li>
            <button
              class="
                font-medium
                text-sm text-slate-600
                hover:text-blackColor
                flex
                py-1
                px-3
              "
            
              @click.stop="editModalOpen=true"
              >Editar Usuario</button
            >
          </li>
          
          
          <li>
            <button
              class="
                font-medium
                text-sm text-rose-500
                hover:text-rose-600
                flex
                py-1
                px-3
              "
            
              @click.stop="dangerModalOpen = true"
              >Eliminar</button
            >
          </li>
        </DropdownEditMenu>
      </td>
      <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
        <div class="flex items-center">
          <span class="text-slate-400 hover:text-slate-500 transform" :class="{ 'rotate-180': descriptionOpen }" :aria-expanded="descriptionOpen" :aria-controls="`description-${item.id}`">
            <span class="sr-only">Menu</span>
            <svg class="w-8 h-8 fill-current" viewBox="0 0 32 32">
              <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z" />
            </svg>
          </span>
        </div>
      </td>
    </tr>
    <!--
    Example of content revealing when clicking the button on the right side:
    Note that you must set a "colspan" attribute on the <td> element,
    and it should match the number of columns in your table
    -->
    <tr :id="`description-${item.id}`" role="region" :class="!descriptionOpen && 'hidden'" v-for="company in item?.companies" :key="company">
        <CompanyAccordionTableItem :company="company" :editting="edittingCompany"></CompanyAccordionTableItem>
      
    </tr>
    <!-- Edit Group -->
    <ModalBasic
      :modalOpen="editModalOpen"
      @close-modal="editModalOpen = false"
      title="Editar datos del grupo"
    >
      <!-- Modal content -->
      <div class="px-5 pt-4 pb-1">
          <div class="text-sm">
              
              <!-- Inicio del Form -->
              <div class="space-y-2 grid grid-cols-1 sm:grid-cols-2 gap-4" >
              
              
              <!-- Name Input + Label -->
              <div class="col-span-full">
                  <label class="block text-sm font-medium mb-1 mt-4" :for="`name-edit-${item.id}`"
                  >Nombre 
                  <span class="text-red-500" >*</span>
                  </label>
                  <p class="text-xs text-red-500 font-medium italic mb-1 mt-2" :hidden="editErrors.name">
                  *  El nombre no puede estar vacío
                  
                  </p>
                  <input :id="`name-edit-${item.id}`" class="form-input w-full" type="text" v-model="newCompany.name"/>
              </div>                

              <!-- Description Input + Label -->
              <div class="col-span-full">
                  <label class="block text-sm font-medium mb-1 mt-2" :for="`description-edit-${item.id}`"
                  >Descripción
                  <span class="text-red-500" >*</span>
                  
                  </label>
                  <textarea :id="`description-edit-${item.id}`" class="form-input w-full" rows="4" v-model="newCompany.description"/>
              </div>
              
            
            
              </div>
          </div>
      </div>
      <!-- Modal footer -->
      <div class="px-5 py-4">
        <div class="flex flex-wrap justify-end space-x-2">
          <button
            class="
              btn-sm
              border-slate-200
              hover:border-slate-300
              text-slate-600
            "
            @click.stop="editModalOpen = false"
          >
            Cancelar
          </button>
          <button :disabled="!isNewGroupValid" @click.stop="updateGroup()" class="btn-sm disabled:bg-indigo-300 bg-indigo-500 hover:bg-indigo-600 text-white">
            <span>Guardar</span>
            <!-- <span :hidden="!loading">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="animate-spin h-5 w-5 mx-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
            </span> -->
          </button>
        </div>
      </div>
    </ModalBasic>

    <!-- Delete Group -->
    <ModalBlank
      :id="`danger-modal-${item.id}`"
      :modalOpen="dangerModalOpen"
      @close-modal="dangerModalOpen = false"
    >
      <div class="p-5 flex space-x-4">
        <!-- Icon -->
        <div
          class="
            w-10
            h-10
            rounded-full
            flex
            items-center
            justify-center
            shrink-0
            bg-rose-100
          "
        >
          <svg
            class="w-4 h-4 shrink-0 fill-current text-rose-500"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z"
            />
          </svg>
        </div>
        <!-- Content -->
        <div>
          <!-- Modal header -->
          <div class="mb-2">
            <div class="text-lg font-semibold text-blackColor">
              ¿Está seguro que desea eliminar este grupo?
            </div>
          </div>
          <!-- Modal content -->
          <div class="text-sm mb-10">
            <div class="space-y-2">
              <p>Considere que esta acción es irreversible. ¡TODOS los datos asociados a él se perderán!</p>
            </div>
          </div>
          <!-- Modal footer -->
          <div class="flex flex-wrap justify-end space-x-2">
            <button
              class="
                btn-sm
                border-slate-200
                hover:border-slate-300
                text-slate-600
              "
              @click.stop="dangerModalOpen = false"
            >
              Cancelar
            </button>
            <button @click.stop="deleteGroup(item.id); dangerModalOpen = false" class="btn-sm bg-rose-500 hover:bg-rose-600 text-white">
              Si, eliminar
            </button>
          </div>
        </div>
      </div>
    </ModalBlank>


      
    <!-- Create Company Modal -->
    <ModalBasic 
    :modalOpen="createCompanyModalOpen"
    @close-modal="createCompanyModalOpen = false"
    title="Agregar Compañía">
        <!-- Modal content -->
        <div class="px-5 pt-4 pb-1">
            <div class="text-sm">
                
                <!-- Inicio del Form -->
                <div class="space-y-2 grid grid-cols-1 sm:grid-cols-2 gap-4" >
                
                
                    <!-- Name Input + Label -->
                    <div class="col-span-full">
                        <label class="block text-sm font-medium mb-1 mt-4" :for="`name-create-${item.id}`"
                        >Nombre 
                        <span class="text-red-500" :for="`name-create-${item.id}`">*</span>
                        </label>
                        <p class="text-xs text-red-500 font-medium italic mb-1 mt-2"  :hidden="createCompanyErrors.name">
                        *  El nombre no puede estar vacío
                        
                        </p>
                        <input :id="`name-create-${item.id}`" class="form-input w-full" type="text" v-model="newCompany.name"/>
                    </div>      
                      <!-- RUC Input + Label -->
                      <div class="col-span-full">
                        <label class="block text-sm font-medium mb-1 mt-4" :for="`ruc-create-${item.id}`"
                        >RUC 
                        <span class="text-red-500" :for="`ruc-create-${item.id}`">*</span>
                        </label>
                        <p class="text-xs text-red-500 font-medium italic mb-1 mt-2"  :hidden="createCompanyErrors.ruc">
                        *  El ruc no puede estar vacío y solo debe contener numeros
                        </p>
                        <input :id="`ruc-create-${item.id}`" class="form-input w-full" type="text" v-model="newCompany.ruc"/>
                    </div>                

                    <!-- Description Input + Label -->
                    <div class="col-span-full">
                        <label class="block text-sm font-medium mb-1 mt-2" for="description-create"
                        >Descripción
                        
                        </label>
                        
                        <textarea id="description-create" class="form-input w-full" rows="4" v-model="newCompany.description"></textarea>
                    </div>
                
              
                
                </div>
            </div>
        </div>
        <!-- Modal footer -->
        <div class="px-5 py-4">
        <div class="flex flex-wrap justify-end space-x-2">
            <button
            class="
                btn-sm
                border-slate-200
                hover:border-slate-300
                text-slate-600
            "
            @click.stop="createCompanyModalOpen = false"
            >
            Cancelar
            </button>
            <button :disabled="!isNewCompanyValid " @click="createNewCompany()" class="btn-sm disabled:bg-indigo-300 bg-indigo-500 hover:bg-indigo-600 text-white">
            <span >Guardar</span>
            <!-- <span :hidden="!loading">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="animate-spin h-5 w-5 mx-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
            </span> -->
            </button>
        </div>
        </div>
    </ModalBasic>

</tbody>
</template>

<script setup>
import { ref } from 'vue'

import Image01 from '~/assets/img/meetup-photo-03.jpg'

const props = defineProps(['item'])

//////////////////////////////////////////
//Variables + Refs Init
//////////////////////////////////////////
const descriptionOpen = ref(false)
const succestoast = ref(false);   
const succesCompanytoast = ref(false);  
const edittingCompany = ref(false);
const editModalOpen = ref(false);
const createCompanyModalOpen = ref(false);
const error = ref('');
const dangerModalOpen = ref(false);  
const confirmation=ref("");
// const previewImage = ref(DefaultImage);

const isNewCompanyValid = ref(false);
const isNewGroupValid = ref(false);
const newGroup = ref({
    id: props?.item?.id,
    name: props?.item?.name,
    description: props?.item?.description
    
})

const newCompany =ref({
    groupId: props?.item?.id,
    name: '',
    ruc:'',
    description: ''
})
//Edit Modal Errors
const editErrors = ref({
// imageFormat: true,
// imageSize: true,
    name: true,
    description: true,   
})
//Company create Modal Errors
const createCompanyErrors = ref({
// imageFormat: true,
// imageSize: true,
    name: true,
    ruc:true,
    description: true,   
})


//////////////////////////////////////////
//Component Functionality 
//////////////////////////////////////////

//Core Actions - CRUD / Specific Actions
const updateGroup = async (groupId) => {
    error.value = "";
    succestoast.value = false; 

    
    const response = await $fetch('/api/groups', {
       method:'PUT',
        body: newGroup.value

    }).catch((err) => error.value = err?.data?.data);
    
    if(error.value == "") {
        editModalOpen.value=false; 
        resetData();
        succestoast.value=true;
    }
}

const resetErrors = () => {
    editErrors.value.name = true;
    editErrors.value.description = true;
    //editErrors.value.cellphone = true;
    //editErrors.value.birthdate = true;
}

const resetData = () => {
    if(!error.value) {
    //previewImage.value = DefaultImage;

      
      resetErrors();
    }
}

const checkValidGroup = () => {
    isNewGroupValid.value = false;

    // if(loading.value) {
    //     isNewGroupValid.value = false
    //     return;
    // };

    let valid = true;
    Object.entries(editErrors.value).forEach(([key, value]) => {
        if(!value && key != "imageFormat" && key != "imageSize") {
        valid = false;
        return;
        }
    });

    if(valid) isNewGroupValid.value = true;

}

watch([newGroup.value, newCompany.value], ([currentValue,currentCompany]) => {
      //Group error check  
      (currentValue?.name?.length > 0) ? editErrors.value.name = true : editErrors.value.name = false;

      //Companies error check
      (currentCompany?.name?.length > 0) ? createCompanyErrors.value.name = true : createCompanyErrors.value.name = false;
        
      checkValidGroup();
      checkValidCompany();
    }
);


const deleteGroup = (itemId) => {

  //TODO: UPDATE LOADING STATE TO UPDATE TABLE
  $fetch('/api/groups/', {
    method:'DELETE',
    body: {
      groupId: itemId
    }
  })
  
  //TODO: UPDATE LOADING STATE TO UPDATE TABLE
}

// FOR COMPANY
const createNewCompany = async () => {
        error.value = "";
        succesCompanytoast.value = false; 

        
        const response = await $fetch('/api/companies', {
            method: 'POST',
            body: newCompany.value

        }).catch((err) => error.value = err?.data?.data);
       
        if(error.value == "") {
            createCompanyModalOpen.value=false; 
            resetData();
            succesCompanytoast.value=true;
        }
    }
 
const resetCompanyErrors = () => {
    createCompanyErrors.value.name = true;
    
    createCompanyErrors.value.ruc = true;
    createCompanyErrors.value.description = true;
    //createErrors.value.cellphone = true;
    //createErrors.value.birthdate = true;
    
}

const resetCompanyData = () => {
    if(!error.value) {
    //previewImage.value = DefaultImage;

        newCompany.value.name= '';
        newCompany.value.ruc= '';
        
        newCompany.value.description= '';
        //delete newCompany.value.file;
        resetErrors();
    }
}

const checkValidCompany = () => {
    isNewCompanyValid.value = false;

    // if(loading.value) {
    //     isNewCompanyValid.value = false
    //     return;
    // };

    let valid = true;
    Object.entries(createCompanyErrors.value).forEach(([key, value]) => {
        if(!value && key != "imageFormat" && key != "imageSize") {
        valid = false;
        return;
        }
    });

    if(valid) isNewCompanyValid.value = true;

}

</script>
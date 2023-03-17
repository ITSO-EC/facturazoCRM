<template>
  <tr>
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
       
        <div class="font-medium text-blackColor ">{{customer?.username}}</div>
    
    </td>
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
      <div class="text-center">{{customer?.email}}</div>
    </td>
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
      <div class="text-center">Compania</div>
    </td>
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
      <div class="text-center"> {{getRole(customer.role)}}</div>
    </td>
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
      <div class="text-center font-medium text-emerald-500">31313</div>
    </td>
   
    <td class="px-2 text-center py-3 whitespace-nowrap w-px">
      <!-- Menu button -->
        <!-- Menu button -->
        <DropdownEditMenu align="right" class="absolute -mt-4 -ml-4">
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

    <!-- Edit Customer -->
    <ModalBasic
      :modalOpen="editModalOpen"
      @close-modal="editModalOpen = false"
      title="Editar datos de cliente"
    >
      <!-- Modal content -->
      <div class="px-5 pt-4 pb-1">
          <div class="text-sm">
              
              <!-- Inicio del Form -->
              <div class="space-y-2 grid grid-cols-1 sm:grid-cols-2 gap-4" >
              
              
              <!-- Name Input + Label -->
              <div>
                  <label class="block text-sm font-medium mb-1 mt-4" :for="`name-edit-${customer.id}`"
                  >Nombre 
                  <span class="text-red-500" >*</span>
                  </label>
                  <p class="text-xs text-red-500 font-medium italic mb-1 mt-2" :hidden="registerErrors.name">
                  *  El nombre no puede estar vacío
                  
                  </p>
                  <input :id="`name-edit-${customer.id}`" class="form-input w-full" type="text" v-model="newUser.username"/>
              </div>                

              <!-- Mail Input + Label -->
              <div>
                  <label class="block text-sm font-medium mb-1 mt-2" :for="`email-edit-${customer.id}`"
                  >Correo
                  <span class="text-red-500" >*</span>
                  
                  </label>
                  <p class="text-xs text-red-500 font-medium italic mb-1 mt-2"  :hidden="registerErrors.email">
                  *  El correo no es válido
                  </p>
                  <input :id="`email-edit-${customer.id}`" class="form-input w-full" type="text" v-model="newUser.email"/>
              </div>
              
            
              <!-- Role Select + Label -->
              <div>
                  <label class="block text-sm font-medium mb-1" :for="`role-${customer.id}`"
                  >Rol</label
                  >
                  <select :id="`role-${customer.id}`" class="w-full form-select" v-model="newUser.role">
                  
                      <option value="user">Usuario</option>
                      <option value="operator">Operador</option>
                      <option value="admin">Admin</option>
                      <option value="director">Owner</option>
                  </select>
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
          <button :disabled="!isNewUserValid" @click.stop="updateUser()" class="btn-sm disabled:bg-indigo-300 bg-indigo-500 hover:bg-indigo-600 text-white">
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

    <!-- Delete Profile -->
    <ModalBlank
      id="danger-modal"
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
              ¿Está seguro que desea eliminar este usuario?
            </div>
          </div>
          <!-- Modal content -->
          <div class="text-sm mb-10">
            <div class="space-y-2">
              <p>Considere que esta acción es irreversible.</p>
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
            <button @click.stop="deleteUser(customer.id); dangerModalOpen = false" class="btn-sm bg-rose-500 hover:bg-rose-600 text-white">
              Si, eliminar
            </button>
          </div>
        </div>
      </div>
    </ModalBlank>
  </tr>  
</template>

<script setup>
import { computed, ref } from 'vue'


const props = defineProps(['customer', 'value'])

//////////////////////////////////////////
//Variables + Refs Init
//////////////////////////////////////////
const succestoast = ref(false);    
const editModalOpen = ref(false);
const error = ref('');
const dangerModalOpen = ref(false);    
const confirmation=ref("");
// const previewImage = ref(DefaultImage);

const isNewUserValid = ref(false);
const newUser = ref({
    id: props?.customer?.id,
    name: props?.customer?.name,
    username: props?.customer?.username,
    email: props?.customer?.email,
    role: props?.customer?.role,
    
})

//Register Modal Errors
const registerErrors = ref({
// imageFormat: true,
// imageSize: true,
    name: true,
    email: true,
    role: true,
    username: true,
   
})



//////////////////////////////////////////
//Component Functionality 
//////////////////////////////////////////

//Core Actions - CRUD / Specific Actions
const updateUser = async (userId) => {
    error.value = "";
    succestoast.value = false; 

    
    const response = await $fetch('/api/users', {
       method:'PUT',
        body: newUser.value

    }).catch((err) => error.value = err?.data?.data);
    
    if(error.value == "") {
        editModalOpen.value=false; 
        resetData();
        succestoast.value=true;
    }
}

const resetErrors = () => {
    registerErrors.value.name = true;
    registerErrors.value.email = true;
    //registerErrors.value.cellphone = true;
    //registerErrors.value.birthdate = true;
    registerErrors.value.password = true;
    registerErrors.value.passwordValid = true;
    registerErrors.value.passwordConfirm = true;
}

const resetData = () => {
    if(!error.value) {
    //previewImage.value = DefaultImage;

        newUser.value.name= '';
        newUser.value.email= '';
        newUser.value.password= '';            
        //newUser.value.phoneNumber= '';
        //delete newUser.value.file;
        newUser.value.role= 'user'
        confirmation.value = ''
        resetErrors();
    }
}

const checkValidUser = () => {
    isNewUserValid.value = false;

    // if(loading.value) {
    //     isNewUserValid.value = false
    //     return;
    // };

    let valid = true;
    Object.entries(registerErrors.value).forEach(([key, value]) => {
        if(!value && key != "imageFormat" && key != "imageSize") {
        valid = false;
        return;
        }
    });

    if(valid) isNewUserValid.value = true;

}

const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
watch([newUser.value, confirmation], ([currentValue, newConfirm]) => {
        (currentValue?.username?.length > 0) ? registerErrors.value.name = true : registerErrors.value.name = false;
        
        //(phoneNumberRegex.exec(currentValue.phoneNumber)!=null) ? registerErrors.value.cellphone = true : registerErrors.value.cellphone = false;
        (emailRegex.exec(currentValue.email)!=null) ? registerErrors.value.mail = true : registerErrors.value.mail = false;
        
        //(currentValue.nationality != '') ? registerErrors.value.nationality = true : registerErrors.value.nationality = false; 
        //(currentValue.birthdate != '') ? registerErrors.value.birthdate = true : registerErrors.value.birthdate = false; 
        //(currentValue.companions >= 0) ? registerErrors.value.companions = true : registerErrors.value.companions = false; 
        
        checkValidUser();
    }
);


const getRole = (role) => {
  switch(role) {
    
    case 'operator':
      return 'Operador'
    case 'admin':
      return 'Administrador'
    case 'director':
      return 'Director'
    default:
      return 'Invitado'
  }
}

const deleteUser = (customerId) => {

  //TODO: UPDATE LOADING STATE TO UPDATE TABLE
  $fetch('/api/users/', {
    method:'DELETE',
    body: {
      userId: customerId
    }
  })
  
  //TODO: UPDATE LOADING STATE TO UPDATE TABLE
}
</script>
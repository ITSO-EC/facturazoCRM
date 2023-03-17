<script setup>
    //import { convertDate } from '~/utils/Utils.js'
    definePageMeta({
    middleware: 'auth'
    })

    //////////////////////////////////////////
    //Variables + Refs Init
    //////////////////////////////////////////

    //Vue Related Init
    const router = useRouter();
    const route = useRoute();

    //Refs init
    const sidebarOpen = ref(false)
    const confirmation = ref('')
    const succestoast = ref(false);    
    const createModalOpen = ref(false);
    const error = ref('');
    const loading = ref(false);
    // const previewImage = ref(DefaultImage);

    const isNewUserValid = ref(false);
    const newUser = ref({
        name: 'admin',
        username: 'admin',
        email: 'admin@admin.com',
        role: 'user',
        password: 'adminadmin123',
        confirm: 'adminadmin123',
    })

    //Register Modal Errors
    const registerErrors = ref({
    // imageFormat: true,
    // imageSize: true,
        name: true,
        email: true,
        role: true,
        username: true,
        password: true,
        confirm: true,
        passwordValid: true,
        passwordConfirm: true,
    })

    //////////////////////////////////////////
    //Component Functionality 
    //////////////////////////////////////////

    //Core Actions - CRUD / Specific Actions
    const createNewUser = async () => {
        error.value = "";
        succestoast.value = false; 

        
        const response = await $fetch('/api/auth/register', {
            method: 'POST',
            body: newUser.value

        }).catch((err) => error.value = err?.data?.data);
       
        if(error.value == "") {
            createModalOpen.value=false; 
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

        if(loading.value) {
            isNewUserValid.value = false
            return;
        };

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
            (currentValue.username.length > 0) ? registerErrors.value.name = true : registerErrors.value.name = false;
            
            //(phoneNumberRegex.exec(currentValue.phoneNumber)!=null) ? registerErrors.value.cellphone = true : registerErrors.value.cellphone = false;
            (emailRegex.exec(currentValue.email)!=null) ? registerErrors.value.mail = true : registerErrors.value.mail = false;
            
            //(currentValue.nationality != '') ? registerErrors.value.nationality = true : registerErrors.value.nationality = false; 
            //(currentValue.birthdate != '') ? registerErrors.value.birthdate = true : registerErrors.value.birthdate = false; 
            //(currentValue.companions >= 0) ? registerErrors.value.companions = true : registerErrors.value.companions = false; 
            
            (currentValue.password.length > 0) ? registerErrors.value.password = true : registerErrors.value.password = false; 
            (currentValue.password.length > 5 || currentValue.password.length < 1) ? registerErrors.value.passwordValid = true : registerErrors.value.passwordValid = false;
            (newConfirm == currentValue.password) ? registerErrors.value.passwordConfirm = true : registerErrors.value.passwordConfirm = false; 
            checkValidUser();
        }
    );


</script>
<template>
    <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
         <!-- Page header -->
        <div class="sm:flex sm:justify-between sm:items-center mb-8">

             <!-- Left: Title -->
            <div class="mb-4 sm:mb-0">
                <h1 class="text-2xl md:text-3xl text-secondaryText dark:text-slate-50 font-medium">Usuarios
                
                </h1>
            </div>

            <!-- Right: Actions  -->
            <div class="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">

           
            <div></div>
            
           

            <!-- Add user button -->
            <button @click.stop="createModalOpen=true" class="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                <svg class="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                </svg>
                <span class="hidden xs:block ml-2">Añadir Usuario</span>
            </button>     
                    
            </div>

        </div>

        <!-- Table -->
        <CustomersTable @change-selection="updateSelectedItems($event)" />

        <!-- Pagination -->
        <div class="mt-8">
        <PaginationClassic />
        </div>       

        <!-- Create Modal -->
        <ModalBasic 
        :modalOpen="createModalOpen"
        @close-modal="createModalOpen = false"
        title="Crear Nuevo Usuario">
            <!-- Modal content -->
            <div class="px-5 pt-4 pb-1">
                <div class="text-sm">
                    
                    <!-- Inicio del Form -->
                    <div class="space-y-2 grid grid-cols-1 sm:grid-cols-2 gap-4" >
                    
                    
                    <!-- Name Input + Label -->
                    <div>
                        <label class="block text-sm font-medium mb-1 mt-4" for="name-create"
                        >Nombre 
                        <span class="text-red-500" for="name-create">*</span>
                        </label>
                        <p class="text-xs text-red-500 font-medium italic mb-1 mt-2" for="name-create" :hidden="registerErrors.name">
                        *  El nombre no puede estar vacío
                        
                        </p>
                        <input id="name-create" class="form-input w-full" type="text" v-model="newUser.username"/>
                    </div>                

                    <!-- Mail Input + Label -->
                    <div>
                        <label class="block text-sm font-medium mb-1 mt-2" for="email-create"
                        >Correo
                        <span class="text-red-500" for="name-create">*</span>
                        
                        </label>
                        <p class="text-xs text-red-500 font-medium italic mb-1 mt-2" for="name-create" :hidden="registerErrors.email">
                        *  El correo no es válido
                        </p>
                        <input id="email-create" class="form-input w-full" type="text" v-model="newUser.email"/>
                    </div>
                    
                    <!-- Password Input + Label -->
                    <div>
                        <label class="block text-sm font-medium mb-1" for="password-create">
                        Clave
                        <span class="text-red-500" for="name-create">*</span>
                        </label>
                        <p class="text-xs text-red-500 font-medium italic mb-1 mt-2" for="name-create" :hidden="registerErrors.password">
                        *  La clave no puede estar vacía
                        </p>
                        <p class="text-xs text-red-500 font-medium italic mb-1 mt-2" for="name-create" :hidden="registerErrors.passwordValid">
                        *  Mínimo 6 caracteres
                        </p>
                        <input id="password-create" class="form-input w-full" type="password" v-model="newUser.password"/>
                    </div>
                    <!-- Confirmation Input + Label -->
                    <div>
                        <label class="block text-sm font-medium mb-1" for="confirm_password"
                        >Confirmar Clave</label
                        >
                        <p class="text-xs text-red-500 font-medium italic mb-1 mt-2" for="name-create" :hidden="registerErrors.passwordConfirm">
                        *  Las claves no coinciden
                        </p>
                        <input id="confirm_password" class="form-input w-full" type="password" v-model="confirmation"/>
                    </div>
                    
                    <!-- Room Select + Label -->
                    <div>
                        <label class="block text-sm font-medium mb-1" for="role"
                        >Rol</label
                        >
                        <select id="role" class="w-full form-select" v-model="newUser.role">
                        
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
                @click.stop="createModalOpen = false"
                >
                Cancelar
                </button>
                <button :disabled="!isNewUserValid || loading" @click="createNewUser()" class="btn-sm disabled:bg-indigo-300 bg-indigo-500 hover:bg-indigo-600 text-white">
                <span :hidden="loading">Guardar</span>
                <span :hidden="!loading">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="animate-spin h-5 w-5 mx-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                </span>
                </button>
            </div>
            </div>
        </ModalBasic>
    </div>
</template>
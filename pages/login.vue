<script setup lang="ts">
import { ref } from "@vue/reactivity";
import Logo from "~/components/elements/Logos/colorMode.vue";
import { loginWithEmail } from "~/composables/useAuth";
import type { Ref } from "vue"


const usernameOrEmail = ref('')
const password = ref('')

const errors: Ref<Map<string, { message: InputValidation; }> | undefined> = ref(new Map<string, { message: InputValidation }>())
let response: FormValidation

definePageMeta({
  layout: 'guest',
  middleware: 'guest'
})

async function postLoginForm() {
  response = await loginWithEmail(usernameOrEmail.value, password.value)
  errors.value = response.errors
}
</script>

<template>
  <div class="bg-loginbg bg-center bg-no-repeat bg-cover h-screen">
    <div class="flex items-center justify-between px-4 sm:px-6 lg:px-8 w-full">
      <div class="max-w-md w-full">
        <div class="lg:flex my-24 items-center h-auto gap-4 font-bold ">
          <Logo class="w-24 h-24"/>
          <span class="text-[#095073] text-5xl">FACTURAZO</span>
        </div>
        <div class="ml-12">
          <h2 class="text-left text-3xl font-bold mt-12 text-gray-900 dark:text-white">
            Inicia Sesión
          </h2>
        </div>
        <div v-if="response?.hasErrors && errors"
          class="ml-12 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-3" role="alert">
          <ul class="block sm:inline">
            <li v-for="[key, value] in errors" :key="key">
              {{ value.message }}
            </li>
          </ul>
        </div>
        <form v-on:submit.prevent class="mt-4 ml-12 space-y-6" action="#" method="POST">
          <!-- Errors -->
          <div class="rounded-md shadow-sm -space-y-px mb-1">
            <div>
              <label for="email-address">Correo:</label>
              <input type="email" v-model="usernameOrEmail" id="username" name="username" required
              class="form-input w-full" 
              :class="errors?.has('username') ? ' border-red-500' : ''" placeholder="username" />
            </div>
          </div>

          <!-- Form Inputs-->
          <div>
            <label for="password">Contraseña:</label>
            <input v-model="password" id="password" name="password" type="password" autocomplete="current-password"
              required
              class="form-input w-full"
              :class="errors?.has('password') ? ' border-red-500' : ''" placeholder="Password" />
          </div>
        </form>
        <!-- Form Options -->
        <div class="flex flex-col my-4 ml-12">
          <div class="flex justify-between ">
            <span class="flex items-center gap-4">
              <input type="checkbox" class="form-checkbox" name="remember-me" id="checkbox-remember">
              Recuérdame
            </span>
            <a href="text-blue-800">Olvidaste tu contraseña?</a>
          </div>
          <!-- Form Submit -->
          <button @click.prevent="postLoginForm"
            class="btn bg-secondary font-bold w-full mt-4">
            
            <span class="font-bold text-whiteColor">INICIAR SESIÓN</span> 
          </button>
        </div>
        
      </div>

      <div></div>
    </div>
    
  </div>
</template>

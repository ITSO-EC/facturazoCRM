<script setup lang="ts">
import Logo from "~/components/elements/Logos/colorMode.vue";
import { ref } from "@vue/reactivity";
import type { Ref } from "vue"
import { verifyOtp } from "~/composables/useOtp";

const otp: Ref<number | undefined> = ref();
const successMessage: Ref<string | undefined> = ref();
const isVerified = ref(false)
const router = useRouter()
const errors: Ref<Map<string, { message: InputValidation; }> | undefined> = ref(new Map<string, { message: InputValidation }>())
let response: otpValidation

async function postOtp() {
  response = await verifyOtp(otp.value);
  errors.value = response.errors

  if(response.isVerified) {
    isVerified.value = response.isVerified
    successMessage.value = 'success, redirecting to /dashboard'
    setTimeout(() => {
      router.push('/dashboard')
    }, 3000)
  }
};
definePageMeta({
  layout: 'guest',
  
})
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
            Verificar Correo
          </h2>
        </div>
        
        <div v-if="isVerified"
          class="ml-12 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-3" role="alert">
          <ul class="block sm:inline">
            <li>
              {{ successMessage }}
            </li>
          </ul>
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
         
          <!-- Form Inputs-->
          <input type="hidden" name="remember" value="true" />
            <div class="rounded-md shadow-sm -space-y-px mb-1">
              <div>
                <label for="name" class="sr-only">Verify Email</label>
                <input v-model="otp" id="name" name="otp" required
                  class="form-input w-full"
                  :class="errors?.has('name') ? ' border-red-500' : ''" placeholder="enter otp" />
              </div>
            </div>
            <button @click.prevent="postOtp"
            class=" btn bg-secondary font-bold w-full mt-4 mr-12">
            
            <span class="font-bold text-whiteColor">VERIFICAR</span>
          </button>
        </form>
       
        
      </div>

      <div></div>
    </div>
    
  </div>
</template>

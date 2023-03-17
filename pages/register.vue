<script setup lang="ts">
import Logo from '~/components/elements/Logos/colorMode.vue';
import { ref } from "@vue/reactivity";
import { registerWithEmail } from "~/composables/useAuth";
import type { Ref } from "vue"

const email: Ref<string> = ref('');
const password: Ref<string> = ref('');
const username: Ref<string> = ref('');
const name: Ref<string> = ref('');

definePageMeta({
  layout: 'guest',
  middleware: 'guest'
})

const errors: Ref<Map<string, { message: InputValidation; }> | undefined> = ref(new Map<string, { message: InputValidation }>())
let response: FormValidation

async function postRegisterForm() {
  response = await registerWithEmail(username.value, name.value, email.value,password.value);
  errors.value = response.errors
};
</script>

<template>
  <div class="bg-loginbg bg-center bg-no-repeat bg-cover h-screen">
    <div class="flex items-center justify-between px-4 sm:px-6 lg:px-8 w-full">
      <div class="max-w-md w-full">
        <div class="lg:flex mt-24 mb-8 items-center h-auto gap-4 font-bold ">
          <Logo class="w-24 h-24"/>
          <span class="text-[#095073] text-5xl">FACTURAZO</span>
        </div>
        <!-- Title -->
        <div>
          <h2 class="text-left text-3xl font-extrabold mt-5 text-gray-900 dark:text-white">
            Registro
          </h2>
        </div>
        <!-- Errors  -->
        <div v-if="response?.hasErrors && errors"
          class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-3" role="alert">
          <ul class="block sm:inline">
            <li v-for="[key, value] in errors" :key="key">
              {{ value.message }}
            </li>
          </ul>
        </div>
        <!-- Form Inputs -->
        <form v-on:submit.prevent class="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div class="rounded-md shadow-sm -space-y-px mb-1">
            <div>
              <label for="name" class="sr-only">Name</label>
              <input v-model="name" id="name" name="name" required
                class="form-input w-full"
                :class="errors?.has('name') ? ' border-red-500' : ''" placeholder="Name" />
            </div>
          </div>
          <div class="rounded-md shadow-sm -space-y-px mb-1">
            <div>
              <label for="email-address" class="sr-only">Username</label>
              <input type="email" v-model="username" id="username" name="username" required
                class="form-input w-full"
                :class="errors?.has('username') ? ' border-red-500' : ''" placeholder="username" />
            </div>
          </div>

          <div class="rounded-md shadow-sm -space-y-px mb-1">
            <div>
              <label for="email-address" class="sr-only">Email address</label>
              <input v-model="email" id="email-address" name="email" type="email" autocomplete="email" required
                class="form-input w-full"
                :class="errors?.has('email') ? ' border-red-500' : ''" placeholder="Email address" />
            </div>
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input v-model="password" id="password" name="password" type="password" autocomplete="current-password"
              required
              class="form-input w-full"
              :class="errors?.has('password') ? ' border-red-500' : ''" placeholder="Password" />
          </div>

          
        </form>

        <!-- Form Submit Button -->
        <button @click.prevent="postRegisterForm"
          class="btn bg-secondary font-bold w-full mt-4">
          <span class="font-bold text-whiteColor">REGISTRAR</span>
        </button>
        
      </div>

      <div></div>
    </div>
    
  </div>
</template>

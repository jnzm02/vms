<script lang="ts" setup>
import { ref } from 'vue'
import adminBar from '@/components/adminBar.vue'
import axios from "axios";

const username = ref('')
const email = ref('')
const firstname = ref('')
const lastname = ref('')
const phone = ref('')
const password1 = ref('')
const password2 = ref('')

const isError = ref(true)
const message = ref('')

const updateContactInfo = () => {
}

const updatePassword = async () => {
  if (!password1.value || password1.value !== password2.value) {
    isError.value = true
    message .value = "Passwords does not match!"
    return
  }
  const data = {
    "newPassword": password1,
    "confirmPassword": password1
  }
  try {
    await axios.post(import.meta.env.VITE_SERVER_URL + 'users/password', data, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
  } catch(e) {
    console.log("KETW!")
  }
}
</script>

<template>
  <main>
    <admin-bar></admin-bar>
    <div class="rhs text-[black] px-[48px] py-[24px] w-full overflow-y-scroll scrollbar-none">
        <div class="border rounded-[12px] p-2">
          <div>
            <div class="font-bold text-[24px]">Contact Info:</div>
              <div class="grid grid-cols-3 gap-x-16 mb-4">
                <div class="btn flex justify-center mb-5 align-left flex-col">
                  <label for="username" class="font-italic mb-1">Username</label>
                  <input type="text" class="max-w-[200px]" name="" id="username" v-model="username">
                </div>
                <div class="btn flex justify-center mb-5 align-left flex-col">
                  <label for="firstname" class="font-italic">First Name</label>
                  <input type="text" class="max-w-[200px]" name="" id="firstname" v-model="firstname">
                </div>
                <div class="btn flex justify-center mb-5 align-left flex-col">
                  <label for="lastname" class="font-italic">Last Name</label>
                  <input type="text" class="max-w-[200px]" name="" id="lastname" v-model="lastname">
                </div>
                <div class="btn flex justify-center mb-5 align-left flex-col">
                  <label for="phone" class="font-italic">Phone Number</label>
                  <input type="text" class="max-w-[200px]" name="" id="phone" v-model="phone">
                </div>
                <div class="btn flex justify-center mb-5 align-left flex-col">
                  <label for="email" class="font-italic">Email</label>
                  <input type="text" class="max-w-[200px]" name="" id="email" v-model="email">
                </div>
              </div>
              <button class="mb-5" @click="updateContactInfo">Update Contact Info</button>
              <div class="text-[18px] font-bold mb-3">Password</div>
              <div class="grid grid-cols-3 gap-x-16 mb-4">
                <div class="btn flex justify-center mb-5 align-left flex-col">
                  <label for="password1" class="font-italic mb-1">Password</label>
                  <input type="password" name="current-password" id="password1" class="max-w-[200px]" v-model="password1">
                </div>
                <div class="btn flex justify-center mb-5 align-left flex-col">
                  <label for="password2" class="font-italic">Repeat Password</label>
                  <input type="password" name="" class="max-w-[200px]" id="password2" v-model="password2">
                </div>
              </div>
            <div v-if="isError">
              <div class="text-red mb-2">{{ message }}</div>
            </div>
            <button class="mb-5" @click="updatePassword">Update Password</button>
          </div>
        </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  display: grid;
  grid-template-columns: 0.3fr 1fr;
  height: 90vh;
  width: 90vw;
}

.rhs {
  background: white;
  border-radius: 12px;
}


input {
  padding: 8px 12px;
  border-radius: 12px;
  border: 1px solid #222;
  :focus {
    border-color: cyan;
  }
}

button {
  border: 1px solid black;
  padding: 12px 16px;
  border-radius: 12px;
  background: black;
  color: white;
}
</style>

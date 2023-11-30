<script lang="ts" setup>
import adminBar from '@/components/adminBar.vue'
import { ref } from "vue"
import { useRouter } from 'vue-router'
import axios from "axios";

const router = useRouter();
const email = ref('')
const firstname = ref('')
const lastname = ref('')
const phone = ref('')
const address = ref('')
const password1 = ref('')
const password2 = ref('')
const username = ref('')

const isError = ref(false)
const errorMessage = ref('')

const createNewDriver = async () => {
  if (!password2.value || !password1.value || !firstname.value || !email.value || !lastname.value || !phone.value || !address.value) {
    isError.value = true
    errorMessage.value = "Fill All the Fields!"
  } else if (password2.value !== password1.value) {
    isError.value = true
    errorMessage.value = "Passwords Does not Match!"
  } else {
    const data = {
      username: username.value,
      role: 'driver',
      "firstName": firstname.value,
      "lastName": lastname.value,
      "email": email.value,
      "phoneNumber": phone.value,
      "password": password1.value
    }
    console.log(data)
    await axios.post(import.meta.env.VITE_SERVER_URL + 'users', data, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    await router.push('/admin/drivers');
  }
}
</script>

<template>
  <main>
    <admin-bar></admin-bar>
    <div class="rhs text-[black] px-[48px] py-[24px] w-full">
      <div class="flex justify-center flex-col w-full">
        <div class="text-[24px] font-bold mb-4">Create New Driver</div>
        <div class="text-[18px] font-bold mb-3">User Data</div>
        <div class="grid grid-cols-3 gap-x-16 mb-4">
          <div class="btn flex justify-center mb-5 align-left flex-col">
            <label for="email" class="font-italic mb-1">Email</label>
            <input type="text" class="max-w-[200px]" name="" id="email" v-model="email">
          </div>
          <div class="btn flex justify-center mb-5 align-left flex-col">
            <label for="username" class="font-italic">Username</label>
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
            <label for="address" class="font-italic">Address</label>
            <input type="text" class="max-w-[200px]" name="" id="address" v-model="address">
          </div>
          <div class="btn flex justify-center mb-5 align-left flex-col">
            <label for="phone" class="font-italic">Phone Number</label>
            <input type="text" class="max-w-[200px]" name="" id="phone" v-model="phone">
          </div>
<!--          <div class="btn flex justify-center mb-5 align-left flex-col">-->
<!--            <label for="governmentId" class="font-italic">Government ID</label>-->
<!--            <input type="text" name="" id="governmentId" class="max-w-[200px]" v-model="governmentId">-->
<!--          </div>-->
        </div>
        <div class="text-[18px] font-bold mb-3">Password</div>
        <div class="grid grid-cols-3 gap-x-16 mb-4">
          <div class="btn flex justify-center mb-5 align-left flex-col">
            <label for="password1" class="font-italic mb-1">Password</label>
            <input type="password" name="" id="password1" class="max-w-[200px]" v-model="password1">
          </div>
          <div class="btn flex justify-center mb-5 align-left flex-col">
            <label for="password2" class="font-italic">Repeat Password</label>
            <input type="password" name="" class="max-w-[200px]" id="password2" v-model="password2">
          </div>
        </div>
        <div class="">
          <div v-if="isError === true" class="text-red mb-2">{{ errorMessage }}</div>
          <button @click='createNewDriver'>Create Driver</button>
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

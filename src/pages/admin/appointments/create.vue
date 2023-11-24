<script lang="ts" setup>
import adminBar from '@/components/adminBar.vue'
import { ref } from "vue"
import { useRouter } from 'vue-router'

const router = useRouter();

const name = ref('')
const description = ref('')
const start_position = ref('')
const end_position = ref('')

const isError = ref(false)
const errorMessage = ref('')

const createNewDriver = async () => {
  if (!name.value || !description.value || !start_position.value || !end_position.value) {
    isError.value = true
    errorMessage.value = "Fill All the Fields!"
  } else {
    await router.push('/admin/appointments');
  }
}
</script>

<template>
  <main>
    <admin-bar></admin-bar>
    <div class="rhs text-[black] px-[48px] py-[24px] w-full">
      <div class="flex justify-center flex-col w-full">
        <div class="text-[24px] font-bold mb-4">Create an Appointment</div>
        <div class="grid grid-cols-3 gap-x-16 mb-4">
          <div class="btn flex justify-center mb-5 align-left flex-col">
            <label for="name" class="font-italic mb-1">Name</label>
            <input type="text" class="max-w-[200px]" name="" id="email" v-model="name">
          </div>
          <div class="btn flex justify-center mb-5 align-left flex-col">
            <label for="description" class="font-italic">Description</label>
            <input type="text" class="max-w-[200px]" name="" id="firstname" v-model="description">
          </div>
          <div class="btn flex justify-center mb-5 align-left flex-col">
            <label for="start_position" class="font-italic">Start Position</label>
            <input type="text" class="max-w-[200px]" name="" id="start_position" v-model="start_position">
          </div>
          <div class="btn flex justify-center mb-5 align-left flex-col">
            <label for="end_position" class="font-italic">End Position</label>
            <input type="text" class="max-w-[200px]" name="" id="end_position" v-model="end_position">
          </div>
        </div>
        <div class="btn flex justify-center mb-5 align-left flex-col">
          <label for="end_position" class="font-italic">Assign Driver</label>
          <select name="assignDriver" id="assignDriver">
            <option value="driver1">Aidyn Zhumaqadyr</option>
            <option value="driver2">Nursultan Nazarbayev</option>
            <option value="driver3">Kairat Nurtas</option>
            <option value="driver4">Naruto Uzumaki</option>
          </select>
        </div>
        <div class="">
          <div v-if="isError === true" class="text-red mb-2">{{ errorMessage }}</div>
          <button @click='createNewDriver'>Create Fueling Person</button>
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

input, select {
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


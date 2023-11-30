<script lang="ts" setup>
import adminBar from '@/components/adminBar.vue'
import { ref } from "vue"
import { useRouter } from 'vue-router'
import axios from "axios";

const router = useRouter();

const model = ref('')
const year = ref('')
const fuelAmount = ref('')
const licensePlate = ref('')
const sittingCapacity = ref('')
const vin = ref('')

const isError = ref(false)
const errorMessage = ref('')

const createNewCar = async () => {
  if (!model.value || !year.value || !fuelAmount.value || !licensePlate.value || !sittingCapacity.value) {
    isError.value = true
    errorMessage.value = "Fill All the Fields!"
  } else {

    const data = {
      model: model.value,
      "year": year.value,
      "licencePlate": licensePlate.value,
      "capacity": +sittingCapacity.value,
      "vin": vin.value,
      "fuelType": 'GAS'
    }
    await axios.post(import.meta.env.VITE_SERVER_URL + 'vehicles', data, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    await router.push('/admin/cars');
  }
}
</script>

<template>
  <main>
    <admin-bar></admin-bar>
    <div class="rhs text-[black] px-[48px] py-[24px] w-full">
      <div class="flex justify-center flex-col w-full">
        <div class="text-[24px] font-bold mb-4">Create New Car Data</div>
        <div class="grid grid-cols-3 gap-x-16 mb-4">
          <div class="btn flex justify-center mb-5 align-left flex-col">
            <label for="model" class="font-italic mb-1">Model</label>
            <input type="text" class="max-w-[200px]" name="" id="model" v-model="model">
          </div>
          <div class="btn flex justify-center mb-5 align-left flex-col">
            <label for="year" class="font-italic">Year</label>
            <input type="text" class="max-w-[200px]" name="" id="year" v-model="year">
          </div>
          <div class="btn flex justify-center mb-5 align-left flex-col">
            <label for="fuelAmount" class="font-italic">Fuel Amount</label>
            <input type="text" class="max-w-[200px]" name="" id="fuelAmount" v-model="fuelAmount">
          </div>
          <div class="btn flex justify-center mb-5 align-left flex-col">
            <label for="vin" class="font-italic">Vin</label>
            <input type="text" class="max-w-[200px]" name="" id="vin" v-model="vin">
          </div>
          <div class="btn flex justify-center mb-5 align-left flex-col">
            <label for="licensePlate" class="font-italic">License Plate</label>
            <input type="text" class="max-w-[200px]" name="" id="licensePlate" v-model="licensePlate">
          </div>
          <div class="btn flex justify-center mb-5 align-left flex-col">
            <label for="sittingCapacity" class="font-italic">Sitting Capacity</label>
            <input type="text" name="" id="sittingCapacity" class="max-w-[200px]" v-model="sittingCapacity">
          </div>
        </div>
        <div class="">
          <div v-if="isError === true" class="text-red mb-2">{{ errorMessage }}</div>
          <button @click='createNewCar'>Create Car</button>
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

<script lang="ts" setup>
import adminBar from '@/components/adminBar.vue'
import {onMounted, ref} from "vue";
import {CarsInterface} from "@/interfaces/cars";
import axios from "axios";
import LoadingBar from "@/components/loadingBar.vue";
import {DriversInterface} from "@/interfaces/drivers";

const cars = ref([] as CarsInterface[])
const drivers = ref([] as DriversInterface[])
const isLoading = ref(true)

const selectedDriver = ref(null as DriversInterface)
const selectedCar = ref(null as CarsInterface)

const isMessage = ref(false)
const message = ref('')

const fromDate = ref('')
const toDate = ref('')

onMounted(async () => {
  const res = await axios.get(import.meta.env.VITE_SERVER_URL + 'drivers/all', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })
  drivers.value = res.data.content as DriversInterface[]
  isLoading.value = false
  const res2 = await axios.get(import.meta.env.VITE_SERVER_URL + 'vehicles/all', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })
  cars.value = res2.data.content as CarsInterface[]
  isLoading.value = false
})

const generateReport = () => {
  // const data = {
  //   "fromDate": fromDate.value,
  //   "toDate": toDate.value,
  //   "driverId": +selectedDriver.value.id,
  //   "vehicleId": +selectedCar.value.id
  // }
  // try {
  //   await axios.post(import.meta.env.VITE_SERVER_URL + 'routes/report', data, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer ${localStorage.getItem('token')}`
  //     }
  //   });
  // } catch(e) {
  //   console.log(e)
  // }
  isMessage.value = true
  message.value = "Report successfully created!!!"
}
</script>

<template>
  <main>
    <admin-bar></admin-bar>
    <div class="rhs text-[black] px-[48px] py-[24px] w-full overflow-y-scroll scrollbar-none">
      <loading-bar v-if="isLoading"></loading-bar>
      <div v-else class="flex flex-col">
        <div class="flex flex-col gap-4">
          <div>Create Report for Driver and Vehicle</div>

          <select v-model="selectedDriver" name="option" id="sittingCapacity" class="mt-2 border max-w-[120px] p-2 rounded-[12px]">
            <option class="text-[#333]" value="" disabled selected>Choose Driver</option>
            <option v-for="(option, index) in drivers" :key="index" :value="option">{{ option.user.username }}</option>
          </select>
          <select v-model="selectedCar" name="option" id="sittingCapacity" class="mt-2 border max-w-[120px] p-2 rounded-[12px]">
            <option class="text-[#333]" value="" disabled selected>Choose Car</option>
            <option v-for="(option, index) in cars" :key="index" :value="option">{{ option.licencePlate }}</option>
          </select>

          <div class="btn flex justify-center mb-5 align-left flex-col">
            <label for="vin" class="font-italic">From Date</label>
            <input type="text" class="max-w-[200px]" name="" id="vin" v-model="fromDate">
          </div>

          <div class="btn flex justify-center mb-5 align-left flex-col">
            <label for="vin" class="font-italic">To Date</label>
            <input type="text" class="max-w-[200px]" name="" id="vin" v-model="toDate">
          </div>
          <div>
            <div v-if="isMessage" class="text-green p-2">
            {{ message}}
            </div>
          <button @click="generateReport" class="mt-5">Generate Report</button>
        </div></div>
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

button {
  border: 1px solid black;
  padding: 12px 16px;
  border-radius: 12px;
  background: black;
  color: white;
}

input {
  padding: 12px 16px;
  border-radius: 12px;
  border: 1px solid black;
  :focus {
    border-color: cyan;
  }
}
</style>

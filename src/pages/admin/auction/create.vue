<script lang="ts" setup>
import adminBar from '@/components/adminBar.vue'
import { ref } from "vue"
import { useRouter } from 'vue-router'
import LoadingBar from "@/components/loadingBar.vue";
import {CarsInterface} from "@/interfaces/cars";
import {onMounted} from "vue";
import axios from "axios";

const router = useRouter();

const selectedOption = ref('')
const cars = ref([] as CarsInterface[])
const badCars = ref([] as CarsInterface[])
const isLoading = ref(true)
const newCars = ref([] as CarsInterface[])
const bid = ref(0)

onMounted(async () => {
  const res = await axios.get(import.meta.env.VITE_SERVER_URL + 'vehicles/all', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })
  const auctions = await axios.get(import.meta.env.VITE_SERVER_URL + 'auctions/all', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })
  let badIds = [] as number[]
  cars.value = res.data.content as CarsInterface[]
  badCars.value = auctions.data.content as CarsInterface[]
  badCars.value.map((badCar: CarsInterface)=>{
    badIds.push(badCar.vehicle.id)
  })
  console.log('bad IDs:', badIds)
  newCars.value = cars.value.filter((car: CarsInterface)=> {
    if (!badIds.includes(car.id)) {
      return car;
    }
  })
  isLoading.value = false
})

const assignCarToAuction = async () => {
  const data = {
    vehicleId: selectedOption.value.id,
    startDate: "2023-11-18",
    endDate: "2024-11-18",
    currentBid: +bid.value
  };
  try {
  const response = await axios.post(import.meta.env.VITE_SERVER_URL + 'auctions', data, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    console.log(response.data); // Output the response data if needed
    await router.push('auctions/')
  } catch (error) {
    console.error('Error:', error);
  }
}
</script>

<template>
  <main>
    <admin-bar />
    <div class="rhs text-[black] px-[48px] py-[24px] w-full">
      <loading-bar v-if="isLoading"></loading-bar>
      <div class="flex justify-center flex-col w-full" v-else>
        <div class="text-[24px] font-bold mb-4">Create New Car Data</div>

          <div class="btn flex justify-center mb-5 align-left flex-col">
            <label for="sittingCapacity" class="font-italic">Select Car</label>
            <select v-model="selectedOption" name="option" id="sittingCapacity" class="mt-2 border max-w-[120px] p-2 rounded-[12px]">
              <option class="text-[#333]" value="" disabled selected>Choose Car</option>
              <option v-for="(option, index) in newCars" :key="index" :value="option">{{ option.licencePlate }}</option>
            </select>
            <label for="" class="font-italic my-2">Type BID</label>
            <div>
              <input type="text" v-model="bid">
            </div>
            <div>
              <button class="flex mt-2" @click="assignCarToAuction">Assign to Auction</button>
            </div>
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

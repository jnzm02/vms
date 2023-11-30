<script lang="ts" setup>
import adminBar from '@/components/adminBar.vue'
import { useRouter } from 'vue-router'
import LoadingBar from "@/components/loadingBar.vue";
import {onMounted, ref} from "vue";
import axios from "axios";
import {RoutesInterface} from "@/interfaces/routes";
import DriverItem from "@/components/driverItem.vue";
import {DriversInterface} from "@/interfaces/drivers";
import {CarsInterface} from "@/interfaces/cars";

const router = useRouter();
const currentId = router.currentRoute.value.params.id;

const isLoading = ref(true)
const route = ref(null as RoutesInterface)
const isSelected = ref(false)
const drivers = ref(null as DriversInterface[])
const cars = ref(null as CarsInterface[])

const selectedDriver = ref(null as DriversInterface)
const generateReport = async () => {
  const data = {
    "fromDate": "2023-11-30",
    "toDate": "2023-11-30",
    "driverId": currentID,
    "vehicleId": 4
  }
  const res = await axios.post(import.meta.env.VITE_SERVER_URL + 'routes/report', data, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  });
}


onMounted(async () => {
  const res = await axios.get(import.meta.env.VITE_SERVER_URL + 'routes/' + currentId, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })
  route.value = res.data as RoutesInterface
  isLoading.value = false
  if (!route.value.driver) {
    const res = await axios.get(import.meta.env.VITE_SERVER_URL + 'drivers/all', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    drivers.value = res.data.content as DriversInterface[]
  }
})
const assignDriver = async () => {
  isSelected.value = true
  console.log(selectedDriver.value)
  cars.value = selectedDriver.value.vehicle as CarsInterface
  await axios.put(`${import.meta.env.VITE_SERVER_URL}routes/${currentId}/assign-driver/${selectedDriver.value.id}`, null, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })
  await router.push('./')
}

const goBack = async () => {
  await router.go(-1)
}
</script>

<template>
  <main class="w-full">
    <admin-bar></admin-bar>
    <div class="rhs text-[black] px-[48px] py-[24px] w-full overflow-y-scroll">
      <loading-bar v-if="isLoading"/>
      <div class="flex justify-center flex-col w-full" v-else>
        <div class="mb-2">
          <button @click="goBack" class="flex align-center justify-center">
            <img src="@/assets/arrow-left.svg" alt="arrow-left">Back</button>
        </div>
        <div class="grid grid-cols-2 w-full rounded-[12px] border-black">
          <div>
            <div class="flex flex-col gap-[4px]">

              <div>
                <h2 class="text-[36px]">Route Info</h2>
                <div>Starting Point: {{ route.startPoint}} </div>
                <div>Ending Point: {{ route.endPoint }} </div>
                <div>Status: {{ route.status }} </div>
                <div>
<!--                  <button class="mt-2" @click="generateReport">Generate Report</button>-->
                </div>
              </div>
              <h3 class="text-[24px]">Order:</h3>
              <img src="@/assets/profile.svg" class='bg-transparent w-[50%]'  alt="car">
              <div>Username: {{ route.staff.username }}</div>
              <div>Last Name: {{ route.staff.role }}</div>
              <!--              <div v-else></div>-->
              <!--      <button class="bg-transparent flex justify-end"><img src="@/assets/arrow-right.svg" class="w-6 h-6 bg-transparent" alt="right" @click="$router.push(`cars/${carData.id}`)"></button>-->
            </div>

          </div>
          <div>
            <h2 class="text-[24px]">Driver Info</h2>
            <div v-if="!route.driver || !route.vehicle" class="flex flex-col">
              Assign Driver and Car
              <select v-model="selectedDriver" name="option" id="sittingCapacity" class="mt-2 border max-w-[120px] p-2 rounded-[12px]">
                <option class="text-[#333]" value="" disabled selected>Choose Driver</option>
                <option v-for="(option, index) in drivers" :key="index" :value="option">{{ option.user.username }}</option>
              </select>
              <div>
                <button @click="assignDriver" class="mt-2">Assign Driver</button>
              </div>
<!--              <div v-if="isSelected">-->
<!--                <div v-if="!cars">Cars for this Driver does not exist</div>-->
<!--                <select v-else v-model="selectedCar" name="option" id="sittingCapacity" class="border-[1px] mt-2 border max-w-[120px] p-2 rounded-[12px]">-->
<!--                  <option class="text-[#333]" value="" disabled selected>Choose Car</option>-->
<!--                  <option v-for="(option, index) in cars" :key="index" :value="option">{{ option.model }}</option>-->
<!--                </select>-->
<!--              </div>-->
            </div>
            <div v-else class="flex flex-col">
              <driver-item :driver-data="route.driver"/>
              <h2 class="text-[24px]">Car Info</h2>
              <div>Model: {{ route.vehicle.model }}</div>
              <div>License Plate: <span class="rounded-[12px] flex align-center gap-2"><img src="@/assets/flagKZ.svg" class="h-4 rounded-[2px]" alt="KZ">{{ route.vehicle.licencePlate}}</span></div>
            </div>
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

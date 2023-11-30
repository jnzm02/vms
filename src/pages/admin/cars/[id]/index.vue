<script lang="ts" setup>
import adminBar from '@/components/adminBar.vue'
import {onMounted, ref} from "vue"
import { useRouter } from 'vue-router'
import axios from "axios";
import {CarsInterface} from "@/interfaces/cars";
import LoadingBar from "@/components/loadingBar.vue";
import {AdminInterface} from "@/interfaces/admin";

const router = useRouter();
const currentId = router.currentRoute.value.params.id;

const selectedUser = ref(null as AdminInterface)
const users = ref(null as AdminInterface[])

const car = ref(null as CarsInterface)
const isLoading = ref(true)

onMounted(async () => {
  const res = await axios.get(import.meta.env.VITE_SERVER_URL + 'vehicles/' + currentId, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })
  car.value = res.data as CarsInterface
  console.log('Car', car)
  if (!car.value.driver) {
    const res2 = await axios.get(`${import.meta.env.VITE_SERVER_URL}drivers/all`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    users.value = res2.data.content as AdminInterface[];
    // users.value = users.value.filter((driver: AdminInterface) => {
    //   return driver.role === 'driver';
    // });
    console.log('Users:', users)
  }
  isLoading.value = false
  console.log(car)
})

const assignCar = async () => {
  const driverId = +selectedUser.value.id
  const res = await axios.put(`${import.meta.env.VITE_SERVER_URL}drivers/${driverId}/assign-vehicle/${+currentId}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })
  console.log(res)
  await router.push('cars')
}

const goBack = async () => {
  await router.go(-1)
}
</script>

<template>
  <main class="w-full">
    <admin-bar></admin-bar>
    <div class="rhs text-[black] px-[48px] py-[24px] w-full overflow-y-scroll scrollbar-none">
      <loading-bar v-if="isLoading" />
      <div v-else>
      <div class="flex justify-center flex-col w-full">
        <div class="mb-2">
          <button @click="goBack" class="flex align-center justify-center">
            <img src="../../../../assets/arrow-left.svg" alt="arrow-left">Back</button>
        </div>
        <div class="grid gap-8 grid-cols-2 w-full rounded-[12px] border-black">
          <div class="flex flex-col gap-[4px]">
            <h2 class="text-[36px]">Car Info</h2>
            <img src="@/assets/car.png" class='bg-transparent' alt="car">
            <div>Model: {{ car.model }}</div>
            <div>License Plate: <span class="rounded-[12px] flex align-center gap-2"><img src="@/assets/flagKZ.svg" class="h-4 rounded-[2px]" alt="KZ">{{ car.licencePlate}}</span></div>
            <div>Capacity: {{ car.capacity }}</div>
            <div>Vin: {{ car.vin }}</div>
            <div>Fuel Type: {{ car.fuelType }}</div>
            <div>Licence Plate: {{ car.licencePlate }}</div>
            <div v-if="!car.driver || !car.driver.user">No Driver</div>
            <!--      <button class="bg-transparent flex justify-end"><img src="@/assets/arrow-right.svg" class="w-6 h-6 bg-transparent" alt="right" @click="$router.push(`cars/${carData.id}`)"></button>-->
          </div>
          <div v-if="car.driver">
            <h2 class="text-[36px]">Driver Info</h2>
            <div class="flex flex-col gap-[4px]">
              <img src="@/assets/profile.svg" class='bg-transparent w-[50%]'  alt="car">
              <div>Username: {{ car.driver.user.username }}</div>
              <div>First Name: {{ car.driver.user.firstName}}</div>
              <div>Last Name: {{ car.driver.user.lastName }}</div>
              <div>Email: {{ car.driver.user.email }}</div>
              <div>Phone: {{ car.driver.user.phoneNumber }}</div>
              <div>Rating: {{ car.driver.rating }}</div>
              <div>Licence Number: {{ car.driver.licenseNumber }}</div>
              <div v-if="!car.driver || !car.driver.user">No Driver</div>
<!--              <div v-else></div>-->
              <!--      <button class="bg-transparent flex justify-end"><img src="@/assets/arrow-right.svg" class="w-6 h-6 bg-transparent" alt="right" @click="$router.push(`cars/${carData.id}`)"></button>-->
            </div>
          </div>
          <div v-else class="flex flex-col">
            <h2 class="text-[36px]">Assign Driver</h2>
            <select v-model="selectedUser" name="option" id="sittingCapacity" class="mt-2 border max-w-[120px] p-2 rounded-[12px]">
              <option class="text-[#333]" value="" disabled selected>Choose Driver</option>
              <option v-for="(option, index) in users" :key="index" :value="option">{{ option.user.username }}</option>
            </select>
            <div>
              <button @click="assignCar">Assign</button>
            </div>
          </div>
        </div>
        <!--        <div class="text-[18px] font-bold mb-3">Driver {{ driver.id }} Data</div>-->
        <!--        <div class="flex flex-col overflow-x-scroll w-full gap-x-2">-->
        <!--          <div class="btn flex flex-col justify-center mb-5 align-left gap-4">-->
        <!--            <div class="font-italic">Email:</div><div>{{ driver.email }}</div>-->
        <!--          </div>-->
        <!--          <div class="btn flex justify-center mb-5 align-left gap-4">-->
        <!--            <div class="font-italic mb-1">Firstname:</div><div>{{ driver.firstname }}</div>-->
        <!--          </div>-->
        <!--          <div class="btn flex justify-center mb-5 align-left gap-4">-->
        <!--            <div class="font-italic mb-1">Lastname:</div><div>{{ driver.lastname }}</div>-->
        <!--          </div>-->
        <!--          <div class="btn flex justify-center mb-5 align-left gap-4">-->
        <!--            <div class="font-italic mb-1">Address:</div><div>{{ driver.address }}</div>-->
        <!--          </div>-->
        <!--          <div class="btn flex justify-center mb-5 align-left gap-4">-->
        <!--            <div class="font-italic mb-1">Phone:</div><div>{{ driver.phone }}</div>-->
        <!--          </div>-->
        <!--          <div class="btn flex justify-center mb-5 align-left gap-4">-->
        <!--            <div class="font-italic mb-1">Driving License:</div><div>{{ driver.drivingLicense }}</div>-->
        <!--          </div>-->
        <!--          <div class="btn flex justify-center mb-5 align-left gap-4">-->
        <!--            <div class="font-italic mb-1">Government ID:</div><div>{{ driver.governmentId }}</div>-->
        <!--          </div>-->
        <!--        </div>-->
      </div>
    </div></div>
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
  margin-top: 4px;
}
</style>

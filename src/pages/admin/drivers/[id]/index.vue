<script lang="ts" setup>
import adminBar from '@/components/adminBar.vue'
import {onMounted, ref} from "vue"
import { useRouter } from 'vue-router'
import LoadingBar from "@/components/loadingBar.vue";
import axios from "axios";
import {DriversInterface} from "@/interfaces/drivers";
import {CarsInterface} from "@/interfaces/cars";
import CarItem from "@/components/carItem.vue";

const router = useRouter();
const currentId = router.currentRoute.value.params.id;

const isLoading = ref(true)
const driver = ref(null as DriversInterface)

const cars = ref(null as CarsInterface[])

onMounted(async () => {
  const res = await axios.get(import.meta.env.VITE_SERVER_URL + 'drivers/' + currentId, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })
  driver.value = res.data as DriversInterface
  isLoading.value = false
  const res2 = await axios.get(import.meta.env.VITE_SERVER_URL + 'vehicles/all', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })
  cars.value = res2.data.content as CarsInterface[]
  cars.value = cars.value.filter((car: CarsInterface) => {
    if (car.driver?.id === +currentId) {
      return car
    }
  })
})

const goBack = async () => {
  await router.go(-1)
}
</script>

<template>
  <main class="w-full">
    <admin-bar></admin-bar>
    <div class="rhs text-[black] px-[48px] py-[24px] w-full overflow-y-scroll scrollbar-none">
      <loading-bar v-if="isLoading"/>
      <div v-else class="flex justify-center flex-col w-full">
        <div class="mb-2">
          <button @click="goBack" class="flex align-center justify-center">
            <img src="@/assets/arrow-left.svg" alt="arrow-left">Back</button>
        </div>
        <div class="grid grid-cols-2 w-full rounded-[12px] border-black">
          <div>
            <h2 class="text-[36px]">Driver Info</h2>
            <div class="flex flex-col gap-[4px]">
              <img src="@/assets/profile.svg" class='bg-transparent w-[50%]'  alt="car">
              <div>Username: {{ driver.user.username }}</div>
              <div>First Name: {{ driver.user.firstName}}</div>
              <div>Last Name: {{ driver.user.lastName }}</div>
              <div>Email: {{ driver.user.email }}</div>
              <div>Phone: {{ driver.user.phoneNumber }}</div>
              <div>Rating: {{ driver.rating }}</div>
              <div>Licence Number: {{ driver.licenseNumber }}</div>
              <div v-if="!driver || !driver.user">No Driver</div>
              <!--              <div v-else></div>-->
              <!--      <button class="bg-transparent flex justify-end"><img src="@/assets/arrow-right.svg" class="w-6 h-6 bg-transparent" alt="right" @click="$router.push(`cars/${carData.id}`)"></button>-->
            </div>
          </div>
          <div class="overflow-y-scroll scrollbar-none">
            <h2 class="text-[36px]">Cars Info</h2>
            <div v-if="cars.length < 1">No Vehicles Assigned</div>
            <div v-for="car in cars" :key="car.id">
              <car-item :car-data="car" />
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
  //  border: 1px solid black;
  //  padding: 8px 12px;
  //  border-radius: 12px;
  //  background: black;
  //  color: white;
  color: #5459EA;
  font-size: 24px;
}
</style>

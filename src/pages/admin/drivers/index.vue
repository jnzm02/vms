<script lang="ts" setup>
import adminBar from '@/components/adminBar.vue'

import { useRouter } from 'vue-router'
import {onMounted, ref} from "vue";
import axios from "axios";
import LoadingBar from "@/components/loadingBar.vue";
import DriverItem from "@/components/driverItem.vue";
import {AdminInterface} from "@/interfaces/admin";

const router = useRouter()

const drivers = ref([] as AdminInterface[])
const isLoading = ref(true)
onMounted(async () => {
  const role = 'driver';
  const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}users?role=${role}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })
  drivers.value = res.data.content as AdminInterface[];
  drivers.value = drivers.value.filter((driver: AdminInterface) => {
    return driver.role === 'driver';
  });
  console.log(drivers.value)
  isLoading.value = false
})

const createNewDriver = () => {
  router.push('drivers/create')
}

</script>

<template>
  <main>
    <admin-bar></admin-bar>
    <div class="rhs text-[black] px-[48px] py-[24px] w-full overflow-y-scroll scrollbar-none">
      <loading-bar v-if="isLoading" />
      <div class="search p-[20px] flex align-center  justify-end w-full gap-[8px]">
        <input type="text" placeholder="Search for Drivers">
        <button class="border-[1px] p-[2px]">Search</button>
      </div>
      <div class="rounded-[12px]">
        <div class="flex justify-space-between align-center">
          <div class="text-[24px] my-4 rounded-4">Drivers List</div>
          <div @click="createNewDriver" class="font-bold bg-[black] text-[white] py-2 px-4 cursor-pointer rounded-[10px]">+ Add New Driver</div>
        </div>
        <div>
        </div>
        <div class="grid grid-cols-3 gap-[20px]">
          <div v-for="driver in drivers" :key="driver.id">
            <driver-item class="bg-[#eff]" :car-data="driver" :driver-data="driver"/>
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
  padding: 12px 16px;
  border-radius: 12px;
  border: 1px solid black;
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

<script lang="ts" setup>
import adminBar from '@/components/adminBar.vue'
import driverItem from '@/components/driverItem.vue'

import { useRouter } from 'vue-router'

const router = useRouter()

const maintainers = [
  {
    id: 1,
    data: {
      name: 'Aidyn',
      lastname: 'Zhumaqadyr',
      email: 'aidyn03@gmail.com',
      phone: '87776665544'
    }
  }, {
    id: 2,
    data: {
      name: 'Nursultan',
      lastname: 'Nazarbayev',
      email: 'nurs@gmail.com',
      phone: '8700000000'
    }
  }, {
    id: 3,
    data: {
      name: 'Kairat',
      lastname: 'Nurtas',
      email: 'nurtasinger@gmail.com',
      phone: '8777777777'
    }
  }, {
    id: 4,
    data: {
      name: 'Naruto',
      lastname: 'Uzumaki',
      email: 'narutothehokage@gmail.com',
      phone: '87077077777'
    }
  }
]


const createNewDriver = () => {
  router.push('maintenance/create')
}

</script>

<template>
  <main>
    <admin-bar></admin-bar>
    <div class="rhs text-[black] px-[48px] py-[24px]">
      <div class="search p-[20px] flex align-center  justify-end w-full gap-[8px]">
        <input type="text" placeholder="Search Maintenance Person">
        <button class="border-[1px] p-[2px]">Search</button>
      </div>
      <div class="rounded-[12px]">
        <div class="flex justify-space-between align-center">
          <div class="text-[24px] my-4 rounded-4">Maintenance Personnel List</div>
          <div @click="createNewDriver" class="font-bold bg-[black] text-[white] py-2 px-4 cursor-pointer rounded-[10px]">+ Add New Maintenance Person</div>
        </div>
        <div>
        </div>
        <div class="grid grid-cols-5 px-[24px] w-full justify-between align-center font-bold p-2">
          <div>Firstname</div>
          <div>Lastname</div>
          <div>Email</div>
          <div class="justify-end flex">Phone</div>
        </div>
        <div v-for="maintainer in maintainers" :key="maintainer.id">
          <driver-item class="bg-[#eff]" :class="{ 'bg-[#fef]': maintainer.id % 2 === 0 }" :driver-data="maintainer.data" />
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

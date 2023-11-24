<script lang="ts" setup>
import adminBar from '@/components/adminBar.vue'
import carItem from '@/components/carItem.vue'

import { useRouter } from 'vue-router'

const router = useRouter()

const cars = [
  {
    id: 1,
    data: {
      name: 'Aidyn',
      mark: 'Chevrolet',
      color: 'red'
    }
  }, {
    id: 2,
    data: {
      name: '',
      mark: 'Mercedes',
      color: 'white'
    }
  }, {
    id: 3,
    data: {
      name: '',
      mark: 'Toyota',
      color: 'black'
    }
  }, {
    id: 4,
    data: {
      name: '',
      mark: 'BMW',
      color: 'grey'
    }
  }
]

const createNewCar = async () => {
  await router.push('cars/create')
}
</script>

<template>
  <main>
    <admin-bar></admin-bar>
    <div class="rhs text-[black] px-[48px] py-[24px] w-full overflow-y-scroll scrollbar-none">
      <div class="search p-[20px] flex align-center justify-end w-full gap-[8px]">
        <input type="text" placeholder="Search for Cars">
        <button class="border-[1px] p-[2px]">Search</button>
      </div>
      <div class="rounded-[12px] mt-[20px]">
        <div class="flex justify-space-between align-center mb-4">
          <div class="text-[24px] rounded-4">Cars List</div>
          <div @click="createNewCar" class="font-bold bg-[black] text-[white] py-2 px-4 cursor-pointer rounded-[10px]">+ Add New Car</div>
        </div>
        <div>
        </div>
        <div class="grid grid-cols-3 gap-[20px]">
          <div v-for="car in cars" :key="car.id">
            <car-item class="bg-[#eff]" :class="{ 'bg-[#fef]': car.id % 2 === 0 }" :driver-data="car.data" />
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

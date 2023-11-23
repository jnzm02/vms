<script lang="ts" setup>
import adminBar from '@/components/adminBar.vue'
import carItem from '@/components/carItem.vue'

const cars = [
  {
    id: 1,
    data: {
      // name: 'Aidyn',
      mark: 'Chevrolet',
      color: 'red'
    }
  }, {
    id: 2,
    data: {
      // name: '',
      mark: 'Mercedes',
      color: 'white'
    }
  }, {
    id: 3,
    data: {
      // name: '',
      mark: 'Toyota',
      color: 'black'
    }
  }, {
    id: 4,
    data: {
      // name: '',
      mark: 'BMW',
      color: 'grey'
    }
  }
]

</script>

<template>
  <main>
    <admin-bar></admin-bar>
    <div class="rhs text-[black] x-[48px] py-[24px] overflow-y-scroll scrollbar-hidden">
      <div class="search p-[20px] flex align-center  justify-end w-full gap-[8px]">
        <input type="text" placeholder="Search for Cars">
        <button class="border-[1px] p-[2px]">Search</button>
      </div>
      <div class="rounded-[12px] mt-[100px]">
        <div class="text-[24px] my-4 rounded-4">Cars List</div>
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

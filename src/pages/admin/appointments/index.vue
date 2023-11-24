<script lang="ts" setup>
import adminBar from '@/components/adminBar.vue'
import RouteItem from "@/components/routeItem.vue";

import { useRouter } from 'vue-router'

const router = useRouter()

const routes = [
  {
    id: 1,
    name: "Appointment 1",
    description: 'Description 1',
    start_position: 'Starting Position',
    end_position: 'Ending Position',
    status: 'done'
  },
  {
    id: 1,
    name: "Appointment 2",
    description: 'Description 2',
    start_position: 'Starting Position',
    end_position: 'Ending Position',
    status: 'active'
  },
  {
    id: 1,
    name: "Appointment 3",
    description: 'Description 3',
    start_position: 'Starting Position',
    end_position: 'Ending Position',
    status: 'done'
  },
  {
    id: 1,
    name: "Appointment 4",
    description: 'Description 4',
    start_position: 'Starting Position',
    end_position: 'Ending Position',
    status: 'active'
  },
  {
    id: 1,
    name: "Appointment 5",
    description: 'Description 5',
    start_position: 'Starting Position',
    end_position: 'Ending Position',
    status: 'active'
  },
]

const createAppointment = () => {
  router.push('appointments/create')
}
</script>

<template>
  <main>
    <admin-bar></admin-bar>
    <div class="rhs text-[black] px-[48px] py-[24px] w-full overflow-y-scroll scrollbar-none">
      <div class="search p-[20px] flex align-center  justify-end w-full gap-[8px]">
        <input type="text" placeholder="Search for Cars">
        <button class="border-[1px] p-[2px]">Search</button>
      </div>
      <div class="rounded-[12px] mt-[100px] flex flex-col justify-center">
        <div class="flex justify-space-between align-center">
          <div class="text-[24px] my-4 rounded-4">Active Appointments</div>
          <div @click="createAppointment" class="font-bold bg-[black] text-[white] py-2 px-4 cursor-pointer rounded-[10px]">+ Create an Appointment</div>
        </div>
        <div class="flex justify-space-between align-center">
          <div class="flex gap-x-4 overflow-x-scroll scrollbar-thin">
            <div v-for="route in routes" :key="route.id">
              <RouteItem v-if="route.status === 'active'" :routeData="route"/>
            </div>
          </div>
        </div>
        <div class="">
          <div class="text-[24px] my-4 rounded-4">All Appointments</div>
          <div class="flex justify-space-between align-center">
            <div class="flex gap-x-4 overflow-x-scroll scrollbar-thin">
              <div v-for="route in routes" :key="route.id">
                <RouteItem :routeData="route"/>
              </div>
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

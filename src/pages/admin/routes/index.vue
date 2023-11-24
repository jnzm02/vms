<script lang="ts" setup>
import adminBar from '@/components/adminBar.vue'
import RouteItem from "@/components/routeItem.vue";

const routes = [
  {
    id: 1,
    routeData: {
      driverId: 1,
      name: "Route 1",
      description: "Description 1",
      status: 'active',
      start_position: 'kabanbay batyr',
      end_position: 'uly dala'
    }
  },
  {
    id: 1,
    routeData: {
      driverId: 1,
      name: "Route 1",
      description: "Description 1",
      status: 'active',
      start_position: 'kabanbay batyr',
      end_position: 'uly dala'
    }
  },
  {
    id: 1,
    routeData: {
      driverId: 1,
      name: "Route 1",
      description: "Description 1",
      status: 'done',
      start_position: 'kabanbay batyr',
      end_position: 'uly dala'
    }
  },
  {
    id: 1,
    routeData: {
      driverId: 1,
      name: "Route 1",
      description: "Description 1",
      status: 'active',
      start_position: 'kabanbay batyr',
      end_position: 'uly dala'
    }
  },
  {
    id: 1,
    routeData: {
      driverId: 1,
      name: "Route 1",
      description: "Description 1",
      status: 'done',
      start_position: 'kabanbay batyr',
      end_position: 'uly dala'
    }
  },
]
</script>

<template>
  <main>
    <admin-bar></admin-bar>
    <div class="rhs text-[black] px-[48px] py-[24px] w-full overflow-y-scroll scrollbar-none">
      <div class="rounded-[12px] mt-[100px]">
        <div class="text-[24px] my-4 rounded-4">Active Routes</div>
        <div class="flex justify-space-between align-center">
          <div class="flex gap-x-4 overflow-x-scroll scrollbar-thin">
            <div v-for="route in routes" :key="route.id">
              <RouteItem v-if="route.routeData.status === 'active'" :routeData="route.routeData"/>
            </div>
          </div>
        </div>
        <div class="">
          <div class="text-[24px] my-4 rounded-4">All Routes</div>
          <div class="flex justify-space-between align-center">
            <div class="flex gap-x-4 overflow-x-scroll scrollbar-thin">
              <div v-for="route in routes" :key="route.id">
                <RouteItem :routeData="route.routeData"/>
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
</style>

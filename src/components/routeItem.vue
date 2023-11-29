<script lang="ts" setup>
import {RoutesInterface} from "@/interfaces/routes";

const props = defineProps<{
  routeData: RoutesInterface
}>()

</script>

<template>
  <div class="flex rounded-[20px] px-[24px] justify-between align-center p-2 bg-[#eee] w-[200px] cursor-pointer" :class="{ active: routeData.status === 'active'}">
    <div class="">
      <img src="@/assets/route.png" class='bg-transparent w-[120px]' alt="route" >
      <div class="flex flex-col">
        <div><span :class="{ 'bg-yellow text-white p-1 rounded-2': routeData.status === 'WAITING'}">{{ routeData.status }}</span></div>
        <div v-if="routeData.driver" class="flex justify-start gap-1">
          Driver:
          <div>{{ routeData.driver.user.firstName }}</div>
          <div>{{ routeData.driver.user.lastName }}</div>
        </div>
        <div v-else>No Driver Assigned</div>
        <div>Starting Point: {{ routeData.startPoint }}</div>
        <div>End Point: {{ routeData.endPoint }}</div>
<!--        <div>{{ routeData.driver }}</div>-->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
button {
  background: #555;
  color: white;
  border-radius: 8px;
  padding: 4px;
}

.active {
  background: #cce;
  color: black;
}
</style>

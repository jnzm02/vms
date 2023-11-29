<script lang="ts" setup>
import {RoutesInterface} from "@/interfaces/routes";

const props = defineProps<{
  routeData: RoutesInterface
}>()

</script>

<template>
  <div @click="$router.push(`routes/${routeData.id}`)" class="cursor-pointer rounded-[20px] px-[24px] justify-between align-center p-2 bg-[#eee]" :class="{ active: routeData.status === 'active'}">
    <div class="">
      <img src="@/assets/route.png" class='bg-transparent w-[120px]' alt="route" >
      <div class="flex flex-col">
        <div><span :class="{ 'bg-yellow': routeData.status === 'WAITING', 'bg-cyan': routeData.status === 'NEW' }" class="text-white my-1 p-1 rounded-2">{{ routeData.status }}</span></div>
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

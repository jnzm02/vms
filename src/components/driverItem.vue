<script lang="ts" setup>
import {DriversInterface} from "@/interfaces/drivers";

const props = defineProps<{
  driverData: DriversInterface
}>()

</script>

<template>
  <div @click="$router.push(`drivers/${driverData.id}`)" class="cursor-pointer rounded-[20px] px-[24px] w-full justify-center align-center p-2">
    <div class="flex flex-col gap-[4px]">
      <img src="@/assets/profile.svg" class='bg-transparent max-w-[200px]' alt="car">
      <div>Username: {{ driverData.user.username }}</div>
      <div>First Name: {{ driverData.user.firstName }}</div>
      <div>Last Name: {{ driverData.user.lastName }}</div>
      <div>Email: {{ driverData.user.email }}</div>
<!--      <div>Rating: {}}</div>-->
<!--      <button class="bg-transparent flex justify-end"><img src="@/assets/arrow-right.svg" class="w-6 h-6 bg-transparent" alt="right" @click="$router.push(`drivers/${driverData.id}`)"></button>-->
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
</style>

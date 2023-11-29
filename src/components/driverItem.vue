<script lang="ts" setup>
import {AdminInterface} from "@/interfaces/admin";

const props = defineProps<{
  driverData: AdminInterface
}>()

</script>

<template>
  <div @click="$router.push(`drivers/${driverData.id}`)" class="cursor-pointer rounded-[20px] px-[24px] w-full justify-center align-center p-2">
    <div class="flex flex-col gap-[4px]">
      <img src="@/assets/profile.svg" class='bg-transparent' alt="car">
      <div>Username: {{ driverData.username }}</div>
      <div>First Name: {{ driverData.firstName }}</div>
      <div>Last Name: {{ driverData.lastName }}</div>
      <div>Email: {{ driverData.email }}</div>
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

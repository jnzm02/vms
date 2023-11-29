<script lang="ts" setup>
import {AdminInterface} from "@/interfaces/admin";

const props = defineProps<{
  fuelData: AdminInterface
}>()

</script>

<template>
  <div @click="$router.push(`fueling/${fuelData.id}`)" class="cursor-pointer rounded-[20px] px-[24px] w-full justify-center align-center p-2">
    <div class="flex flex-col gap-[4px]">
      <img src="@/assets/profile.svg" class='bg-transparent' alt="car">
      <div>Username: {{ fuelData.username }}</div>
      <div>First Name: {{ fuelData.firstName }}</div>
      <div>Last Name: {{ fuelData.lastName }}</div>
      <div>Email: {{ fuelData.email }}</div>
<!--      <button class="bg-transparent flex justify-end">-->
<!--        <img src="@/assets/arrow-right.svg" class="w-6 h-6 bg-transparent" alt="right" @click="$router.push(`fueling/${fuelData.id}`)">-->
<!--      </button>-->
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

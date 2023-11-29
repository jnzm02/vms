<script lang="ts" setup>
import {CarsInterface} from "@/interfaces/cars";

const props = defineProps<{
  carData: CarsInterface
}>()

</script>

<template>
  <div class="flex rounded-[20px] px-[24px] w-full justify-center align-center p-2">
    <div class="flex flex-col gap-[4px]">
      <img src="@/assets/car.png" class='bg-transparent' alt="car">
      <div>Model: {{ carData.model }}</div>
      <div>License Plate: <span class="rounded-[12px] flex align-center gap-2"><img src="@/assets/flagKZ.svg" class="h-4 rounded-[2px]" alt="KZ">{{ carData.licencePlate}}</span></div>
      <div v-if="carData.driver && carData.driver.user">Driver: {{ carData.driver.user.username }}</div>
      <div v-else>No Driver</div>
      <button class="bg-transparent flex justify-end"><img src="@/assets/arrow-right.svg" class="w-6 h-6 bg-transparent" alt="right" @click="$router.push(`cars/${carData.id}`)"></button>
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

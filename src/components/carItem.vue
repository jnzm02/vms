<script lang="ts" setup>
const props = defineProps<{
  driverData: {
    name: string,
    mark: string,
    color: string
  }
}>()

</script>

<template>
  <div class="grid grid-cols rounded-[20px] px-[24px] w-full justify-between align-center p-2">
    <div class="flex flex-col gap-[4px]">
      <img src="@/assets/car.png" class='bg-transparent' alt="car">
      <div>{{ driverData.name }}</div>
      <div>{{ driverData.mark }}</div>
      <div>{{ driverData.color }}</div>
<!--      <div class="justify-end flex">{{ driverData.driver }}</div>-->
      <div class="flex justify-end p-2"><button class="flex">Edit <img src="@/assets/arrow.svg" alt="arrow"></button></div>
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

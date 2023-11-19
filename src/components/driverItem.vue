<script lang="ts" setup>
const props = defineProps<{
  driverData: {
    name: string,
    lastname: string,
    email: string,
    phone: string,
  }
}>()

</script>

<template>
  <div class="grid grid-cols-4 px-[24px] mx-auto w-[80%] justify-between align-center p-2 cursor-pointer">
    <div class="flex gap-[4px]"><img src="@/assets/driver-photo.svg" alt="driver">
    <div>{{ driverData.name }}</div></div>
    <div>{{ driverData.lastname }}</div>
    <div>{{ driverData.email }}</div>
    <div class="justify-end flex">{{ driverData.phone }}</div>
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

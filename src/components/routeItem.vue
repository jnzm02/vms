<script lang="ts" setup>
const props = defineProps<{
  routeData: {
    driverId: number,
    name: string,
    description: string,
    status: string,
    start_position: string,
    end_position: string
  }
}>()

</script>

<template>
  <div class="grid grid-cols rounded-[20px] px-[24px] w-full justify-between align-center p-2">
    <div class="flex flex-col gap-[4px]">
      <img src="@/assets/car.png" class='bg-transparent' alt="car">
      <div>{{ routeData.name }}</div>
      <div>{{ routeData.description }}</div>
      <div>{{ routeData.status }}</div>
      <div>{{ routeData.start_position }}</div>
      <div>{{ routeData.end_position }}</div>
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

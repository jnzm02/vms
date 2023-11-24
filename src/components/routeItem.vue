<script lang="ts" setup>
const props = defineProps<{
  routeData: {
    name: string,
    description: string,
    status: string,
    start_position: string,
    end_position: string,
    driver: string
  }
}>()

</script>

<template>
  <div class="rounded-[20px] px-[24px] justify-between align-center p-2 bg-[#eee] w-[200px] cursor-pointer" :class="{ active: routeData.status === 'active'}">
    <div class="">
      <img src="@/assets/route.png" class='bg-transparent w-[120px]' alt="route" >
      <div class="flex flex-col">
        <div>{{ routeData.name }}</div>
        <div>{{ routeData.description }}</div>
        <div>{{ routeData.status }}</div>
        <div>{{ routeData.start_position }}</div>
        <div>{{ routeData.end_position }}</div>
        <div>{{ routeData.driver }}</div>
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

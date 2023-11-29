<script lang="ts" setup>
import {MaintainersInterface} from "@/interfaces/maintainers";

const props = defineProps<{
  maintainerData: MaintainersInterface
}>()

</script>

<template>
  <div class="flex rounded-[20px] px-[24px] w-full justify-center align-center p-2">
    <div class="flex flex-col gap-[4px]">
      <img src="@/assets/profile.svg" class='bg-transparent' alt="car">
      <div>First Name: {{ maintainerData.maintenancePersonnel.firstName }}</div>
      <div>Last Name: {{ maintainerData.maintenancePersonnel.lastName }}</div>
      <div>Rating: {{ maintainerData.maintenanceType }}</div>
      <div v-if="maintainerData.maintenancePersonnel && maintainerData.maintenancePersonnel.profilePictureFileLink">Driver: {{ maintainerData.maintenancePersonnel.profilePictureFileLink.fileName }}</div>
      <div v-else>No Driver</div>
      <button class="bg-transparent flex justify-end">
        <img src="@/assets/arrow-right.svg" class="w-6 h-6 bg-transparent" alt="right" @click="$router.push(`drivers/${maintainerData.id}`)">
      </button>
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

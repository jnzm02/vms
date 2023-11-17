<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter();

const isActive = ref(router.currentRoute.value.fullPath as string)

const activate = async (str) => {
  isActive.value = str;
  console.log(router.currentRoute.value)
  await router.push(`${str}`)
}
</script>

<template>
  <div class="lhs flex flex-column justify-center align-center">
    <div class="bar w-[100%] text-white h-[70vh]">
      <div class="admin gap-[16px] mb-[24px] py-[16px] pr-[24px] cursor-pointer" @click="activate('/admin/profile')" :class="{ active: isActive === '/admin/profile' }">
        <div class="img flex justify-center align-center w-[60px]"><img src="@/assets/profile.svg" class="w-[48px]" alt="profile"></div>
        <div class="">
          <div class="name text-[22px]">Aidyn</div>
          <div class="email text-[12px]">Aidyn@gmail.com</div>
        </div>
        <div class="img flex justify-center align-center w-[60px]"><img class="w-[30px]" src="@/assets/arrow.svg" alt="arrow"></div>
      </div>
      <div class="my-[2px] cursor-pointer p-[12px] pl-[16px]" @click="activate('/admin/reports')" :class="{ active: isActive === '/admin/reports' }">Reports</div>
      <div class="my-[2px] cursor-pointer p-[12px] pl-[16px]" @click="activate('/admin/routes')" :class="{ active: isActive === '/admin/routes' }">Routes</div>
      <div class="my-[2px] cursor-pointer p-[12px] pl-[16px]" @click="activate('/admin/drivers')" :class="{ active: isActive === '/admin/drivers' }">Drivers</div>
      <div class="my-[2px] cursor-pointer p-[12px] pl-[16px]" @click="activate('/admin/cars')" :class="{ active: isActive === '/admin/cars' }">Cars</div>
      <div class="my-[2px] cursor-pointer p-[12px] pl-[16px]" @click="activate('/admin/auction')" :class="{ active: isActive === '/admin/auction' }">Auction</div>
      <div class="my-[2px] cursor-pointer p-[12px] pl-[16px]" @click="activate('/admin/maintenance')" :class="{ active: isActive === '/admin/maintenance' }">Maintenance Personnel</div>
      <div class="my-[2px] cursor-pointer p-[12px] pl-[16px]" @click="activate('/admin/fueling')" :class="{ active: isActive === '/admin/fueling' }">Fueling Personnel</div>
    </div>
  </div>
</template>

<style lang='scss'>
.lhs {
  min-width: 200px;
}

.active {
  background: white;
  font-weight: bold;
  color: #5459EA;
  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;
}

.admin {
  display: grid;
  grid-template-columns: 48px 1fr 48px;
}
</style>

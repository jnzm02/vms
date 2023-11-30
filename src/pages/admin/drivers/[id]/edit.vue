<script lang="ts" setup>
import adminBar from '@/components/adminBar.vue'
import { ref } from "vue"
import { useRouter } from 'vue-router'

const router = useRouter();


const goBack = async () => {
  await router.go(-1)
}
</script>

<template>
  <main class="w-full">
    <admin-bar></admin-bar>
    <div class="rhs text-[black] px-[48px] py-[24px] w-full">
      <div class="flex justify-center flex-col w-full">
        <div class="mb-2">
          <button @click="goBack" class="flex align-center justify-center">
            <img src="@/assets/arrow-left.svg" alt="arrow-left">Back</button>
        </div>
        <div class="grid grid-cols-2 w-full rounded-[12px] border-black">
          <div>asd</div>
          <div>asd</div>
        </div>
        <!--        <div class="text-[18px] font-bold mb-3">Driver {{ driver.id }} Data</div>-->
        <!--        <div class="flex flex-col overflow-x-scroll w-full gap-x-2">-->
        <!--          <div class="btn flex flex-col justify-center mb-5 align-left gap-4">-->
        <!--            <div class="font-italic">Email:</div><div>{{ driver.email }}</div>-->
        <!--          </div>-->
        <!--          <div class="btn flex justify-center mb-5 align-left gap-4">-->
        <!--            <div class="font-italic mb-1">Firstname:</div><div>{{ driver.firstname }}</div>-->
        <!--          </div>-->
        <!--          <div class="btn flex justify-center mb-5 align-left gap-4">-->
        <!--            <div class="font-italic mb-1">Lastname:</div><div>{{ driver.lastname }}</div>-->
        <!--          </div>-->
        <!--          <div class="btn flex justify-center mb-5 align-left gap-4">-->
        <!--            <div class="font-italic mb-1">Address:</div><div>{{ driver.address }}</div>-->
        <!--          </div>-->
        <!--          <div class="btn flex justify-center mb-5 align-left gap-4">-->
        <!--            <div class="font-italic mb-1">Phone:</div><div>{{ driver.phone }}</div>-->
        <!--          </div>-->
        <!--          <div class="btn flex justify-center mb-5 align-left gap-4">-->
        <!--            <div class="font-italic mb-1">Driving License:</div><div>{{ driver.drivingLicense }}</div>-->
        <!--          </div>-->
        <!--          <div class="btn flex justify-center mb-5 align-left gap-4">-->
        <!--            <div class="font-italic mb-1">Government ID:</div><div>{{ driver.governmentId }}</div>-->
        <!--          </div>-->
        <!--        </div>-->
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  display: grid;
  grid-template-columns: 0.3fr 1fr;
  height: 90vh;
  width: 90vw;
}

.rhs {
  background: white;
  border-radius: 12px;
}

input {
  padding: 8px 12px;
  border-radius: 12px;
  border: 1px solid #222;
  :focus {
    border-color: cyan;
  }
}

button {
  //  border: 1px solid black;
  //  padding: 8px 12px;
  //  border-radius: 12px;
  //  background: black;
  //  color: white;
  color: #5459EA;
  font-size: 24px;
}
</style>

<script lang="ts" setup>
import adminBar from '@/components/adminBar.vue'
import axios from 'axios';
import {onMounted, ref} from "vue";
import {AdminInterface} from "@/interfaces/admin";
import LoadingBar from "@/components/loadingBar.vue";

const admin = ref({} as AdminInterface)
const isLoading = ref(true)
onMounted(async () => {
  const res = await axios.get(import.meta.env.VITE_SERVER_URL + 'users/my',
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
    }
  )
  admin.value = res.data as AdminInterface
  console.log(admin.value)
  isLoading.value = false
})

</script>

<template>
  <main>
    <admin-bar></admin-bar>
    <div class="rhs text-[black] px-[48px] py-[24px] w-full overflow-y-scroll">
      <loading-bar v-if="isLoading" />
      <div v-else class="w-full h-full flex justify-center align-center flex-col">
        <img v-if="admin.profilePictureFileLink && admin.profilePictureFileLink.fileName" :src="admin.profilePictureFileLink.fileName" alt="profile">
        <img v-else src="@/assets/profile.svg" alt="profile">

        <div>Email: {{ admin.email }}</div>
        <div>Phone: {{ admin.phoneNumber }}</div>
        <div>First Name: {{ admin.firstName }}</div>
        <div>Last Name: {{ admin.lastName }}</div>
        <div>Email: {{ admin.email }}</div>
        <button @click="$router.push('profile/edit')">Update</button>
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
button {
  border: 1px solid black;
  padding: 12px 16px;
  border-radius: 12px;
  background: black;
  color: white;
}
</style>

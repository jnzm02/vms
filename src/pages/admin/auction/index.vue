<script lang="ts" setup>
import adminBar from '@/components/adminBar.vue'
import {AuctionsInterface} from "@/interfaces/auctions";
import {onMounted, ref} from "vue";
import axios from "axios";
import LoadingBar from "@/components/loadingBar.vue";
import AuctionItem from "@/components/auctionItem.vue";

const auctions = ref([] as AuctionsInterface[])
const isLoading = ref(true)

onMounted(async () => {
  const res = await axios.get(import.meta.env.VITE_SERVER_URL + 'auctions/all', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })
  auctions.value = res.data.content as AuctionsInterface[]
  isLoading.value = false
})
</script>

<template>
  <main>
    <admin-bar></admin-bar>
    <div class="rhs text-[black] px-[48px] py-[24px] w-full overflow-y-scroll scrollbar-none">
      <loading-bar v-if="isLoading" />
      <div v-else>
        <div class="search p-[20px] flex align-center  justify-end w-full gap-[8px]">
          <input type="text" placeholder="Search Auction">
          <button class="border-[1px] p-[2px]">Search</button>
        </div>
        <div class="rounded-[12px]">
          <div class="flex justify-space-between align-center">
            <div class="text-[24px] my-4 rounded-4">Auctions</div>
            <div @click="$router.push('auction/create')" class="font-bold bg-[black] text-[white] py-2 px-4 cursor-pointer rounded-[10px]">+ New Auction</div>
          </div>
          <div>
          </div>
          <div class="grid grid-cols-3 gap-[20px]">
            <div v-for="auction in auctions" :key="auction.id">
              <auction-item class="bg-[#eff]" :auction-data="auction" />
            </div>
          </div>
        </div>
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
  .rhs {
    background: white;
    border-radius: 12px;
  }
}

input {
  padding: 12px 16px;
  border-radius: 12px;
  border: 1px solid black;
  :focus {
    border-color: cyan;
  }
}

button {
  border: 1px solid black;
  padding: 12px 16px;
  border-radius: 12px;
  background: black;
  color: white;
}
</style>

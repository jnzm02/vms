<script lang="ts" setup>
import {AuctionsInterface} from "@/interfaces/auctions";

const props = defineProps<{
  auctionData: AuctionsInterface
}>()

</script>

<template>
  <div @click="$router.push(`auction/${auctionData.id}`)" class="flex rounded-[20px] px-[24px] w-full justify-center align-center p-2 cursor-pointer">
    <div class="flex flex-col gap-[4px]">
      <img src="@/assets/car.png" class='bg-transparent' alt="car">
      <div>Model: {{ auctionData.vehicle.model }}</div>
      <div>License Plate:
        <span class="rounded-[12px] flex align-center gap-2">
          <img src="@/assets/flagKZ.svg" class="h-4 rounded-[2px]" alt="KZ">{{ auctionData.vehicle.licencePlate }}
        </span>
      </div>
      <div>Year: {{ auctionData.vehicle.year }}</div>
      <div>BID: {{ auctionData.currentBid }}$</div>
<!--      <button class="bg-transparent flex justify-end"><img src="@/assets/arrow-right.svg" class="w-6 h-6 bg-transparent" alt="right" @click="$router.push(`auction/${auctionData.id}`)"></button>-->
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

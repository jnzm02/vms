<script lang="ts" setup>
import adminBar from '@/components/adminBar.vue'
</script>

<template>
  <main>
    <admin-bar></admin-bar>
    <div class="rhs text-[black]">
      <div class="rounded-[12px] mt-[100px]">
        <div class="flex justify-space-between align-center">
          <div class="text-[24px] my-4 rounded-4">Active Routes</div>
        </div>
        <div class="flex justify-space-between align-center">
          <div class="text-[24px] my-4 rounded-4">All Routes</div>
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
}

.rhs {
  background: white;
  border-radius: 12px;
}
</style>

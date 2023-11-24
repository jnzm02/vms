<script lang="ts" setup>
import adminBar from '@/components/adminBar.vue'
</script>

<template>
  <main>
    <admin-bar></admin-bar>
    <div class="rhs text-[black] px-[48px] py-[24px] w-full">auction</div>
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

</style>

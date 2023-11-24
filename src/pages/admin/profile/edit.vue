<script lang="ts" setup>
import adminBar from '@/components/adminBar.vue'

const user = {
  username: "Crazy Dog",

}
</script>

<template>
  <main>
    <admin-bar></admin-bar>
    <div class="rhs text-[black] px-[48px] py-[24px] w-full overflow-y-scroll scrollbar-none">
      <div class="w-full border-[1px] rounded-[12px] h-full p-2 grid grid-cols-3">
        <div class="border-[1px] rounded-[12px] p-2">
          <div>
            <div class="font-bold text-[24px]">Contact Info:</div>
            <div class="grid grid-cols-2">
              <img src="@/assets/profile.svg" alt="profile" class="w-[120px]">
              <div>
                <div>Aidyn Zhumaqadyr</div>
                <div>Aidyn@gmail.com</div>
              </div>
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
}

.rhs {
  background: white;
  border-radius: 12px;
}
</style>

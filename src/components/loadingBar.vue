<template>
  <div class="w-full h-full flex justify-center align-center">
    <div class="lds-dual-ring"></div>
  </div>
</template>

<style lang="scss" scoped>

.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 100px;
  height: 100px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #333 !important;
  border-color: #333 transparent #333 transparent !important;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

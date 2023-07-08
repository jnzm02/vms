<template>
  <v-card width="90vw" class="bg-brown">
    <v-card-title>
      <h1 class="text-[32px]">{{ event.title }}</h1>
    </v-card-title>
    <v-card-subtitle>
      <h2 class="text-[24px]">{{ event.date }}</h2>
      <h2 class="text-[24px]">{{ event.time }}</h2>
      <h2 class="text-[24px]">{{ event.location }}</h2>
    </v-card-subtitle>
    <v-card-text>
      <p class="text-[24px]">{{ event.description }}</p>
    </v-card-text>
  </v-card>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps({
  event: {
    type: Object,
    required: true
  }
});
</script>

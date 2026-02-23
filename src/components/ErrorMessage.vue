<script setup lang="ts">
defineProps<{
  message: string
}>()
</script>

<template>
  <p v-if="message" class="error">
    {{ message }}
  </p>
</template>

<style scoped>
.error {
  color: red;
  font-size: 0.85rem;
  margin-top: 4px;
}
</style>

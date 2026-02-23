<script setup lang="ts">
const props = defineProps<{
  modelValue: string
  label: string
  options: string[]
  error?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>

<template>
  <div class="form-group">
    <label>{{ label }}</label>

    <div
      v-for="option in options"
      :key="option"
    >
      <input
        type="radio"
        :value="option"
        :checked="modelValue === option"
        @change="emit('update:modelValue', option)"
      />
      {{ option }}
    </div>

    <p v-if="error" class="error">
      {{ error }}
    </p>
  </div>
</template>

<style scoped>
.error {
  color: red;
  font-size: 0.85rem;
}
</style>

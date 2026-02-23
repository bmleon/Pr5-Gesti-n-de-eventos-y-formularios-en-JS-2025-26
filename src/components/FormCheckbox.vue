<script setup lang="ts">
const props = defineProps<{
  modelValue: string[]
  label: string
  options: string[]
  error?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string[]): void
}>()

function toggleOption(option: string) {
  const newValue = [...props.modelValue]
  const index = newValue.indexOf(option)

  if (index > -1) {
    newValue.splice(index, 1)
  } else {
    newValue.push(option)
  }

  emit('update:modelValue', newValue)
}
</script>

<template>
  <div class="form-group">
    <label>{{ label }}</label>

    <div
      v-for="option in options"
      :key="option"
    >
      <input
        type="checkbox"
        :checked="modelValue.includes(option)"
        @change="toggleOption(option)"
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

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  modelValue: string | number
  label: string
  type?: string
  error?: string
  min?: string | number
  max?: string | number
  step?: number
  name?: string

}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
  (e: 'blur'): void
}>()

const inputClass = computed(() =>
  props.error ? 'input error-border' : 'input valid-border'

)
</script>

<template>
  <div class="form-group">
    <label>{{ label }}</label>

    <input
      :type="type || 'text'"
      :value="modelValue"
      :min="min"
      :max="max"
      :step="step"
      :class="inputClass"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      @blur="emit('blur')"
      :name="name"
    />

    <slot></slot>
  </div>
</template>

<style scoped>
.form-group {
  margin-bottom: 1rem;
}

.input {
  padding: 8px;
  width: 100%;
}

.error-border {
  border: 2px solid red;
}

.valid-border {
  border: 2px solid green;
}
</style>

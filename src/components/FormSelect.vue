<script setup lang="ts">
const props = defineProps<{
  modelValue: string
  label: string
  options: string[]
  error?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'blur'): void
}>()
</script>

<template>
  <div class="form-group">
    <label>{{ label }}</label>

    <select
      :value="modelValue"
      @change="emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
      @blur="emit('blur')"
    >
      <option disabled value="">Seleccione una opción</option>
      <option
        v-for="option in options"
        :key="option"
        :value="option"
      >
        {{ option }}
      </option>
    </select>

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

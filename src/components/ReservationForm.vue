<script setup lang="ts">
import { computed } from 'vue'
import { ref, watch } from 'vue'
import { useFormState } from '../composables/useFormState'
import { useValidation } from '../composables/useValidation'
import { useDebounce } from '../composables/useDebounce'


import FormInput from './FormInput.vue'
import FormSelect from './FormSelect.vue'
import FormCheckbox from './FormCheckbox.vue'
import FormRadio from './FormRadio.vue'
import ErrorMessage from './ErrorMessage.vue'

const { form, resetForm } = useFormState()
const { errors, validateField } = useValidation()
const commentLength = computed(() => form.comments.length)
const maxCharacters = 500

const eventOptions = [
  'Boda',
  'Cumpleaños',
  'Corporativo',
  'Conferencia',
  'Otro'
]

const cateringOptions = [
  'Menú vegetariano',
  'Menú vegano',
  'Barra libre',
  'Catering infantil',
  'Servicio de café'
]

const budgetOptions = [
  'Económico (< 2000€)',
  'Estándar (2000€ - 5000€)',
  'Premium (5000€ - 10000€)',
  'Luxury (> 10000€)'
]

const isFormValid = computed(() =>
  // Aseguramos que errors no sea null/undefined y comprobamos sus valores
  errors && Object.values(errors).every(e => !e)
)

const { debounce } = useDebounce()

watch(
  form,
  (newValue) => {
    Object.keys(newValue).forEach((key) => {
      debounce(() => {
        validateField(key, newValue[key as keyof typeof newValue])
      }, 500)
    })
  },
  { deep: true }
)

const darkMode = ref(false)

watch(darkMode, (value) => {
  document.documentElement.classList.toggle('dark', value)
})

const progress = computed(() => {
  const totalFields = Object.keys(form).length

  const validFields = Object.keys(errors).filter(
    (key) => errors[key] === '' && form[key as keyof typeof form]
  ).length

  return Math.round((validFields / totalFields) * 100)
})

function scrollToFirstError() {
  const firstErrorKey = Object.keys(errors).find(
    (key) => errors[key] !== ''
  )

  if (!firstErrorKey) return

  const element = document.querySelector(
    `[name="${firstErrorKey}"]`
  )

  element?.scrollIntoView({ behavior: 'smooth' })
}

function submitForm() {
  Object.keys(form).forEach((key) => {
    validateField(key, form[key as keyof typeof form])
  })

  if (!isFormValid.value) {
    scrollToFirstError()
    return
  }

  alert('Reserva enviada correctamente')
  resetForm()
}
</script>

<template>
  <div>
  <label>Progreso: {{ progress }}%</label>
  <progress :value="progress" max="100"></progress>
  </div>

  <form @submit.prevent="submitForm">

    <h2>Datos Personales</h2>

    <FormInput
      v-model="form.name"
      label="Nombre completo"
      :error="errors.name || ''"
      @blur="validateField('name', form.name)"
      :name="'name'"
    />
    <ErrorMessage :message="errors.name || ''" />

    <FormInput
      v-model="form.nif"
      label="NIF/NIE"
      :error="errors.nif || ''"
      @blur="validateField('nif', form.nif)"
      :name="'nif'"
    />
    <ErrorMessage :message="errors.nif || ''" />

    <FormInput
      v-model="form.phone"
      label="Teléfono"
      type="tel"
      :error="errors.phone || ''"
      @blur="validateField('phone', form.phone)"
      :name="'phone'"
    />
    <ErrorMessage :message="errors.phone || ''" />

    <FormInput
      v-model="form.email"
      label="Email"
      type="email"
      :error="errors.email || ''"
      @blur="validateField('email', form.email)"
      :name="'name'"
    />
    <ErrorMessage :message="errors.email || ''" />

    <h2>Detalles del Evento</h2>

    <FormSelect
      v-model="form.eventType"
      label="Tipo de evento"
      :options="eventOptions"
      :error="errors.eventType || ''"
      @blur="validateField('eventType', form.eventType)"
    />
    <ErrorMessage :message="errors.eventType || ''" />

    <FormInput
      v-model="form.eventDate"
      label="Fecha del evento"
      type="date"
      :error="errors.eventDate || ''"
      @blur="validateField('eventDate', form.eventDate)"
    />
    <ErrorMessage :message="errors.eventDate || ''" />

    <FormInput
      v-model="form.eventTime"
      label="Hora de inicio"
      type="time"
      :error="errors.eventTime || ''"
      @blur="validateField('eventTime', form.eventTime)"
      :name="'name'"
    />
    <ErrorMessage :message="errors.eventTime || ''" />

    <div>
      <label>Número de asistentes: {{ form.attendees }}</label>

      <FormInput
        v-model="form.attendees"
        label="Número de asistentes"
        type="number"
        :min="10"
        :max="500"
        :error="errors.attendees || ''"
        @blur="validateField('attendees', form.attendees)"
        :name="'name'"
      />

      <input
        type="range"
        v-model.number="form.attendees"
        min="10"
        max="500"
      />

      <ErrorMessage :message="errors.attendees || ''" />
    </div>

    <h2>Servicios Adicionales</h2>

    <FormCheckbox
      v-model="form.catering"
      label="Opciones de catering"
      :options="cateringOptions"
      :error="errors.catering || ''"
    />
    <ErrorMessage :message="errors.catering || ''" />

    <FormRadio
      v-model="form.budget"
      label="Presupuesto aproximado"
      :options="budgetOptions"
      :error="errors.budget || ''"
    />
    <ErrorMessage :message="errors.budget || ''" />

    <div>
      <label>Comentarios adicionales</label>
      <textarea
        v-model="form.comments"
        maxlength="500"
        @blur="validateField('comments', form.comments)"
      ></textarea>
      <ErrorMessage :message="errors.comments || ''" />
    </div>

    <div>
      <input
        type="checkbox"
        v-model="form.termsAccepted"
        @change="validateField('termsAccepted', form.termsAccepted)"
      />
      Acepto los términos y condiciones
      <ErrorMessage :message="errors.termsAccepted || ''" />
    </div>

    <button type="submit" :disabled="!isFormValid">
      Enviar
    </button>

    <button type="button" @click="resetForm">
      Limpiar
    </button>

  </form>
</template>

<style>
.character-counter {
  font-size: 0.8rem;
  text-align: right;
  color: #666;
}
</style>

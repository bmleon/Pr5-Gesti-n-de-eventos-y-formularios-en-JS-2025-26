import { reactive, watch } from 'vue'
import type { Reservation } from '../types/reservation'

export function useFormState() {
  const form = reactive<Reservation>({
    name: '',
    nif: '',
    phone: '',
    email: '',
    eventType: '',
    eventDate: '',
    eventTime: '',
    attendees: 10,
    catering: [],
    budget: '',
    comments: '',
    termsAccepted: false
  })

  // Cargar borrador si existe
  const saved = localStorage.getItem('reservationDraft')
  if (saved) {
    Object.assign(form, JSON.parse(saved))
  }

  // Guardar automáticamente
  watch(
    form,
    (newValue) => {
      localStorage.setItem('reservationDraft', JSON.stringify(newValue))
    },
    { deep: true }
  )

  const resetForm = () => {
    localStorage.removeItem('reservationDraft')
    Object.assign(form, {
      name: '',
      nif: '',
      phone: '',
      email: '',
      eventType: '',
      eventDate: '',
      eventTime: '',
      attendees: 10,
      catering: [],
      budget: '',
      comments: '',
      termsAccepted: false
    })
  }

  return { form, resetForm }
}

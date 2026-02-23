import { reactive } from 'vue'
import {
  validateName,
  validateNif,
  validatePhone,
  validateEmail,
  validateComments,
  validateEventDate,
  validateEventTime,
  validateAttendees,
  validateCatering,
  validateBudget,
  validateTerms
} from '../utils/validators'

export function useValidation() {

  const errors = reactive<Record<string, string>>({
    name: '',
    nif: '',
    phone: '',
    email: '',
    eventDate: '',
    eventTime: '',
    attendees: '',
    catering: '',
    budget: '',
    termsAccepted: '',
    comments: ''
  })

  function validateField(field: string, value: any) {
    switch (field) {

      case 'name':
        errors.name = validateName(value) ? '' : 'Nombre inválido'
        break

      case 'nif':
        errors.nif = validateNif(value) ? '' : 'NIF inválido'
        break

      case 'phone':
        errors.phone = validatePhone(value) ? '' : 'Teléfono inválido'
        break

      case 'email':
        errors.email = validateEmail(value) ? '' : 'Email inválido'
        break

      case 'eventDate':
        errors.eventDate = validateEventDate(value)
          ? ''
          : 'Fecha debe ser mínimo 7 días y máximo 1 año'
        break

      case 'eventTime':
        errors.eventTime = validateEventTime(value)
          ? ''
          : 'Hora entre 08:00 y 23:00'
        break

      case 'attendees':
        errors.attendees = validateAttendees(Number(value))
          ? ''
          : 'Entre 10 y 500 asistentes'
        break

      case 'catering':
        errors.catering = validateCatering(value)
          ? ''
          : 'Seleccione al menos una opción'
        break

      case 'budget':
        errors.budget = validateBudget(value)
          ? ''
          : 'Seleccione un presupuesto'
        break

      case 'termsAccepted':
        errors.termsAccepted = validateTerms(value)
          ? ''
          : 'Debe aceptar los términos'
        break

      case 'comments':
        errors.comments = validateComments(value)
          ? ''
          : 'Máx 500 caracteres y no solo espacios'
        break
    }
  }

  return { errors, validateField }
}

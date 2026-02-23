import {
  nameRegex,
  nifRegex,
  phoneRegex,
  emailRegex,
  notOnlySpacesRegex
} from './regex'

export function validateName(value: string): boolean {
  return nameRegex.test(value)
}

export function validateNif(value: string): boolean {
  if (!nifRegex.test(value)) return false

  const letters = 'TRWAGMYFPDXBNJZSQVHLCKE'
  const number = value.substring(0, 8)
  const letter = value.charAt(8)

  return letters[Number(number) % 23] === letter
}

export function validatePhone(value: string): boolean {
  return phoneRegex.test(value)
}

export function validateEmail(value: string): boolean {
  return emailRegex.test(value)
}

export function validateComments(value: string): boolean {
  if (!value) return true
  return value.length <= 500 && notOnlySpacesRegex.test(value)
}

export function validateEventDate(value: string): boolean {
  if (!value) return false

  const selectedDate = new Date(value)
  const today = new Date()

  const minDate = new Date()
  minDate.setDate(today.getDate() + 7)

  const maxDate = new Date()
  maxDate.setFullYear(today.getFullYear() + 1)

  return selectedDate >= minDate && selectedDate <= maxDate
}

export function validateEventTime(value: string): boolean {
  if (!value) return false

  return value >= '08:00' && value <= '23:00'
}

export function validateAttendees(value: number): boolean {
  return Number.isInteger(value) && value >= 10 && value <= 500
}

export function validateCatering(value: string[]): boolean {
  return value.length > 0
}

export function validateBudget(value: string): boolean {
  return value !== ''
}

export function validateTerms(value: boolean): boolean {
  return value === true
}

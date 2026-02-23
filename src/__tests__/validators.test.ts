import { describe, it, expect } from 'vitest'
import {
  validateName,
  validateEventDate,
  validateEventTime,
  validateAttendees
} from '../utils/validators'

describe('validateName', () => {
  it('accepts valid name', () => {
    expect(validateName('Juan Pérez')).toBe(true)
  })

  it('rejects invalid name', () => {
    expect(validateName('123')).toBe(false)
  })
})

describe('validateEventTime', () => {
  it('accepts valid hour', () => {
    expect(validateEventTime('10:00')).toBe(true)
  })

  it('rejects invalid hour', () => {
    expect(validateEventTime('02:00')).toBe(false)
  })
})

describe('validateAttendees', () => {
  it('accepts valid number', () => {
    expect(validateAttendees(50)).toBe(true)
  })

  it('rejects invalid number', () => {
    expect(validateAttendees(5)).toBe(false)
  })
})

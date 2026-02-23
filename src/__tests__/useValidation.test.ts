import { describe, it, expect } from 'vitest'
import { useValidation } from '../composables/useValidation'

describe('useValidation', () => {
  it('sets error when name invalid', () => {
    const { errors, validateField } = useValidation()

    validateField('name', '123')

    expect(errors.name).not.toBe('')
  })
})

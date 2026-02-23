import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import ReservationForm from '../components/ReservationForm.vue'
import { nextTick } from 'vue'

describe('ReservationForm Integration', () => {

  it('fills valid form and enables submit', async () => {
    const wrapper = mount(ReservationForm)

    const inputs = wrapper.findAll('input')

    // AÑADE EL SIGNO DE EXCLAMACIÓN (!) AQUÍ:
    await inputs[0]!.setValue('Juan Pérez')   // name
    await inputs[1]!.setValue('12345678Z')    // nif
    await inputs[2]!.setValue('612345678')    // phone
    await inputs[3]!.setValue('test@test.com') // email

    // El botón puede ser undefined si no lo encuentra, usa findComponent o verifica existencia
    const submitBtn = wrapper.find('button[type="submit"]')
    expect(submitBtn.attributes('disabled')).toBeUndefined()
  })

  it('shows error if name invalid', async () => {
  const wrapper = mount(ReservationForm)

  const nameInput = wrapper.find('input')

  await nameInput.setValue('123')
  await nameInput.trigger('blur')   // 👈 IMPORTANTE

  await new Promise(resolve => setTimeout(resolve, 600))
  await nextTick()

  expect(wrapper.html()).toContain('Nombre inválido')
})
})

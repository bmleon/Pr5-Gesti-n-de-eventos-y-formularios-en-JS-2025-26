import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import FormInput from '../components/FormInput.vue'

describe('FormInput.vue', () => {
  it('renders label correctly', () => {
    const wrapper = mount(FormInput, {
      props: {
        modelValue: '',
        label: 'Nombre'
      }
    })

    expect(wrapper.text()).toContain('Nombre')
  })

  it('emits update:modelValue on input', async () => {
    const wrapper = mount(FormInput, {
      props: {
        modelValue: '',
        label: 'Nombre'
      }
    })

    await wrapper.find('input').setValue('Juan')

    expect(wrapper.emitted()['update:modelValue']).toBeTruthy()
  })
})

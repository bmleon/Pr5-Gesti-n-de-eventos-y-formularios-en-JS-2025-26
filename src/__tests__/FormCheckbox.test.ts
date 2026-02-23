import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import FormCheckbox from '../components/FormCheckbox.vue'

describe('FormCheckbox.vue', () => {
  it('adds option when clicked', async () => {
    const wrapper = mount(FormCheckbox, {
      props: {
        modelValue: [],
        label: 'Catering',
        options: ['Opción 1']
      }
    })

    await wrapper.find('input').setValue(true)

    expect(wrapper.emitted()['update:modelValue']).toBeTruthy()
  })
})

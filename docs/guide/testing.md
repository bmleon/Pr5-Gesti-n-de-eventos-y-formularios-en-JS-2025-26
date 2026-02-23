# Guía de Testing

El proyecto utiliza una suite de pruebas moderna y rápida compuesta por:
- **[Vitest](https://vitest.dev/):** Framework de pruebas unitarias (sustituto rápido de Jest).
- **[Vue Test Utils](https://test-utils.vuejs.org/):** Librería oficial para montar e interactuar con componentes Vue.



## 1. Ejecutar Tests

Para lanzar la batería completa de pruebas, ejecuta el siguiente comando en tu terminal:

```bash
npm run test:unit
Esto buscará todos los archivos terminados en .spec.ts o .test.ts dentro de la carpeta src/__tests__/ y ejecutará las validaciones.

2. Escribir Tests
A continuación se muestran ejemplos de cómo redactar cada tipo de test requerido en el proyecto.

A. Tests Unitarios (Lógica Pura)
Estos tests verifican funciones individuales, como las expresiones regulares, sin montar ningún componente de Vue.

Archivo: src/__tests__/validators.spec.ts

TypeScript

import { describe, it, expect } from 'vitest'
import { isValidEmail } from '../utils/validators'

describe('Validators: Email', () => {
  it('debe aceptar un email válido', () => {
    expect(isValidEmail('test@example.com')).toBe(true)
  })

  it('debe rechazar un email sin arroba', () => {
    expect(isValidEmail('testexample.com')).toBe(false)
  })
})
B. Tests de Componentes (UI Aislada)
Verifican que un componente individual (FormInput, ErrorMessage) se renderiza correctamente y emite eventos.

Archivo: src/__tests__/FormInput.spec.ts

TypeScript

import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import FormInput from '../components/FormInput.vue'

describe('FormInput Component', () => {
  it('renderiza la etiqueta correctamente', () => {
    const wrapper = mount(FormInput, {
      props: {
        label: 'Nombre de usuario',
        modelValue: '',
        error: ''
      }
    })
    
    expect(wrapper.find('label').text()).toBe('Nombre de usuario')
  })

  it('muestra el borde rojo cuando hay error', () => {
    const wrapper = mount(FormInput, {
      props: {
        label: 'Test',
        modelValue: '',
        error: 'Campo obligatorio' // Simulamos error
      }
    })
    
    // Verificamos que el input tenga la clase o estilo de error
    expect(wrapper.find('input').classes()).toContain('border-red-500')
  })
})
C. Tests de Integración (Formulario Completo)
Simulan el flujo de un usuario real rellenando el formulario ReservationForm.

Archivo: src/__tests__/ReservationForm.integration.spec.ts

TypeScript

import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import ReservationForm from '../components/ReservationForm.vue'

describe('ReservationForm Integration', () => {
  it('habilita el botón de enviar cuando el formulario es válido', async () => {
    const wrapper = mount(ReservationForm)

    // 1. Rellenar campos
    await wrapper.find('input[type="text"]').setValue('Juan Pérez')
    await wrapper.find('input[type="email"]').setValue('juan@test.com')
    
    // 2. Verificar que el botón ya no está disabled
    // Nota: Dependerá de tu lógica de validación
    const btn = wrapper.find('button[type="submit"]')
    expect(btn.attributes()).not.toHaveProperty('disabled')
  })
})
3. Mejores Prácticas
Nombres descriptivos: Usa it('debería hacer X...') para que el reporte de errores sea legible.

Async/Await: Vue actualiza el DOM de forma asíncrona. Usa siempre await cuando interactúes con inputs (setValue, trigger).

Selectores robustos: Intenta buscar elementos por atributos únicos como name="email" o data-testid en lugar de clases CSS genéricas.
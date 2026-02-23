# Arquitectura del Proyecto

El proyecto sigue una arquitectura **basada en componentes** y utiliza la **Composición API (`<script setup>`)** de Vue 3 para separar la lógica de negocio de la interfaz de usuario.

## Estructura de Directorios

La organización del código sigue el patrón estándar de Vue 3 con Vite, separando responsabilidades en carpetas específicas:

```text
src/
├── components/          # Elementos de UI reutilizables (Stateless)
│   ├── FormInput.vue    # Input de texto genérico
│   ├── FormSelect.vue   # Selector desplegable
│   ├── FormCheckbox.vue # Checkbox individual o grupo
│   ├── FormRadio.vue    # Grupo de botones de radio
│   ├── ErrorMessage.vue # Componente visual para errores
│   └── ReservationForm.vue # Componente inteligente (Stateful)
│
├── composables/         # Lógica de negocio reactiva (Hooks)
│   ├── useValidation.ts # Sistema de validación y errores
│   ├── useFormState.ts  # Gestión del estado del formulario
│   └── useDebounce.ts   # Utilidad para retrasar validaciones
│
├── utils/               # Funciones puras y constantes
│   └── regex.ts         # Expresiones regulares (NIF, Email, etc.)
│
├── types/               # Definiciones de TypeScript
│   └── index.ts         # Interfaces (IFormState, IValidationErrors)
│
├── __tests__/           # Pruebas automatizadas
│   └── integration/     # Tests de flujo completo
│
├── App.vue              # Componente raíz (Layout y Tema)
└── main.ts              # Punto de entrada de la aplicación
Jerarquía de Componentes
La aplicación funciona mediante un componente "padre" inteligente que orquesta a varios componentes "hijos" tontos (presentacionales).

App.vue: Contenedor principal. Gestiona el tema (Oscuro/Claro) y el layout global.

ReservationForm.vue: Es el cerebro del formulario.

Importa los composables (useFormState, useValidation).

Mantiene el estado de los datos.

Ejecuta la función de envío (submit).

Componentes UI (FormInput, etc.):

Reciben datos vía props (modelValue, label, error).

Emiten cambios vía events (update:modelValue, blur).

No tienen lógica de negocio, solo visualización.

Flujo de Datos y Validación
El flujo de datos es unidireccional (One-Way Data Flow) complementado con v-model para la entrada de datos:

Entrada: El usuario escribe en un FormInput.

Evento: El componente emite update:modelValue.

Estado: ReservationForm actualiza su estado reactivo (form).

Validación (Debounce):

El watcher en ReservationForm detecta el cambio.

Espera 500ms (Debounce).

Llama a validateField del composable useValidation.

Feedback: Si hay error, se actualiza el objeto errors y se pasa como prop de vuelta al FormInput y ErrorMessage para mostrarlo en rojo.

Tecnologías Clave
Vue 3: Framework progresivo (Composition API).

TypeScript: Para tipado estático y robustez.

Vite: Bundler de nueva generación (rápido y ligero).

Vitest: Framework de pruebas unitarias.
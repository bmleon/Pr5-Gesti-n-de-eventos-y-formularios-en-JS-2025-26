<template><div><h1 id="arquitectura-del-proyecto" tabindex="-1"><a class="header-anchor" href="#arquitectura-del-proyecto"><span>Arquitectura del Proyecto</span></a></h1>
<p>El proyecto sigue una arquitectura <strong>basada en componentes</strong> y utiliza la <strong>Composición API (<code v-pre>&lt;script setup&gt;</code>)</strong> de Vue 3 para separar la lógica de negocio de la interfaz de usuario.</p>
<h2 id="estructura-de-directorios" tabindex="-1"><a class="header-anchor" href="#estructura-de-directorios"><span>Estructura de Directorios</span></a></h2>
<p>La organización del código sigue el patrón estándar de Vue 3 con Vite, separando responsabilidades en carpetas específicas:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">src/</span>
<span class="line">├── components/          # Elementos de UI reutilizables (Stateless)</span>
<span class="line">│   ├── FormInput.vue    # Input de texto genérico</span>
<span class="line">│   ├── FormSelect.vue   # Selector desplegable</span>
<span class="line">│   ├── FormCheckbox.vue # Checkbox individual o grupo</span>
<span class="line">│   ├── FormRadio.vue    # Grupo de botones de radio</span>
<span class="line">│   ├── ErrorMessage.vue # Componente visual para errores</span>
<span class="line">│   └── ReservationForm.vue # Componente inteligente (Stateful)</span>
<span class="line">│</span>
<span class="line">├── composables/         # Lógica de negocio reactiva (Hooks)</span>
<span class="line">│   ├── useValidation.ts # Sistema de validación y errores</span>
<span class="line">│   ├── useFormState.ts  # Gestión del estado del formulario</span>
<span class="line">│   └── useDebounce.ts   # Utilidad para retrasar validaciones</span>
<span class="line">│</span>
<span class="line">├── utils/               # Funciones puras y constantes</span>
<span class="line">│   └── regex.ts         # Expresiones regulares (NIF, Email, etc.)</span>
<span class="line">│</span>
<span class="line">├── types/               # Definiciones de TypeScript</span>
<span class="line">│   └── index.ts         # Interfaces (IFormState, IValidationErrors)</span>
<span class="line">│</span>
<span class="line">├── __tests__/           # Pruebas automatizadas</span>
<span class="line">│   └── integration/     # Tests de flujo completo</span>
<span class="line">│</span>
<span class="line">├── App.vue              # Componente raíz (Layout y Tema)</span>
<span class="line">└── main.ts              # Punto de entrada de la aplicación</span>
<span class="line">Jerarquía de Componentes</span>
<span class="line">La aplicación funciona mediante un componente "padre" inteligente que orquesta a varios componentes "hijos" tontos (presentacionales).</span>
<span class="line"></span>
<span class="line">App.vue: Contenedor principal. Gestiona el tema (Oscuro/Claro) y el layout global.</span>
<span class="line"></span>
<span class="line">ReservationForm.vue: Es el cerebro del formulario.</span>
<span class="line"></span>
<span class="line">Importa los composables (useFormState, useValidation).</span>
<span class="line"></span>
<span class="line">Mantiene el estado de los datos.</span>
<span class="line"></span>
<span class="line">Ejecuta la función de envío (submit).</span>
<span class="line"></span>
<span class="line">Componentes UI (FormInput, etc.):</span>
<span class="line"></span>
<span class="line">Reciben datos vía props (modelValue, label, error).</span>
<span class="line"></span>
<span class="line">Emiten cambios vía events (update:modelValue, blur).</span>
<span class="line"></span>
<span class="line">No tienen lógica de negocio, solo visualización.</span>
<span class="line"></span>
<span class="line">Flujo de Datos y Validación</span>
<span class="line">El flujo de datos es unidireccional (One-Way Data Flow) complementado con v-model para la entrada de datos:</span>
<span class="line"></span>
<span class="line">Entrada: El usuario escribe en un FormInput.</span>
<span class="line"></span>
<span class="line">Evento: El componente emite update:modelValue.</span>
<span class="line"></span>
<span class="line">Estado: ReservationForm actualiza su estado reactivo (form).</span>
<span class="line"></span>
<span class="line">Validación (Debounce):</span>
<span class="line"></span>
<span class="line">El watcher en ReservationForm detecta el cambio.</span>
<span class="line"></span>
<span class="line">Espera 500ms (Debounce).</span>
<span class="line"></span>
<span class="line">Llama a validateField del composable useValidation.</span>
<span class="line"></span>
<span class="line">Feedback: Si hay error, se actualiza el objeto errors y se pasa como prop de vuelta al FormInput y ErrorMessage para mostrarlo en rojo.</span>
<span class="line"></span>
<span class="line">Tecnologías Clave</span>
<span class="line">Vue 3: Framework progresivo (Composition API).</span>
<span class="line"></span>
<span class="line">TypeScript: Para tipado estático y robustez.</span>
<span class="line"></span>
<span class="line">Vite: Bundler de nueva generación (rápido y ligero).</span>
<span class="line"></span>
<span class="line">Vitest: Framework de pruebas unitarias.</span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>



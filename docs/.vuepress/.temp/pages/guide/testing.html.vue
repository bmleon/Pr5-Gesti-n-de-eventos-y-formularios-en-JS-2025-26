<template><div><h1 id="guia-de-testing" tabindex="-1"><a class="header-anchor" href="#guia-de-testing"><span>Guía de Testing</span></a></h1>
<p>El proyecto utiliza una suite de pruebas moderna y rápida compuesta por:</p>
<ul>
<li><strong><a href="https://vitest.dev/" target="_blank" rel="noopener noreferrer">Vitest</a>:</strong> Framework de pruebas unitarias (sustituto rápido de Jest).</li>
<li><strong><a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener noreferrer">Vue Test Utils</a>:</strong> Librería oficial para montar e interactuar con componentes Vue.</li>
</ul>
<h2 id="_1-ejecutar-tests" tabindex="-1"><a class="header-anchor" href="#_1-ejecutar-tests"><span>1. Ejecutar Tests</span></a></h2>
<p>Para lanzar la batería completa de pruebas, ejecuta el siguiente comando en tu terminal:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">npm</span> run test:unit</span>
<span class="line">Esto buscará todos los archivos terminados en .spec.ts o .test.ts dentro de la carpeta src/__tests__/ y ejecutará las validaciones.</span>
<span class="line"></span>
<span class="line"><span class="token number">2</span>. Escribir Tests</span>
<span class="line">A continuación se muestran ejemplos de cómo redactar cada tipo de <span class="token builtin class-name">test</span> requerido en el proyecto.</span>
<span class="line"></span>
<span class="line">A. Tests Unitarios <span class="token punctuation">(</span>Lógica Pura<span class="token punctuation">)</span></span>
<span class="line">Estos tests verifican funciones individuales, como las expresiones regulares, sin montar ningún componente de Vue.</span>
<span class="line"></span>
<span class="line">Archivo: src/__tests__/validators.spec.ts</span>
<span class="line"></span>
<span class="line">TypeScript</span>
<span class="line"></span>
<span class="line"><span class="token function">import</span> <span class="token punctuation">{</span> describe, it, <span class="token function">expect</span> <span class="token punctuation">}</span> from <span class="token string">'vitest'</span></span>
<span class="line"><span class="token function">import</span> <span class="token punctuation">{</span> isValidEmail <span class="token punctuation">}</span> from <span class="token string">'../utils/validators'</span></span>
<span class="line"></span>
<span class="line">describe<span class="token punctuation">(</span><span class="token string">'Validators: Email'</span>, <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span></span>
<span class="line">  it<span class="token punctuation">(</span><span class="token string">'debe aceptar un email válido'</span>, <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span></span>
<span class="line">    expect<span class="token punctuation">(</span>isValidEmail<span class="token punctuation">(</span><span class="token string">'test@example.com'</span><span class="token punctuation">))</span>.toBe<span class="token punctuation">(</span>true<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  it<span class="token punctuation">(</span><span class="token string">'debe rechazar un email sin arroba'</span>, <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span></span>
<span class="line">    expect<span class="token punctuation">(</span>isValidEmail<span class="token punctuation">(</span><span class="token string">'testexample.com'</span><span class="token punctuation">))</span>.toBe<span class="token punctuation">(</span>false<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">B. Tests de Componentes <span class="token punctuation">(</span>UI Aislada<span class="token punctuation">)</span></span>
<span class="line">Verifican que un componente individual <span class="token punctuation">(</span>FormInput, ErrorMessage<span class="token punctuation">)</span> se renderiza correctamente y emite eventos.</span>
<span class="line"></span>
<span class="line">Archivo: src/__tests__/FormInput.spec.ts</span>
<span class="line"></span>
<span class="line">TypeScript</span>
<span class="line"></span>
<span class="line"><span class="token function">import</span> <span class="token punctuation">{</span> <span class="token function">mount</span> <span class="token punctuation">}</span> from <span class="token string">'@vue/test-utils'</span></span>
<span class="line"><span class="token function">import</span> <span class="token punctuation">{</span> describe, it, <span class="token function">expect</span> <span class="token punctuation">}</span> from <span class="token string">'vitest'</span></span>
<span class="line"><span class="token function">import</span> FormInput from <span class="token string">'../components/FormInput.vue'</span></span>
<span class="line"></span>
<span class="line">describe<span class="token punctuation">(</span><span class="token string">'FormInput Component'</span>, <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span></span>
<span class="line">  it<span class="token punctuation">(</span><span class="token string">'renderiza la etiqueta correctamente'</span>, <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span></span>
<span class="line">    const wrapper <span class="token operator">=</span> mount<span class="token punctuation">(</span>FormInput, <span class="token punctuation">{</span></span>
<span class="line">      props: <span class="token punctuation">{</span></span>
<span class="line">        label: <span class="token string">'Nombre de usuario'</span>,</span>
<span class="line">        modelValue: <span class="token string">''</span>,</span>
<span class="line">        error: <span class="token string">''</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    </span>
<span class="line">    expect<span class="token punctuation">(</span>wrapper.find<span class="token punctuation">(</span><span class="token string">'label'</span><span class="token punctuation">)</span>.text<span class="token punctuation">(</span><span class="token punctuation">))</span>.toBe<span class="token punctuation">(</span><span class="token string">'Nombre de usuario'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  it<span class="token punctuation">(</span><span class="token string">'muestra el borde rojo cuando hay error'</span>, <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span></span>
<span class="line">    const wrapper <span class="token operator">=</span> mount<span class="token punctuation">(</span>FormInput, <span class="token punctuation">{</span></span>
<span class="line">      props: <span class="token punctuation">{</span></span>
<span class="line">        label: <span class="token string">'Test'</span>,</span>
<span class="line">        modelValue: <span class="token string">''</span>,</span>
<span class="line">        error: <span class="token string">'Campo obligatorio'</span> // Simulamos error</span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    </span>
<span class="line">    // Verificamos que el input tenga la clase o estilo de error</span>
<span class="line">    expect<span class="token punctuation">(</span>wrapper.find<span class="token punctuation">(</span><span class="token string">'input'</span><span class="token punctuation">)</span>.classes<span class="token punctuation">(</span><span class="token punctuation">))</span>.toContain<span class="token punctuation">(</span><span class="token string">'border-red-500'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">C. Tests de Integración <span class="token punctuation">(</span>Formulario Completo<span class="token punctuation">)</span></span>
<span class="line">Simulan el flujo de un usuario real rellenando el formulario ReservationForm.</span>
<span class="line"></span>
<span class="line">Archivo: src/__tests__/ReservationForm.integration.spec.ts</span>
<span class="line"></span>
<span class="line">TypeScript</span>
<span class="line"></span>
<span class="line"><span class="token function">import</span> <span class="token punctuation">{</span> <span class="token function">mount</span> <span class="token punctuation">}</span> from <span class="token string">'@vue/test-utils'</span></span>
<span class="line"><span class="token function">import</span> <span class="token punctuation">{</span> describe, it, <span class="token function">expect</span> <span class="token punctuation">}</span> from <span class="token string">'vitest'</span></span>
<span class="line"><span class="token function">import</span> ReservationForm from <span class="token string">'../components/ReservationForm.vue'</span></span>
<span class="line"></span>
<span class="line">describe<span class="token punctuation">(</span><span class="token string">'ReservationForm Integration'</span>, <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span></span>
<span class="line">  it<span class="token punctuation">(</span><span class="token string">'habilita el botón de enviar cuando el formulario es válido'</span>, async <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span></span>
<span class="line">    const wrapper <span class="token operator">=</span> mount<span class="token punctuation">(</span>ReservationForm<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    // <span class="token number">1</span>. Rellenar campos</span>
<span class="line">    await wrapper.find<span class="token punctuation">(</span><span class="token string">'input[type="text"]'</span><span class="token punctuation">)</span>.setValue<span class="token punctuation">(</span><span class="token string">'Juan Pérez'</span><span class="token punctuation">)</span></span>
<span class="line">    await wrapper.find<span class="token punctuation">(</span><span class="token string">'input[type="email"]'</span><span class="token punctuation">)</span>.setValue<span class="token punctuation">(</span><span class="token string">'juan@test.com'</span><span class="token punctuation">)</span></span>
<span class="line">    </span>
<span class="line">    // <span class="token number">2</span>. Verificar que el botón ya no está disabled</span>
<span class="line">    // Nota: Dependerá de tu lógica de validación</span>
<span class="line">    const btn <span class="token operator">=</span> wrapper.find<span class="token punctuation">(</span><span class="token string">'button[type="submit"]'</span><span class="token punctuation">)</span></span>
<span class="line">    expect<span class="token punctuation">(</span>btn.attributes<span class="token punctuation">(</span><span class="token punctuation">))</span>.not.toHaveProperty<span class="token punctuation">(</span><span class="token string">'disabled'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token number">3</span>. Mejores Prácticas</span>
<span class="line">Nombres descriptivos: Usa it<span class="token punctuation">(</span><span class="token string">'debería hacer X...'</span><span class="token punctuation">)</span> para que el reporte de errores sea legible.</span>
<span class="line"></span>
<span class="line">Async/Await: Vue actualiza el DOM de forma asíncrona. Usa siempre await cuando interactúes con inputs <span class="token punctuation">(</span>setValue, trigger<span class="token punctuation">)</span>.</span>
<span class="line"></span>
<span class="line">Selectores robustos: Intenta buscar elementos por atributos únicos como <span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token string">"email"</span> o data-testid en lugar de clases CSS genéricas.</span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>



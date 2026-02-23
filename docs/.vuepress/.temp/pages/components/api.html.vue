<template><div><p># Referencia API de Componentes</p>
<p>Esta sección detalla las propiedades (props), eventos y slots disponibles para cada componente reutilizable del proyecto.</p>
<p>[[toc]]</p>
<p>---</p>
<p>## 1. FormInput.vue</p>
<p>Componente genérico para la entrada de texto, números, fechas y emails. Incluye la etiqueta (`label`) y el manejo visual de errores.</p>
<p>### Props</p>
<table>
<thead>
<tr>
<th style="text-align:left">Nombre</th>
<th style="text-align:left">Tipo</th>
<th style="text-align:left">Requerido</th>
<th style="text-align:left">Por defecto</th>
<th style="text-align:left">Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">`modelValue`</td>
<td style="text-align:left">`String` | `Number`</td>
<td style="text-align:left">**Sí**</td>
<td style="text-align:left">-</td>
<td style="text-align:left">El valor vinculado (`v-model`).</td>
</tr>
<tr>
<td style="text-align:left">`label`</td>
<td style="text-align:left">`String`</td>
<td style="text-align:left">**Sí**</td>
<td style="text-align:left">-</td>
<td style="text-align:left">Texto que aparece sobre el input.</td>
</tr>
<tr>
<td style="text-align:left">`type`</td>
<td style="text-align:left">`String`</td>
<td style="text-align:left">No</td>
<td style="text-align:left">`'text'`</td>
<td style="text-align:left">Tipo de input HTML (`text`, `email`, `date`, `number`, `tel`).</td>
</tr>
<tr>
<td style="text-align:left">`error`</td>
<td style="text-align:left">`String`</td>
<td style="text-align:left">No</td>
<td style="text-align:left">`''`</td>
<td style="text-align:left">Mensaje de validación. Si existe, bordea el input en rojo.</td>
</tr>
<tr>
<td style="text-align:left">`name`</td>
<td style="text-align:left">`String`</td>
<td style="text-align:left">No</td>
<td style="text-align:left">-</td>
<td style="text-align:left">Atributo `name` para facilitar el testing y accesibilidad.</td>
</tr>
</tbody>
</table>
<p>### Eventos</p>
<table>
<thead>
<tr>
<th style="text-align:left">Nombre</th>
<th style="text-align:left">Argumentos</th>
<th style="text-align:left">Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">`update:modelValue`</td>
<td style="text-align:left">`(value: string)`</td>
<td style="text-align:left">Se emite cuando el usuario escribe (input).</td>
</tr>
<tr>
<td style="text-align:left">`blur`</td>
<td style="text-align:left">`(event: Event)`</td>
<td style="text-align:left">Se emite cuando el input pierde el foco. Útil para validación inmediata.</td>
</tr>
</tbody>
</table>
<p>### Ejemplo de uso</p>
<p>```vue<br>
&lt;FormInput<br>
v-model=&quot;formulario.nombre&quot;<br>
label=&quot;Nombre Completo&quot;<br>
type=&quot;text&quot;<br>
:error=&quot;errores.nombre&quot;<br>
@blur=&quot;validarCampo('nombre')&quot;<br>
/&gt;</p>
<hr>
<h2 id="_2-formselect-vue" tabindex="-1"><a class="header-anchor" href="#_2-formselect-vue"><span><strong>2. FormSelect.vue</strong></span></a></h2>
<p>Selector desplegable (&lt;select&gt;) estilizado.</p>
<h3 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span><strong>Props</strong></span></a></h3>
<table>
<thead>
<tr>
<th style="text-align:left">Nombre</th>
<th style="text-align:left">Tipo</th>
<th style="text-align:left">Requerido</th>
<th style="text-align:left">Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">modelValue</td>
<td style="text-align:left">String</td>
<td style="text-align:left"><strong>Sí</strong></td>
<td style="text-align:left">Opción seleccionada actualmente.</td>
</tr>
<tr>
<td style="text-align:left">label</td>
<td style="text-align:left">String</td>
<td style="text-align:left"><strong>Sí</strong></td>
<td style="text-align:left">Título del selector.</td>
</tr>
<tr>
<td style="text-align:left">options</td>
<td style="text-align:left">Array&lt;String&gt;</td>
<td style="text-align:left"><strong>Sí</strong></td>
<td style="text-align:left">Lista de opciones a mostrar en el desplegable.</td>
</tr>
<tr>
<td style="text-align:left">error</td>
<td style="text-align:left">String</td>
<td style="text-align:left">No</td>
<td style="text-align:left">Mensaje de error para validación.</td>
</tr>
</tbody>
</table>
<h3 id="eventos" tabindex="-1"><a class="header-anchor" href="#eventos"><span><strong>Eventos</strong></span></a></h3>
<table>
<thead>
<tr>
<th style="text-align:left">Nombre</th>
<th style="text-align:left">Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">update:modelValue</td>
<td style="text-align:left">Se emite al seleccionar una opción diferente.</td>
</tr>
<tr>
<td style="text-align:left">blur</td>
<td style="text-align:left">Se emite al perder el foco del selector.</td>
</tr>
</tbody>
</table>
<h3 id="ejemplo-de-uso" tabindex="-1"><a class="header-anchor" href="#ejemplo-de-uso"><span><strong>Ejemplo de uso</strong></span></a></h3>
<p>Fragmento de código<br>
&lt;FormSelect<br>
v-model=&quot;formulario.tipoEvento&quot;<br>
label=&quot;Selecciona un evento&quot;<br>
:options=&quot;['Boda', 'Comunión', 'Empresa']&quot;<br>
:error=&quot;errores.tipoEvento&quot;<br>
/&gt;</p>
<hr>
<h2 id="_3-formcheckbox-vue" tabindex="-1"><a class="header-anchor" href="#_3-formcheckbox-vue"><span><strong>3. FormCheckbox.vue</strong></span></a></h2>
<p>Grupo de casillas de verificación para selecciones múltiples.</p>
<h3 id="props-1" tabindex="-1"><a class="header-anchor" href="#props-1"><span><strong>Props</strong></span></a></h3>
<table>
<thead>
<tr>
<th style="text-align:left">Nombre</th>
<th style="text-align:left">Tipo</th>
<th style="text-align:left">Requerido</th>
<th style="text-align:left">Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">modelValue</td>
<td style="text-align:left">Array</td>
<td style="text-align:left"><strong>Sí</strong></td>
<td style="text-align:left">Array con las opciones seleccionadas.</td>
</tr>
<tr>
<td style="text-align:left">label</td>
<td style="text-align:left">String</td>
<td style="text-align:left"><strong>Sí</strong></td>
<td style="text-align:left">Título del grupo de checkboxes.</td>
</tr>
<tr>
<td style="text-align:left">options</td>
<td style="text-align:left">Array&lt;String&gt;</td>
<td style="text-align:left"><strong>Sí</strong></td>
<td style="text-align:left">Lista de opciones disponibles para marcar.</td>
</tr>
<tr>
<td style="text-align:left">error</td>
<td style="text-align:left">String</td>
<td style="text-align:left">No</td>
<td style="text-align:left">Mensaje de error (ej: &quot;Selecciona al menos uno&quot;).</td>
</tr>
</tbody>
</table>
<h3 id="eventos-1" tabindex="-1"><a class="header-anchor" href="#eventos-1"><span><strong>Eventos</strong></span></a></h3>
<table>
<thead>
<tr>
<th style="text-align:left">Nombre</th>
<th style="text-align:left">Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">update:modelValue</td>
<td style="text-align:left">Se emite un nuevo array con las opciones marcadas cada vez que cambia el estado.</td>
</tr>
</tbody>
</table>
<h3 id="ejemplo-de-uso-1" tabindex="-1"><a class="header-anchor" href="#ejemplo-de-uso-1"><span><strong>Ejemplo de uso</strong></span></a></h3>
<p>Fragmento de código<br>
&lt;FormCheckbox<br>
v-model=&quot;formulario.catering&quot;<br>
label=&quot;Opciones de comida&quot;<br>
:options=&quot;['Vegano', 'Sin Gluten', 'Infantil']&quot;<br>
/&gt;</p>
<hr>
<h2 id="_4-formradio-vue" tabindex="-1"><a class="header-anchor" href="#_4-formradio-vue"><span><strong>4. FormRadio.vue</strong></span></a></h2>
<p>Grupo de botones de opción (radio buttons) para selección única.</p>
<h3 id="props-2" tabindex="-1"><a class="header-anchor" href="#props-2"><span><strong>Props</strong></span></a></h3>
<table>
<thead>
<tr>
<th style="text-align:left">Nombre</th>
<th style="text-align:left">Tipo</th>
<th style="text-align:left">Requerido</th>
<th style="text-align:left">Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">modelValue</td>
<td style="text-align:left">String</td>
<td style="text-align:left"><strong>Sí</strong></td>
<td style="text-align:left">Valor de la opción seleccionada.</td>
</tr>
<tr>
<td style="text-align:left">label</td>
<td style="text-align:left">String</td>
<td style="text-align:left"><strong>Sí</strong></td>
<td style="text-align:left">Título del grupo de opciones.</td>
</tr>
<tr>
<td style="text-align:left">options</td>
<td style="text-align:left">Array&lt;String&gt;</td>
<td style="text-align:left"><strong>Sí</strong></td>
<td style="text-align:left">Lista de opciones mutuamente excluyentes.</td>
</tr>
<tr>
<td style="text-align:left">error</td>
<td style="text-align:left">String</td>
<td style="text-align:left">No</td>
<td style="text-align:left">Mensaje de error.</td>
</tr>
</tbody>
</table>
<h3 id="eventos-2" tabindex="-1"><a class="header-anchor" href="#eventos-2"><span><strong>Eventos</strong></span></a></h3>
<table>
<thead>
<tr>
<th style="text-align:left">Nombre</th>
<th style="text-align:left">Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">update:modelValue</td>
<td style="text-align:left">Se emite cuando se selecciona una nueva opción.</td>
</tr>
</tbody>
</table>
<h3 id="ejemplo-de-uso-2" tabindex="-1"><a class="header-anchor" href="#ejemplo-de-uso-2"><span><strong>Ejemplo de uso</strong></span></a></h3>
<p>Fragmento de código<br>
&lt;FormRadio<br>
v-model=&quot;formulario.presupuesto&quot;<br>
label=&quot;Rango de precio&quot;<br>
:options=&quot;['Bajo', 'Medio', 'Alto']&quot;<br>
/&gt;</p>
<hr>
<h2 id="_5-errormessage-vue" tabindex="-1"><a class="header-anchor" href="#_5-errormessage-vue"><span><strong>5. ErrorMessage.vue</strong></span></a></h2>
<p>Componente funcional simple para renderizar mensajes de feedback negativo.</p>
<h3 id="props-3" tabindex="-1"><a class="header-anchor" href="#props-3"><span><strong>Props</strong></span></a></h3>
<table>
<thead>
<tr>
<th style="text-align:left">Nombre</th>
<th style="text-align:left">Tipo</th>
<th style="text-align:left">Por defecto</th>
<th style="text-align:left">Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">message</td>
<td style="text-align:left">String</td>
<td style="text-align:left">''</td>
<td style="text-align:left">Texto del error. Si la cadena está vacía o es undefined, el componente no renderiza nada (DOM limpio).</td>
</tr>
</tbody>
</table>
<h3 id="slots" tabindex="-1"><a class="header-anchor" href="#slots"><span><strong>Slots</strong></span></a></h3>
<p>Este componente no utiliza slots, solo renderiza el texto pasado por props.</p>
<h3 id="ejemplo-de-uso-3" tabindex="-1"><a class="header-anchor" href="#ejemplo-de-uso-3"><span><strong>Ejemplo de uso</strong></span></a></h3>
<p>Fragmento de código<br>
&lt;ErrorMessage :message=&quot;errores.email&quot; /&gt;</p>
<hr>
<h2 id="_6-reservationform-vue-componente-principal" tabindex="-1"><a class="header-anchor" href="#_6-reservationform-vue-componente-principal"><span><strong>6. ReservationForm.vue (Componente Principal)</strong></span></a></h2>
<p>Es el componente &quot;inteligente&quot; (Smart Component) que orquesta todo el formulario.</p>
<ul>
<li><strong>Responsabilidad:</strong> Mantener el estado (useFormState), ejecutar validaciones (useValidation) y comunicarse con la API (simulada).</li>
<li><strong>Props:</strong> No recibe props (es un componente de página/vista).</li>
<li><strong>Eventos:</strong> No emite eventos hacia arriba, consume los eventos de los hijos.</li>
</ul>
</div></template>



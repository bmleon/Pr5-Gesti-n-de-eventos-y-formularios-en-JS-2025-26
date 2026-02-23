<template><div><h1 id="validaciones-y-reglas-de-negocio" tabindex="-1"><a class="header-anchor" href="#validaciones-y-reglas-de-negocio"><span>Validaciones y Reglas de Negocio</span></a></h1>
<p>El sistema de validación se divide en dos capas: validación de formato (Regex) y validación lógica (Reglas de Negocio).</p>
<h2 id="_1-expresiones-regulares-regex" tabindex="-1"><a class="header-anchor" href="#_1-expresiones-regulares-regex"><span>1. Expresiones Regulares (Regex)</span></a></h2>
<p>Estas reglas verifican que el formato del texto introducido sea correcto. Se encuentran definidas en <code v-pre>src/utils/regex.ts</code>.</p>
<table>
<thead>
<tr>
<th style="text-align:left">Campo</th>
<th style="text-align:left">Regla</th>
<th style="text-align:left">Regex / Lógica</th>
<th style="text-align:left">Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><strong>Nombre</strong></td>
<td style="text-align:left">3-50 letras</td>
<td style="text-align:left"><code v-pre>/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{3,50}$/</code></td>
<td style="text-align:left">Solo permite letras, espacios y tildes. No admite números ni símbolos.</td>
</tr>
<tr>
<td style="text-align:left"><strong>NIF/NIE</strong></td>
<td style="text-align:left">Formato Español</td>
<td style="text-align:left">`/^[0-9]{8}[A-Z]$</td>
<td style="text-align:left">^[XYZ][0-9]{7}[A-Z]$/`</td>
</tr>
<tr>
<td style="text-align:left"><strong>Teléfono</strong></td>
<td style="text-align:left">Móvil España</td>
<td style="text-align:left"><code v-pre>/^[679][0-9]{8}$/</code></td>
<td style="text-align:left">Debe empezar por 6, 7 o 9 y tener 9 dígitos en total.</td>
</tr>
<tr>
<td style="text-align:left"><strong>Email</strong></td>
<td style="text-align:left">Estándar RFC</td>
<td style="text-align:left"><code v-pre>/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/</code></td>
<td style="text-align:left">Formato estándar <code v-pre>usuario@dominio.ext</code>.</td>
</tr>
</tbody>
</table>
<h2 id="_2-validaciones-logicas-reglas-de-negocio" tabindex="-1"><a class="header-anchor" href="#_2-validaciones-logicas-reglas-de-negocio"><span>2. Validaciones Lógicas (Reglas de Negocio)</span></a></h2>
<p>Estas validaciones dependen de cálculos numéricos o de fechas y se gestionan en el composable <code v-pre>useValidation.ts</code>.</p>
<table>
<thead>
<tr>
<th style="text-align:left">Campo</th>
<th style="text-align:left">Regla de Negocio</th>
<th style="text-align:left">Detalle de Implementación</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><strong>Fecha del Evento</strong></td>
<td style="text-align:left">Antelación y Límite</td>
<td style="text-align:left">La fecha seleccionada debe ser <strong>mínimo 7 días</strong> después de hoy y <strong>máximo 1 año</strong> vista.</td>
</tr>
<tr>
<td style="text-align:left"><strong>Hora de Inicio</strong></td>
<td style="text-align:left">Horario Comercial</td>
<td style="text-align:left">Solo se permiten eventos entre las <strong>08:00</strong> y las <strong>23:00</strong>.</td>
</tr>
<tr>
<td style="text-align:left"><strong>Asistentes</strong></td>
<td style="text-align:left">Aforo Local</td>
<td style="text-align:left">El número de invitados debe estar entre <strong>10</strong> (mínimo) y <strong>500</strong> (máximo).</td>
</tr>
<tr>
<td style="text-align:left"><strong>Comentarios</strong></td>
<td style="text-align:left">Longitud Máxima</td>
<td style="text-align:left">Se limita el texto a <strong>500 caracteres</strong> para evitar desbordamientos.</td>
</tr>
<tr>
<td style="text-align:left"><strong>Catering</strong></td>
<td style="text-align:left">Obligatoriedad</td>
<td style="text-align:left">Se debe seleccionar <strong>al menos una</strong> opción de la lista de checkboxes.</td>
</tr>
<tr>
<td style="text-align:left"><strong>Términos</strong></td>
<td style="text-align:left">Consentimiento</td>
<td style="text-align:left">El checkbox de términos y condiciones debe estar marcado (<code v-pre>true</code>) para enviar.</td>
</tr>
</tbody>
</table>
<h2 id="_3-experiencia-de-usuario-ux" tabindex="-1"><a class="header-anchor" href="#_3-experiencia-de-usuario-ux"><span>3. Experiencia de Usuario (UX)</span></a></h2>
<p>Para evitar molestar al usuario con mensajes de error mientras escribe, se han implementado las siguientes estrategias:</p>
<ul>
<li><strong>Debounce:</strong> Las validaciones de texto (Nombre, Email, etc.) tienen un retraso de <strong>500ms</strong>. El error solo aparece cuando el usuario deja de escribir medio segundo.</li>
<li><strong>Blur:</strong> Los campos también se validan inmediatamente cuando el usuario cambia de casilla (evento <code v-pre>blur</code>).</li>
<li><strong>Feedback Visual:</strong>
<ul>
<li>Borde rojo y mensaje de texto si hay error.</li>
<li>Borde verde (implícito) si el campo es válido.</li>
</ul>
</li>
</ul>
</div></template>



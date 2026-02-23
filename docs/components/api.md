\# Referencia API de Componentes

Esta sección detalla las propiedades (props), eventos y slots disponibles para cada componente reutilizable del proyecto.

\[\[toc\]\]

\---

\#\# 1\. FormInput.vue

Componente genérico para la entrada de texto, números, fechas y emails. Incluye la etiqueta (\`label\`) y el manejo visual de errores.

\#\#\# Props

| Nombre | Tipo | Requerido | Por defecto | Descripción |  
| :--- | :--- | :--- | :--- | :--- |  
| \`modelValue\` | \`String\` \\| \`Number\` | \*\*Sí\*\* | \- | El valor vinculado (\`v-model\`). |  
| \`label\` | \`String\` | \*\*Sí\*\* | \- | Texto que aparece sobre el input. |  
| \`type\` | \`String\` | No | \`'text'\` | Tipo de input HTML (\`text\`, \`email\`, \`date\`, \`number\`, \`tel\`). |  
| \`error\` | \`String\` | No | \`''\` | Mensaje de validación. Si existe, bordea el input en rojo. |  
| \`name\` | \`String\` | No | \- | Atributo \`name\` para facilitar el testing y accesibilidad. |

\#\#\# Eventos

| Nombre | Argumentos | Descripción |  
| :--- | :--- | :--- |  
| \`update:modelValue\` | \`(value: string)\` | Se emite cuando el usuario escribe (input). |  
| \`blur\` | \`(event: Event)\` | Se emite cuando el input pierde el foco. Útil para validación inmediata. |

\#\#\# Ejemplo de uso

\`\`\`vue  
\<FormInput  
  v-model="formulario.nombre"  
  label="Nombre Completo"  
  type="text"  
  :error="errores.nombre"  
  @blur="validarCampo('nombre')"  
/\>

---

## **2\. FormSelect.vue**

Selector desplegable (\<select\>) estilizado.

### **Props**

| Nombre | Tipo | Requerido | Descripción |
| :---- | :---- | :---- | :---- |
| modelValue | String | **Sí** | Opción seleccionada actualmente. |
| label | String | **Sí** | Título del selector. |
| options | Array\<String\> | **Sí** | Lista de opciones a mostrar en el desplegable. |
| error | String | No | Mensaje de error para validación. |

### **Eventos**

| Nombre | Descripción |
| :---- | :---- |
| update:modelValue | Se emite al seleccionar una opción diferente. |
| blur | Se emite al perder el foco del selector. |

### **Ejemplo de uso**

Fragmento de código  
\<FormSelect  
  v-model="formulario.tipoEvento"  
  label="Selecciona un evento"  
  :options="\['Boda', 'Comunión', 'Empresa'\]"  
  :error="errores.tipoEvento"  
/\>

---

## **3\. FormCheckbox.vue**

Grupo de casillas de verificación para selecciones múltiples.

### **Props**

| Nombre | Tipo | Requerido | Descripción |
| :---- | :---- | :---- | :---- |
| modelValue | Array | **Sí** | Array con las opciones seleccionadas. |
| label | String | **Sí** | Título del grupo de checkboxes. |
| options | Array\<String\> | **Sí** | Lista de opciones disponibles para marcar. |
| error | String | No | Mensaje de error (ej: "Selecciona al menos uno"). |

### **Eventos**

| Nombre | Descripción |
| :---- | :---- |
| update:modelValue | Se emite un nuevo array con las opciones marcadas cada vez que cambia el estado. |

### **Ejemplo de uso**

Fragmento de código  
\<FormCheckbox  
  v-model="formulario.catering"  
  label="Opciones de comida"  
  :options="\['Vegano', 'Sin Gluten', 'Infantil'\]"  
/\>

---

## **4\. FormRadio.vue**

Grupo de botones de opción (radio buttons) para selección única.

### **Props**

| Nombre | Tipo | Requerido | Descripción |
| :---- | :---- | :---- | :---- |
| modelValue | String | **Sí** | Valor de la opción seleccionada. |
| label | String | **Sí** | Título del grupo de opciones. |
| options | Array\<String\> | **Sí** | Lista de opciones mutuamente excluyentes. |
| error | String | No | Mensaje de error. |

### **Eventos**

| Nombre | Descripción |
| :---- | :---- |
| update:modelValue | Se emite cuando se selecciona una nueva opción. |

### **Ejemplo de uso**

Fragmento de código  
\<FormRadio  
  v-model="formulario.presupuesto"  
  label="Rango de precio"  
  :options="\['Bajo', 'Medio', 'Alto'\]"  
/\>

---

## **5\. ErrorMessage.vue**

Componente funcional simple para renderizar mensajes de feedback negativo.

### **Props**

| Nombre | Tipo | Por defecto | Descripción |
| :---- | :---- | :---- | :---- |
| message | String | '' | Texto del error. Si la cadena está vacía o es undefined, el componente no renderiza nada (DOM limpio). |

### **Slots**

Este componente no utiliza slots, solo renderiza el texto pasado por props.

### **Ejemplo de uso**

Fragmento de código  
\<ErrorMessage :message="errores.email" /\>

---

## **6\. ReservationForm.vue (Componente Principal)**

Es el componente "inteligente" (Smart Component) que orquesta todo el formulario.

* **Responsabilidad:** Mantener el estado (useFormState), ejecutar validaciones (useValidation) y comunicarse con la API (simulada).  
* **Props:** No recibe props (es un componente de página/vista).  
* **Eventos:** No emite eventos hacia arriba, consume los eventos de los hijos.


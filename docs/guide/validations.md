# Validaciones y Reglas de Negocio

El sistema de validación se divide en dos capas: validación de formato (Regex) y validación lógica (Reglas de Negocio).

## 1. Expresiones Regulares (Regex)

Estas reglas verifican que el formato del texto introducido sea correcto. Se encuentran definidas en `src/utils/regex.ts`.

| Campo | Regla | Regex / Lógica | Descripción |
| :--- | :--- | :--- | :--- |
| **Nombre** | 3-50 letras | `/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{3,50}$/` | Solo permite letras, espacios y tildes. No admite números ni símbolos. |
| **NIF/NIE** | Formato Español | `/^[0-9]{8}[A-Z]$|^[XYZ][0-9]{7}[A-Z]$/` | 8 números + letra (DNI) o X/Y/Z + 7 números + letra (NIE). |
| **Teléfono** | Móvil España | `/^[679][0-9]{8}$/` | Debe empezar por 6, 7 o 9 y tener 9 dígitos en total. |
| **Email** | Estándar RFC | `/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/` | Formato estándar `usuario@dominio.ext`. |

## 2. Validaciones Lógicas (Reglas de Negocio)

Estas validaciones dependen de cálculos numéricos o de fechas y se gestionan en el composable `useValidation.ts`.

| Campo | Regla de Negocio | Detalle de Implementación |
| :--- | :--- | :--- |
| **Fecha del Evento** | Antelación y Límite | La fecha seleccionada debe ser **mínimo 7 días** después de hoy y **máximo 1 año** vista. |
| **Hora de Inicio** | Horario Comercial | Solo se permiten eventos entre las **08:00** y las **23:00**. |
| **Asistentes** | Aforo Local | El número de invitados debe estar entre **10** (mínimo) y **500** (máximo). |
| **Comentarios** | Longitud Máxima | Se limita el texto a **500 caracteres** para evitar desbordamientos. |
| **Catering** | Obligatoriedad | Se debe seleccionar **al menos una** opción de la lista de checkboxes. |
| **Términos** | Consentimiento | El checkbox de términos y condiciones debe estar marcado (`true`) para enviar. |

## 3. Experiencia de Usuario (UX)

Para evitar molestar al usuario con mensajes de error mientras escribe, se han implementado las siguientes estrategias:

* **Debounce:** Las validaciones de texto (Nombre, Email, etc.) tienen un retraso de **500ms**. El error solo aparece cuando el usuario deja de escribir medio segundo.
* **Blur:** Los campos también se validan inmediatamente cuando el usuario cambia de casilla (evento `blur`).
* **Feedback Visual:**
    * Borde rojo y mensaje de texto si hay error.
    * Borde verde (implícito) si el campo es válido.
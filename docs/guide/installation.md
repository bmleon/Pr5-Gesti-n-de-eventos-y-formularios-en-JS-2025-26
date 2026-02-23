# Guía de Instalación

Sigue estos pasos para descargar y ejecutar el proyecto en tu entorno local.

## Prerrequisitos

Antes de empezar, asegúrate de tener instalado:
- **Node.js**: v18 o superior ([Descargar](https://nodejs.org/))
- **npm**: v9 o superior (viene con Node.js)

## Pasos

### 1. Clonar el repositorio
Abre tu terminal y clona el proyecto:

```bash
git clone <url-de-tu-repo>
cd PR1-Formulario_reserva_eventos
2. Instalar dependencias
Instala las librerías necesarias (Vue, Pinia, Vitest, etc.):

Bash
npm install
3. Ejecutar servidor de desarrollo
Inicia el proyecto en modo local:

Bash
npm run dev
El proyecto estará disponible en http://localhost:5173.

Otros Comandos Útiles
Ejecutar Tests
Para verificar que todo funciona correctamente (validaciones y lógica):

Bash
npm run test:unit
Construir para producción
Para generar la carpeta dist optimizada para subir a un servidor:

Bash
npm run build


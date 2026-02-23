<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import ReservationForm from './components/ReservationForm.vue'

// Estado para el modo oscuro
const isDarkMode = ref(false)

// Al montar, verificamos preferencia del sistema o localStorage
onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    isDarkMode.value = savedTheme === 'dark'
  } else {
    isDarkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  applyTheme()
})

watch(isDarkMode, () => {
  applyTheme()
  localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light')
})

function toggleTheme() {
  isDarkMode.value = !isDarkMode.value
}

function applyTheme() {
  // Aplicamos la clase 'dark' al HTML raíz
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}
</script>

<template>
  <div class="app-wrapper">

    <header class="app-header">
      <div class="header-content">
        <h1>📅 Gestión de Eventos</h1>

        <button @click="toggleTheme" class="theme-toggle"
          :title="isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'">
          {{ isDarkMode ? '☀️ Modo Claro' : '🌙 Modo Oscuro' }}
        </button>
      </div>
    </header>

    <main class="main-content">
      <div class="form-card-wrapper">
        <ReservationForm />
      </div>
    </main>

    <footer class="app-footer">
      <p>&copy; 2026 Práctica Tema 5 Gestión de eventos y formularios en JS</p>
    </footer>

  </div>
</template>

<style>
/* --- VARIABLES DE COLORES --- */
:root {
  /* Colores MODO CLARO (Por defecto) */
  --bg-color: #f3f4f6;
  --text-color: #1f2937;
  --header-bg: #ffffff;
  --accent-color: #3b82f6;
  --card-bg: #ffffff;
}

/* Colores MODO OSCURO */
/* Cuando la etiqueta <html> tiene la clase 'dark', sobrescribimos las variables */
html.dark {
  --bg-color: #111827;
  /* Negro/Gris muy oscuro */
  --text-color: #f9fafb;
  --header-bg: #1f2937;
  --accent-color: #60a5fa;
  --card-bg: #1f2937;
}

/* --- ESTILOS GENERALES --- */
body {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh;
  /* Asegura que ocupe todo el alto */
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  /* Aquí aplicamos las variables: */
  background-color: var(--bg-color);
  color: var(--text-color);

  transition: background-color 0.3s ease, color 0.3s ease;
}

/* LAYOUT */
.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app-header {
  background-color: var(--header-bg);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
  border-bottom: 1px solid transparent;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

/* Borde sutil en header modo oscuro */
html.dark .app-header {
  border-bottom: 1px solid #374151;
}

.header-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-content h1 {
  margin: 0;
  font-size: 1.5rem;
  color: var(--accent-color);
}

/* Botón de cambio de tema */
.theme-toggle {
  background: transparent;
  border: 1px solid var(--text-color);
  color: var(--text-color);
  padding: 0.5rem 1rem;
  border-radius: 99px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s ease;
}

.theme-toggle:hover {
  background-color: rgba(128, 128, 128, 0.1);
}

/* Contenido Principal */
.main-content {
  flex: 1;
  width: 100%;
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
  box-sizing: border-box;
}

/* Wrapper para el formulario para darle estilo de tarjeta si quieres */
.form-card-wrapper {
  /* Si quieres que el fondo del formulario sea distinto al de la web: */
  /* background-color: var(--card-bg); */
  /* padding: 2rem; */
  /* border-radius: 1rem; */
  /* box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); */
}

.app-footer {
  text-align: center;
  padding: 2rem;
  opacity: 0.7;
  font-size: 0.9rem;
  color: var(--text-color);
}

/* --- ARREGLO DE INPUTS EN MODO OSCURO --- */
/* Esto fuerza que los inputs se vean oscuros globalmente */
html.dark input,
html.dark select,
html.dark textarea {
  background-color: #374151 !important;
  color: white !important;
  border-color: #4b5563 !important;
}

/* Arreglo para el calendario (date picker) en modo oscuro */
html.dark ::-webkit-calendar-picker-indicator {
  filter: invert(1);
}
</style>

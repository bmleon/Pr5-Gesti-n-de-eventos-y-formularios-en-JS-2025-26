import { ref } from 'vue'

export function useDebounce() {
  const timeout = ref<number | null>(null)

  function debounce(callback: Function, delay = 500) {
    if (timeout.value) {
      clearTimeout(timeout.value)
    }

    timeout.value = window.setTimeout(() => {
      callback()
    }, delay)
  }

  return { debounce }
}

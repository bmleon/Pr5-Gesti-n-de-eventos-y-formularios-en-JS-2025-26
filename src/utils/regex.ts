export const nameRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{3,50}$/
export const nifRegex = /^[0-9]{8}[A-Z]$|^[XYZ][0-9]{7}[A-Z]$/
export const phoneRegex = /^[679][0-9]{8}$/
export const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
export const notOnlySpacesRegex = /^(?!\s*$).+/

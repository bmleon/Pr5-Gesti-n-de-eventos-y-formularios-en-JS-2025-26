export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/Belén/OneDrive/Escritorio/Tareas grado superior/2DAW/DW-ENTORNO-CLIENTE/fundamentos-js/Pr-tema5/Pr1-Creacion del formulario para eventos/PR1-Formulario_reserva_eventos/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/components/api.html", { loader: () => import(/* webpackChunkName: "components_api.html" */"C:/Users/Belén/OneDrive/Escritorio/Tareas grado superior/2DAW/DW-ENTORNO-CLIENTE/fundamentos-js/Pr-tema5/Pr1-Creacion del formulario para eventos/PR1-Formulario_reserva_eventos/docs/.vuepress/.temp/pages/components/api.html.js"), meta: {"title":""} }],
  ["/guide/architecture.html", { loader: () => import(/* webpackChunkName: "guide_architecture.html" */"C:/Users/Belén/OneDrive/Escritorio/Tareas grado superior/2DAW/DW-ENTORNO-CLIENTE/fundamentos-js/Pr-tema5/Pr1-Creacion del formulario para eventos/PR1-Formulario_reserva_eventos/docs/.vuepress/.temp/pages/guide/architecture.html.js"), meta: {"title":"Arquitectura del Proyecto"} }],
  ["/guide/installation.html", { loader: () => import(/* webpackChunkName: "guide_installation.html" */"C:/Users/Belén/OneDrive/Escritorio/Tareas grado superior/2DAW/DW-ENTORNO-CLIENTE/fundamentos-js/Pr-tema5/Pr1-Creacion del formulario para eventos/PR1-Formulario_reserva_eventos/docs/.vuepress/.temp/pages/guide/installation.html.js"), meta: {"title":"Guía de Instalación"} }],
  ["/guide/testing.html", { loader: () => import(/* webpackChunkName: "guide_testing.html" */"C:/Users/Belén/OneDrive/Escritorio/Tareas grado superior/2DAW/DW-ENTORNO-CLIENTE/fundamentos-js/Pr-tema5/Pr1-Creacion del formulario para eventos/PR1-Formulario_reserva_eventos/docs/.vuepress/.temp/pages/guide/testing.html.js"), meta: {"title":"Guía de Testing"} }],
  ["/guide/validations.html", { loader: () => import(/* webpackChunkName: "guide_validations.html" */"C:/Users/Belén/OneDrive/Escritorio/Tareas grado superior/2DAW/DW-ENTORNO-CLIENTE/fundamentos-js/Pr-tema5/Pr1-Creacion del formulario para eventos/PR1-Formulario_reserva_eventos/docs/.vuepress/.temp/pages/guide/validations.html.js"), meta: {"title":"Validaciones y Reglas de Negocio"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/Belén/OneDrive/Escritorio/Tareas grado superior/2DAW/DW-ENTORNO-CLIENTE/fundamentos-js/Pr-tema5/Pr1-Creacion del formulario para eventos/PR1-Formulario_reserva_eventos/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}

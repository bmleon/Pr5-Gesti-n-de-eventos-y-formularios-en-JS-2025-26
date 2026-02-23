import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  lang: 'es-ES',
  title: 'Documentación Eventos',
  description: 'Documentación técnica del Formulario de Reserva',

  bundler: viteBundler(),

  theme: defaultTheme({
    navbar: [
      { text: 'Inicio', link: '/' },
      { text: 'Guía', link: '/guide/installation.html' },
      { text: 'Componentes', link: '/components/api.html' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Guía del Proyecto',
          children: [
            '/guide/installation.md',
            '/guide/architecture.md',
            '/guide/validations.md',
            '/guide/testing.md',
          ],
        },
      ],
      '/components/': [
        {
          text: 'Referencia API',
          children: ['/components/api.md'],
        },
      ],
    },
  }),
})

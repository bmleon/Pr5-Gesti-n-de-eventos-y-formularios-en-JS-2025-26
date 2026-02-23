import { CodeTabs } from "C:/Users/Belén/OneDrive/Escritorio/Tareas grado superior/2DAW/DW-ENTORNO-CLIENTE/fundamentos-js/Pr-tema5/Pr1-Creacion del formulario para eventos/PR1-Formulario_reserva_eventos/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "C:/Users/Belén/OneDrive/Escritorio/Tareas grado superior/2DAW/DW-ENTORNO-CLIENTE/fundamentos-js/Pr-tema5/Pr1-Creacion del formulario para eventos/PR1-Formulario_reserva_eventos/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "C:/Users/Belén/OneDrive/Escritorio/Tareas grado superior/2DAW/DW-ENTORNO-CLIENTE/fundamentos-js/Pr-tema5/Pr1-Creacion del formulario para eventos/PR1-Formulario_reserva_eventos/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};

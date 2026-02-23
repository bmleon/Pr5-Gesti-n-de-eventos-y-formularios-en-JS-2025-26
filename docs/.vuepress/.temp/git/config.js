import { GitContributors } from "C:/Users/Belén/OneDrive/Escritorio/Tareas grado superior/2DAW/DW-ENTORNO-CLIENTE/fundamentos-js/Pr-tema5/Pr1-Creacion del formulario para eventos/PR1-Formulario_reserva_eventos/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "C:/Users/Belén/OneDrive/Escritorio/Tareas grado superior/2DAW/DW-ENTORNO-CLIENTE/fundamentos-js/Pr-tema5/Pr1-Creacion del formulario para eventos/PR1-Formulario_reserva_eventos/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};

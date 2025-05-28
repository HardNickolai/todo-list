import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi-svg";

import "vuetify/styles";

export default createVuetify({
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: { mdi },
  },
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        colors: {
          primary: "#1867C0",
          secondary: "#5CBBF6",
        },
      },
    },
  },
});

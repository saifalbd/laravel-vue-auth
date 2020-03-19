// tslint:disable
import Vue from "vue";
import Vuetify from "vuetify";
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export interface Color {
  boldColor: string;
  primary: string;
  accent: string;
  secondary: string;
  success: string;
  info: string;
  warning: string;
}

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      dark: {
        boldColor:'#feeb40',
        primary: '#21CFF3',
        accent: '#230428',
        secondary: '#583a8d',
        success: '#4CAF50',
        info: '#2196F3',
        warning: '#FB8C00',
        error: '#FF5252'
      },
      light: {
        boldColor:'#11005c',
        primary: "#ee44aa",
        secondary: "#e7f08e",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107"
      },
    },
  },
});

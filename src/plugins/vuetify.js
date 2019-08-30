import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    primary: '#465c6a',
    secondary: '#305463',
    accent: '#546642',
    error: '#FF5252',
    info: '#6b752E',
    success: '#4CAF50',
    warning: '#FFC107'
  }
});

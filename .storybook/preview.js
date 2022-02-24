// import style dependencies for storybook to use
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/styles/qontak.scss';

// import to later use vue-bootstrap html tags
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import Vue from 'vue'

// tell Vue to use bootstrap html tags
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
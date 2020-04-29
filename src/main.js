import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false

import './assets/styles/reset.css'
import './assets/styles/style.styl'

new Vue({
  router,
  render: h => h(App),
  mounted() {
    document.dispatchEvent(new Event('render-event'));
  }
}).$mount('#app')

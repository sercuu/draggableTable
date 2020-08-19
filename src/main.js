import Vue from 'vue'
import App from './App.vue'
import router from './Router'

import "./assets/style/app.scss";

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router,
  components: { App }
}).$mount('#app')
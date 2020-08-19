import Vue from "vue";
import App from "./App.vue";
import router from "./Router";

import "./assets/style/app.scss";

Vue.config.productionTip = false;

new Vue({
    components: { App },
    render: (h) => h(App),
    router,
}).$mount("#app");

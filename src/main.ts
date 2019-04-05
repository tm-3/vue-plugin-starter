import Vue from 'vue';
import App from './App.vue';
// import './registerServiceWorker';

import Plugin from './index';

// debugger;
// Vue.use(Plugin, {
//   registerComponentsGlobally: true,
//   registerViewComponentsGlobally: true,
// });

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');

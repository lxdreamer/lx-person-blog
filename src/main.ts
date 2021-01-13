import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import firework from '@/directive/firework'
import snowFly from '@/directive/snow/snowFly'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.directive('snowFly',snowFly)
Vue.directive('firework',firework)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

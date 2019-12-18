import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
import element from 'element-ui'

Vue.config.productionTip = false
Vue.use(element)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

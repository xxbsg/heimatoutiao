import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './styles/index.less'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
import element from 'element-ui'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(element)
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
Vue.prototype.$axios = axios
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

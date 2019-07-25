import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'ant-design-vue/dist/antd.css'
import Axios from 'axios'

Vue.prototype.$axios = Axios;
Vue.config.productionTip = false

Axios.defaults.baseURL="http://localhost:8888"

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

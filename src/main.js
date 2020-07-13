import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router/index.js'
import TypeNav from '@/components/TypeNav'
import store from './store'
Vue.config.productionTip = false
Vue.component('TypeNav',TypeNav)
new Vue({
  render: h => h(App),
  el:'#app',
  router,
  store
})

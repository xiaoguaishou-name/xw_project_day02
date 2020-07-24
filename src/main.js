import Vue from 'vue'
import App from '@/App.vue'
import store from './store'
import router from '@/router/index.js'
import TypeNav from '@/components/TypeNav'
import SliderLoop from '@/components/SliderLoop'
import Pagination from '@/components/Pagination'
import '@/mock/mockServer'
import * as API from '@/api'
Vue.config.productionTip = false
Vue.component('TypeNav', TypeNav)
Vue.component('SliderLoop', SliderLoop)
Vue.component('Pagination', Pagination)
new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  el: '#app',
  render: h => h(App),
  router,
  store,
})
//测试请求

// API.reqGoodsList({})
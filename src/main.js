import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router/index.js'
import TypeNav from '@/components/TypeNav'
import SliderLoop from '@/components/SliderLoop'
import Pagination from '@/components/Pagination'
import store from './store'
import '@/mock/mockServer'
Vue.config.productionTip = false
Vue.component('TypeNav', TypeNav)
Vue.component('SliderLoop', SliderLoop)
Vue.component('Pagination', Pagination)
new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  render: h => h(App),
  el:'#app',
  router,
  store
})
//测试请求
import * as API from '@/api'
// API.reqGoodsList({})
import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router/index.js'
import TypeNav from '@/components/TypeNav'
import SliderLoop from '@/components/SliderLoop'
import store from './store'
import '@/mock/mockServer'
Vue.config.productionTip = false
Vue.component('TypeNav', TypeNav)
Vue.component('SliderLoop', SliderLoop)
new Vue({
  render: h => h(App),
  el:'#app',
  router,
  store
})

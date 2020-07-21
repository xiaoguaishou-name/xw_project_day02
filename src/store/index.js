import Vue from 'vue'
import Vuex from 'vuex'
import home from './home'
import search from '@/store/search'
import detail from '@/store/detail'
import shopcart from '@/store/shopcart'
Vue.use(Vuex)
const state = {}
const mutations = {}
const actions = {}
const getters = {}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    home,
    search,
    detail,
    shopcart
  }
})
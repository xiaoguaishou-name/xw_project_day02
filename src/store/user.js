import {
  reqRegister,
  reqLogin,
  reqLogout
} from "@/api"
import {
  getUserTempId
} from '@/utils/userabout'
const state = {
  userTempId: getUserTempId(),
  userInfo:JSON.parse(localStorage.getItem('USERINFO_KEY')) || {}
}
const mutations = {
  RECEIVEUSERINFO(state, userInfo) {
    state.userInfo = userInfo
  },
  RESETUSERINFO(state) {
    state.userInfo = {}
  }
}
const actions = {
  async userRegister({ commit }, userInfo) {
    const result = await reqRegister(userInfo)
    if (result.code === 200) {
      return '成功'
    } else {
      return Promise.reject(new Error('失败'))
    }
  },
  async userLogin({ commit }, userInfo) {
    const result = await reqLogin(userInfo)
    if (result.code === 200) {
      localStorage.setItem('USERINFO_KEY', JSON.stringify(result.data))
      commit('RECEIVEUSERINFO',result.data)
    }
  },
  async userLogout({ commit }) {
    const result = await reqLogout()
    if (result.code === 200) {
      localStorage.removeItem('USERINFO_KEY')
      commit('RESETUSERINFO')
    }
  }
}
const getters = {}
export default {
  state,
  mutations,
  actions,
  getters
}
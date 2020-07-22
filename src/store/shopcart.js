import {
  reqAddOrUpdateShopCart,
  reqShopCartList,
  reqUpdateIsChecked,
  reqDeleteCart
} from '@/api'
const state = {
  shopCartList : []
}
const mutations = {
  RECEIVESHOPCARTLIST(state,shopCartList) {
    state.shopCartList = shopCartList
  }
}
const actions = {
  // 传多个参数，必须放在对象里面
  async addOrUpdateShopCart({ commit }, { skuId, skuNum }) {
    const result = await reqAddOrUpdateShopCart(skuId, skuNum)
    if (result.code === 200) {
      return '添加购物车成功'
    } else {
      // return '您的网络迷路了呦'   //undefined和信息都是成功的
      //返回失败的Promise
      return Promise.reject(new Error('添加购物车失败，您的网络迷路了呦'))
    }
  },
  async getShopCartList({ commit }) {
    const result = await reqShopCartList()
    if (result.code === 200) {
      commit('RECEIVESHOPCARTLIST', result.data)
    }
  },
  async updateIsChecked({ commit }, { skuId, isChecked }) {
    const result = await reqUpdateIsChecked(skuId, isChecked)
    if (result.code === 200) {
      return '修改选中状态成功'
    } else {
      return Promise.reject(new Error('修改选中状态失败'))
    }
  },
  updateAllIsChecked({ commit, state, dispatch }, isChecked) {
    let promises = []
    state.shopCartList.forEach(item => {
      if (item.isChecked === isChecked) return
      let promise = dispatch('updateIsChecked', { skuId: item.skuId, isChecked: isChecked })
      promises.push(promise)
    })
    return Promise.all(promises)
  },
  async deleteShopCart({ commit }, skuId) {
    const result = await reqDeleteCart(skuId)
    if (result.code === 200) {
      return '删除成功'
    } else{
      return Promise.reject(new Error('删除失败'))
    }
  },
  deleteChecked({ commit, dispatch, state }) {
    let promises = []
    state.shopCartList.forEach(item => {
      if (!item.isChecked) return
      let promise = dispatch('deleteShopCart', item.skuId)
      promises.push(promise)
    })
    return Promise.all(promises)
  }
}
const getters = {
}
export default {
  state,
  mutations,
  actions,
  getters
}
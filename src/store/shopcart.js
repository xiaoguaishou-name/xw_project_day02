import {
  reqAddOrUpdateShopCart
} from '@/api'
const state = {}
const mutations = {}
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
  }
}
const getters = {

}
export default ({
  state,
  mutations,
  actions,
  getters
})
import { reqGoodsList } from '@/api'
const state = {
  goodsListInfo:{}
}
const mutations = {
  RECEIVEGOODSLISTINFO(state, goodsListInfo) {
    state.goodsListInfo = goodsListInfo
  }
}
const actions = {
  // searchParams是接收组件dispatch传递的参数对象
  async getGoodsListInfo({ commit },searchParams) {
    const result = await reqGoodsList(searchParams)
    if (result.code === 200) {
      commit('RECEIVEGOODSLISTINFO',result.data)
    }
  }
}
const getters = {
  goodsList(state) {
    return state.goodsListInfo.goodsList || []   //加或空数组的原因是防止a.b.c拿到undefined，使控制台报错
  },
  attrsList(state) {
    return state.goodsListInfo.attrsList || []
  },
  trademarkList(state) {
    return state.goodsListInfo.trademarkList || []
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}
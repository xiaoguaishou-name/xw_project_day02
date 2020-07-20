import Ajax from '@/ajax/Ajax'
import mockAjax from '@/ajax/mockAjax'//引入
// 请求获取三级分类列表数据
// get   /api/product/getBaseCategoryList   参数：无
export const reqCategoryList = () => Ajax({
  url: '/product/getBaseCategoryList',
  method: 'GET'
})
// 使用mock的接口去请求 banner数据
export const reqBannerList = () => mockAjax({
  url: '/banner',
  method: 'GET'
})
// 使用mock的接口去请求 floor数据
export const reqFloorList = () => mockAjax({
  url: '/floor',
  method: 'GET'
})
//请求体参数searchParams
export const reqGoodsList = (searchParams) => Ajax.post('/list', searchParams)

//请求详情页数据   /api/item/{ skuId }    get
export const reqGoodsDetailInfo = (skuId) => Ajax.get(`/item/${skuId}`)

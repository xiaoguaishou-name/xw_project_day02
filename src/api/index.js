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

// 请求添加购物车  /api/cart/addToCart/{ skuId }/{ skuNum }  post
export const reqAddOrUpdateShopCart = (skuId, skuNum) => Ajax.post(`/cart/addToCart/${skuId}/${skuNum}`)

//请求购物车列表数据
export const reqShopCartList = () => Ajax.get('/cart/cartList')

//请求修改购物车选中状态
export const reqUpdateIsChecked = (skuID, isChecked) => Ajax.get(`/cart/checkCart/${skuID}/${isChecked}`)

//请求删除单个购物车商品信息
export const reqDeleteCart = (skuId) => Ajax.delete(`/cart/deleteCart/${skuId}`)

//请求注册
export const reqRegister = (userInfo) => Ajax.post('/user/passport/register', userInfo)

//请求登录
export const reqLogin = (userInfo) => Ajax.post('/user/passport/login', userInfo)

//退出登录请求
export const reqLogout = () => Ajax.get('user/passport/logout')

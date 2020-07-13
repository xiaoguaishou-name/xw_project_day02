import Ajax from '@/ajax/Ajax'
// 请求获取三级分类列表数据
// get   /api/product/getBaseCategoryList   参数：无
export const reqCategoryList = () => Ajax({
  url: '/product/getBaseCategoryList',
  method: 'GET'
})
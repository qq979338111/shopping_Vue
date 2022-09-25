//当前模块：API进行统一管理

import requests from "./request";

//三级联动的接口

//2.首页三级分类  请求地址  /api/product/getBaseCategoryList  请求方式  GET

export const reqCategoryList = () => {
  //发请求
  return requests({ url: '/product/getBaseCategoryList', method: 'get' })
}

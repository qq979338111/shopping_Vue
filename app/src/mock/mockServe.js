
// 1：引入mockjs 模块
import Mock from 'mockjs'
// 2：将JSON数据格式引入进来
// webpack 默认对外暴露 ：图片，JSON数据格式
import banner from './banner.json'
import floor from './floor.json'

// mock数据：第一个参数请求地址  第二个参数请求数据
Mock.mock("/mock/banner", { code: 200, data: banner }); //moi首页轮播图的数据
Mock.mock("/mock/floor", { code: 200, data: floor })




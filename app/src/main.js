// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

//引入路由
import router from '@/router'
//引入仓库
import store from './store'

//三级联动的组件---全局组件
import TpyeNav from '@/components/TypeNav';
//             第一个参数 全局组件的名字：第二个参数：哪一个组件
Vue.component(TpyeNav.name, TpyeNav);
// 引入MockServe.js ---mock数据
import '@/mock/MockServe'


// 引入swiper 样式
import 'swiper/css/swiper.min.css'


Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  //注册仓库
  store
})

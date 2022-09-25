import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
import Home from '@/pages/Home'

import Login from '@/pages/Login'

import Register from '@/pages/Register'

import Search from '@/pages/Search'

console.log(Router.prototype);
export default new Router({
  routes: [
    {
      path: '/home',
      component: Home,
      meta: { show: true }

    },
    {
      path: '/login',
      component: Login,
      meta: { show: false }

    },
    {
      path: '/register',
      component: Register,
      meta: { show: false }

    },
    {
      path: '/search/:keyword?',//?问号代表 params  可传可不穿
      component: Search,
      meta: { show: true },
      name: "search",
      //路由组件能不能传递props数据？
      //布尔值
      // props: true,
      //对象
      // props:{a:1,b:2}
      //函数：--常用
      props: ($route) => {
        return { keyword: $route.params.keyword, k: $route.query.k }
      }


    }
    ,
    //重定向，在项目跑起来 让项目立马定向到首页

    {
      path: '*',
      redirect: '/home'
    }
  ]
})

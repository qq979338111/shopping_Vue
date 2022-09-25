import Vue from 'vue'
import Vuex from 'vuex';


Vue.use(Vuex);
import home from './home';
import search from './search';

// //state ：仓库存储数据的地方
// const state = {

// };


// //mutations：修改state 的唯一手段
// const mutations = {

// };

// //action :处理action ,可以书写自己的业务逻辑，也可以处理异步’

// const actions = {
//   //这个可以书写业务逻辑，但不能修改state 

// };

// //getters:理解为计算属性：用于简化仓库数据，让组件获取仓库数据更加方便

// const getters = {};

//对外暴露一个Store 类的一个实例
export default new Vuex.Store({

  modules: {
    home,
    search
  }

})
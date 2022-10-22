//home 模块的小仓库

import { reqCategoryList, reqGetBannerList, reqFloorList } from '@/api'

const state = {
  // home仓库储存三级菜单的数据
  categoryList: [],
  // 轮播图的数据
  bannerList: [],
  // floor
  floorList: []
}
//mutations 修改state
const mutations = {
  GATEGORYLIST (state, categoryList) {
    state.categoryList = categoryList;
  },
  GETBANNERLIST (state, bannerList) {
    state.bannerList = bannerList
  },
  GETFLOORLIST (state, floorList) {
    state.floorList = floorList;

  }
}
const actions = {
  //通过API里面的接口函数调用，向服务器发请求，获取服务器的数据
  async categoryList ({ commit }) {
    let result = await reqCategoryList()
    if (result.code == 200) {
      commit("GATEGORYLIST", result.data)
    }
  },
  // 获取首页轮播图的数据
  async getBannerList ({ commit }) {
    let result = await reqGetBannerList();
    console.log(result);
    if (result.code == 200) {
      commit('GETBANNERLIST', result.data)
    }
  },
  // 获取floor的数据
  async getFloorList ({ commit }) {
    let result = await reqFloorList();
    if (result.code == 200) {
      //  提交mutation
      commit('GETFLOORLIST', result.data)
      console.log('666', result.data);
    }

  }
}
const getters = {}


export default {
  state,
  mutations,
  actions,
  getters
}
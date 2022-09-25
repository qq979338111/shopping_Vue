//home 模块的小仓库

import { reqCategoryList } from '@/api'

const state = {
  categoryList: []
}
//mutations 修改state
const mutations = {
  GATEGORYLIST (state, categoryList) {
    state.categoryList = categoryList;
  }
}
const actions = {
  //通过API里面的接口函数调用，向服务器发请求，获取服务器的数据
  async categoryList ({ commit }) {
    let result = await reqCategoryList()
    if (result.code == 200) {
      commit("GATEGORYLIST", result.data)
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
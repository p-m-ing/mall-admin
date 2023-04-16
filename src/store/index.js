import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 用户切换菜单的闭合状态 false 不闭合 true 闭合
    collapsed:false,
  },
  mutations: {
    changeCollapsed(state){
      console.log('mutations',state)
      state.collapsed=!state.collapsed
    }
  },
  actions: {
    changeCollapsedAction({commit}){
      // 调用 mutatons 里面的方法
      commit('changeCollapsed')
    }
  },
  modules: {
  }
})

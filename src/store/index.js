// 该文件用于创建vuex中最为核心的store
import Vue from 'vue'
import Vuex from 'vuex'
import user from "./user";

Vue.use(Vuex)

// 创建并暴露store

// 应该是vue的模块化
export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
	  // 这一句没有看懂，应该是从ministore/上下文中取了一个commit出来    
	  // 而且为什么对应的mutations中没有对应方法	  感觉格式不对，可能是我没有学全
	  // {} 这里是为了获取到最终的结果的简便
    clear({ commit }) {
      commit("$_removeStorage");
    }
  },
  modules: {
    user
  }
})

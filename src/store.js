import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sitemenu: [
      {"name": "products", "path": "/products"}, 
      {"name": "product", "path": "/product"}
    ]
  },
  mutations: {

  },
  actions: {

  }
})

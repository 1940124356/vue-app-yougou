import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import good from './modules/good'
import home from './modules/home'

export default new Vuex.Store({
  modules:{
    good:good,
    home:home
  }
})

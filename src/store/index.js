import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import goodlist from './modules/goodlist'
import home from './modules/home'

export default new Vuex.Store({
  modules:{
    good:goodlist,
    home:home
  }
})

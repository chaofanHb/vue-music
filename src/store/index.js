import Vue from 'vue'
import Vuex from 'vuex'
import Login from './modules/login'
import Find from './modules/find'
import Music from './modules/music'

Vue.use(Vuex)
const store = new Vuex.Store({
  // plugins: [createLogger()],
  modules: {
    Login,
    Find,
    Music
  }
})
export default store
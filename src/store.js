import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    is_login: false,
  },
  mutations: {
    setUser(state, currentUser) {
      state.user = currentUser;
    },
    setLogin(state, currentState){
      state.is_login = currentState;
    }
  },
  actions: {

  },
  plugins: [createPersistedState()]
})

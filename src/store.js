import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    is_login: false,
    userLevel: null,
    postTarget: 1
  },
  mutations: {
    setUser(state, currentUser) {
      state.user = currentUser;
    },
    setLogin(state, currentState) {
      state.is_login = currentState;
    },
    setUserLevel(state, currentLevel){
      state.userLevel = currentLevel;
    },
    setPostTarget(state, newTarget) {
      state.postTarget = newTarget;
      console.log(state.postTarget);
    }
  },
  actions: {},
  plugins: [createPersistedState()]
});

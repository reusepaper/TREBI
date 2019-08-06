import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import { stat } from "fs";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    is_login: false,
    userLevel: null,
    postTarget: 1,
    modal_style: {
      display: "none"
    },
    adminPage: null,
    navbarstate: false,
    messages: [],
    modal_remoter: false,
    isPostShow: true,
    Child1:false,
    Child2:true,
    Child3:true
  },
  mutations: {
    setUser(state, currentUser) {
      state.user = currentUser;
    },
    setLogin(state, currentState) {
      state.is_login = currentState;
    },
    setUserLevel(state, currentLevel) {
      state.userLevel = currentLevel;
    },
    setPostTarget(state, newTarget) {
      state.postTarget = newTarget;
    },
    setModalStyle(state, currentState) {
      state.modal_style.display = currentState;
    },
    setAdminPAge(state, CurrnetAdminPage) {
      state.adminPage = CurrnetAdminPage;
    },
    setNavbarState(state, currentNavbar) {
      state.navbarstate = currentNavbar;
    },
    getMessages() {},
    setMessages(state) {
      state.messages = [];
    },
    upMessages(state, newMessage) {
      state.messages.push(newMessage);
    },
    setModalRemote(state) {
      state.modal_remoter = !state.modal_remoter;
    },
    toggleIsPostShow(state) {
      state.isPostShow = !state.isPostShow;
    },
    toggleFirstChildShow(state){
      console.log("toggleFirstChildShow 시작",state.Child1);
      state.Child1 = !state.Child1;
      console.log("여기까지는 왔음",state.Child1);
    },
    closeChildShow(state){
      state.Child1= false;
      console.log("closeChildShow 실행",state.Child1);
    }
  },
  getters: {
    getNavbarState: function(state) {
      return state.navbarstate;
    }
  },
  actions: {},
  plugins: [createPersistedState()]
});

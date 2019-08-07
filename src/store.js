import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

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
    Child1: false,
    Child2: true,
    Child3: true,
    PostPopupIndex: 1,
    nowDisplayMemberIndex: 1,
    nowDisplayMember: "이주호"
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
      console.log(state.postTarget);
    },
    setModalStyle(state, currentState) {
      state.modal_style.display = currentState;
    },
    setAdminPAge(state, CurrnetAdminPage) {
      state.adminPage = CurrnetAdminPage;
      console.log(state.adminPage);
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
    toggleFirstChildShow(state) {
      state.Child1 = !state.Child1;
    },
    closeChildShow(state) {
      state.Child1 = false;
    },
    setNowDisplayMemberIndex(state, index) {
      state.nowDisplayMemberIndex = index;
    },
    setPostPopupIndex(state, index) {
      state.PostPopupIndex = index;
    },
    setNowDisplayMember(state, value) {
      state.nowDisplayMember = value;
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

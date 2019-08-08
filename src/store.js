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
    reply: {},
    modal_remoter: false,
    isPostShow: true,
    Child1: true,
    Child2: true,
    Child3: true,
    PostPopupIndex: 1,
    nowDisplayMemberIndex: 1,
    nowDisplayMember: "이주호",
    nowDisplayMemberInfo: null,
    gitGraphData: [],
    nowDisplayPost: ""
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
    setMessages(state) {
      state.messages = [];
    },
    upMessages(state, newMessage) {
      state.messages.push(newMessage);
    },
    setReply(state, newReply) {
      state.reply = newReply;
    },
    setModalRemote(state) {
      state.modal_remoter = !state.modal_remoter;
    },
    toggleIsPostShow(state) {
      state.isPostShow = !state.isPostShow;
    },
    toggleNthChildShow(state, msg) {
      console.log("메세지", msg);
      if (msg == 1) {
        state.Child1 = !state.Child1;
      } else if (msg == 2) {
        state.Child2 = !state.Child2;
      } else if (msg == 3) {
        state.Child3 = !state.Child3;
      }
    },
    closeChildShow(state) {
      state.Child1 = false;
    },
    setPostPopupIndex(state, index) {
      state.PostPopupIndex = index;
    },
    setNowDisplayMember(state, value) {
      state.nowDisplayMember = value;
    },
    setNowDisplayMemberIndex(state, index) {
      state.nowDisplayMemberIndex = index;
    },
    setGitGraphData(state, value) {
      state.gitGraphData[value.index] = {
        githubId: value.githubId,
        commitCount: value.commitCount
      };
    },
    clearGitGraphData(state) {
      state.gitGraphData = [];
    },
    setNowDisplayPost(state, value) {
      state.nowDisplayPost = value;
    },
    setNowDisplayMemberInfo(state, value) {
      state.nowDisplayMemberInfo = value;
    }
  },
  getters: {
    getNavbarState: function(state) {
      return state.navbarstate;
    },
    getPostShow: function(state){
      return state.isPostShow;
    }
  },
  actions: {},
  plugins: [createPersistedState()]
});

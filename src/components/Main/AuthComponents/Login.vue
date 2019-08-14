<template>
  <div>
    <div id="firebaseui-auth-container"></div>
    <!-- <LoadingPage id='loader'></LoadingPage> -->
  </div>
</template>

<script>
import FirebaseService from "@/services/FirebaseService";
import * as firebaseui from "firebaseui";
import * as firebase from "firebase/app";
import "firebase/messaging";

const auth = firebase.auth();
const ui = new firebaseui.auth.AuthUI(auth);

export default {
  data() {
    return {
      loginUser: null,
      userLevel: null,
      firebaseUser: null,
      token: ""
    };
  },
  methods: {
    initUI: function() {
      // template에 존재하는 div에 ui.start 명령어를 사용하면 firebaseui가 알아서 그려준다.
      ui.start("#firebaseui-auth-container", {
        // 현재 사용하는 옵션은 이메일 로그인만 사용한다.
        signInFlow: "popup",
        signInoptions: [
          // firebase.auth.EmailAuthProvider.PROVIDER_ID,
          {
            // Google provider must be enabled in Firebase Console to support one-tap
            // sign-up.
            provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            // Required to enable this provider in one-tap sign-up.
            authMethod: "https://accounts.google.com",
            // Required to enable ID token credentials for this provider.
            // This can be obtained from the Credentials page of the Google APIs
            // console.
            clientId:
              "69251272917-2i4rh8vhu923bth3ps4rr0rmm3dfjs9k.apps.googleusercontent.com"
          },
          firebase.auth.GithubAuthProvider.PROVIDER_ID,
          {
            provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            scopes: ["public_profile", "email"],
            customParameters: {
              // Forces password re-entry.
              auth_type: "reauthenticate"
            }
          }
        ],
        credentialHelper: [firebaseui.auth.CredentialHelper.NONE],
        callbacks: {
          // 로그인이 성공하면,
          signInSuccessWithAuthResult: (authResult, redirectUrl) => {
            this.updateCurrentUser();
            return false;
          }
        }
      });
    },
    // 현재 유저 veux에 저장 및 firebase 비교.
    async updateCurrentUser() {
      // 로그인 정보를 각각의 data에 저장한다.

      await this.$store.commit("setModalStyle", "none");
      await auth.onAuthStateChanged(user => {
        this.loginUser = user;
        // this.$store.commit("setProfileImage", user.photoURL);
      });
      this.firebaseUser = await FirebaseService.getisSignup(this.loginUser.uid);
      // await console.log(this.firebaseUser)
      if (this.firebaseUser.length == 0) {
        await FirebaseService.createUser(
          this.loginUser.uid,
          this.loginUser.displayName,
          this.loginUser.email.toString(),
          "visitor",
          new Date(),
          this.loginUser.photoURL
        );
        this.userLevel = "visitor";
      } else {
        this.userLevel = this.firebaseUser[0].level;
      }
      this.firebaseUser = await FirebaseService.getisSignup(this.loginUser.uid);
      if (this.firebaseUser.photoURL == null) {
        await FirebaseService.updateUserPhotoURL(
          this.loginUser.uid,
          this.loginUser.photoURL
        );
      }
      if (this.firebaseUser.localMessagingToken == null && localStorage.getItem('localMessagingToken')){
        await FirebaseService.updateUserMessagingToken(
          this.loginUser.uid,
          localStorage.getItem('localMessagingToken')
        )
      }
      // pushToken이 있는지 체크하고 없으면 넣기
      await firebase
        .messaging()
        .getToken()
        .then(token => {
          if (token && this.firebaseUser[0].pushToken == null)
            FirebaseService.updateUserPushToken(this.loginUser.uid, token);
        });
      await this.$store.commit("setLogin", true);
      await this.$store.commit("setUser", this.loginUser);
      await this.$store.commit("setUserLevel", this.userLevel);
      // await console.log(this.$store.state.userLevel);
      // await window.location.reload();
    },
    checkIsSignup: function(currentUser) {
      // console.log(this.allUsers);
      if (currentUser == null) return true;
      for (let i = 0; i < this.allUsers.length; i++) {
        if (this.allUsers[i].uid == currentUser.uid) {
          this.userLevel = this.allUsers[i].level;
          return true;
        }
      }
      return false;
    }
  },
  mounted: function() {
    // 현재 로그인한 회원의 정보를 알 수 있는 함수이다. 존재하면 딕셔너리가, 아니면 null값이 나온다.
    if (this.$store.state.user == null) {
      this.initUI();
    }
  }
};
</script>
<style>
#firebaseui-auth-container {
  /* background-color: #f7f7f7; */
  width: 312px;
  padding: 5px 0px;
}
</style>

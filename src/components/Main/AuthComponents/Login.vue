<template>
  <div>
    <div id="firebaseui-auth-container"></div>
    <!-- <LoadingPage id='loader'></LoadingPage> -->
  </div>
</template>

<script>
import * as firebaseui from 'firebaseui'
import * as firebase from "firebase/app"
const config = {
  apiKey: "AIzaSyCBToAXiNSn5EIUwm0AbYF3jtRJkzGQRs8",
  authDomain: "webmobile-sub2-510fa.firebaseapp.com",
  databaseURL: "https://webmobile-sub2-510fa.firebaseio.com",
  projectId: "webmobile-sub2-510fa",
  storageBucket: "",
  messagingSenderId: "69251272917",
  appId: "1:69251272917:web:e3d748f5c506995f"
};
firebase.initializeApp(config);
const auth = firebase.auth();
const ui = new firebaseui.auth.AuthUI(auth);

export default {
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
            // 로그인 정보를 각각의 data에 저장한다.
            auth.onAuthStateChanged(user => {
              this.$store.commit("setUser", user);
              this.$store.commit("setLogin", true);
              // this.$store.commit("setProfileImage", user.photoURL);
            });
            console.log(this.$store.state.user)
            console.log("ok");
            return false;
          }
        }
      });
      
    }
    
  },
  mounted: function() {
    // 현재 로그인한 회원의 정보를 알 수 있는 함수이다. 존재하면 딕셔너리가, 아니면 null값이 나온다.
    
    if (this.$store.state.user == null) {
      this.initUI();
    }
  }
}
</script>
<style>

</style>

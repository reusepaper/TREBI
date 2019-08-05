<template>
  <button @click="logout" class="authButton">Logout</button>

</template>

<script>
import * as firebase from "firebase/app"
import authcontain from "../AuthContain"

const auth = firebase.auth();

export default {
  name: "Logout",
  methods:{
    logout: function() {
      this.logoutCurrentUser();
      // window.location.reload();
    },
    async logoutCurrentUser(){
      auth.signOut();
      this.$store.commit("setUser", null);
      this.$store.commit("setUserLevel", null);
      await this.$store.commit("setLogin", false);
    }
  }
}
</script>

<style>

</style>

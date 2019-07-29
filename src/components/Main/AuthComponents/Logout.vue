<template>
  <button @click="logout" class="authButton">Logout</button>

</template>

<script>
import * as firebase from "firebase/app"

const auth = firebase.auth();

export default {
  name: "Logout",
  methods:{
    logout: function() {
      this.logoutCurrentUser();
      // window.location.reload();
    },
    async logoutCurrentUser(){
      await auth.signOut();
      await this.$store.commit("setUser", null);
      await this.$store.commit("setLogin", false);
      await this.$store.commit("setUserLevel", null);
    }
  }
}
</script>

<style>

</style>

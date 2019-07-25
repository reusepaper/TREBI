<template>
  <div id="authcontainer-out">
    <div id="authcontainer-in" >
      <h1 v-if="this.$store.state.is_login == false">Log In</h1>
      <UserContext v-if="this.$store.state.is_login"></UserContext>
      <Login v-else></Login>
    </div>
  </div>
</template>

<script>
import Login from "./AuthComponents/Login";
import UserContext from './AuthComponents/UserContext';

export default {
  data() {
    return {
    }
  },
  components: {
    Login,
    UserContext
  },
  mounted: function(){
    console.log(this.$store.state.user)
    // console.log(this.$store.state.is_login);
  }
}
</script>

<style>
.authButton {
  background-color: white;
  border: 1px #8ee468 solid;
  color: #1d9436;
  padding: 3px;
  border-radius: 5px;
}

#authcontainer-out {
  text-align: center;
}
#authcontainer-in {
  display:inline-block;
}
</style>

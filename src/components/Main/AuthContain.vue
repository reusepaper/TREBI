<template>
  <div>
    <h1>Log In</h1>
    <UserContext v-if="this.$store.state.is_login"></UserContext>
    <Login v-else></Login>
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
    // console.log(this.$store.state.user)
    // console.log(this.$store.state.is_login);
  }
}
</script>

<style>

</style>

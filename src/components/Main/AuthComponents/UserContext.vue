<template>
  <div>
    <h1>{{this.$store.state.user === null ? "guest" : this.$store.state.user.displayName}}님 환영합니다.</h1>
    <Logout></Logout>
  </div>
</template>

<script>
import Logout from './Logout';

export default {
  components:{
    Logout
  }
}
</script>

<style>

</style>

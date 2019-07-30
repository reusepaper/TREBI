<template>
  <div id="userContext-container">
    <div>
      <img v-if="this.$store.state.user" id="profile_img" :src='this.$store.state.user.photoURL'/>
      <img v-else id="profile_img" src='https://scontent-nrt1-1.cdninstagram.com/vp/14e487ffcb73b4d07dd6cf3dd7688afb/5DA39AF1/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent-nrt1-1.cdninstagram.com'/>
    </div>
    <div id="userContent-content">
      <h1>{{this.$store.state.user === null ? "guest" : this.$store.state.user.displayName}}님 환영합니다.</h1>
      <div class="authButtons">
        <Logout></Logout>
        <profileButton></profileButton>
        <adminButton v-if="this.$store.state.userLevel=='maintainer'"></adminButton>
      </div>
    </div>
  </div>
</template>

<script>
import Logout from './Logout';
import profileButton from './modify_profile'
import adminButton from './adminButton'

export default {
  data() {
    return{
      photoURL
    }
  },
  components:{
    Logout,
    profileButton,
    adminButton
  }
}
</script>

<style>
#userContext-container {
  margin-top: 15px;
  /* background-color: #f7f7f7; */
  display: grid;
  grid-template-columns: 2fr 3fr;
}
#profile_img {
  width: 150px;
  height: 200px;
}
#userContent-content {
  padding-right: 10px;
}
.authButtons {
  margin-top: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
}
</style>

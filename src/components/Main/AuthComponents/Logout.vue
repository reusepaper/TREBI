<template>
  <button @click="logout">Logout</button>

</template>

<script>
export default {
  name: "Logout",
  methods:{
    logout: function() {
      this.$store.commit("setUser", null);
      this.$store.commit("setLogin", false);
      auth.signOut();
      // window.location.reload();
    },
  }
}
</script>

<style>

</style>

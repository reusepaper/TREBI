<template>
  <button v-on:click="mainPage" class="adminTittlebtn">
    <div style="height: 50px; display: table;">
      <img class="sidebarLogo" src="../../../assets/admin.png" />
      <span class="sidebarTitle">TREBI Admin</span>
    </div>
  </button>
</template>

<script>
export default {
  methods: {
    mainPage: function() {
      this.$store.state.adminPage = "Main";
    }
  }
};
</script>

<style>
.sidebarLogo {
  width: 50px;
  height: 50px;
  float: left;
  display: table-cell;
  vertical-align: middle;
  margin-right: 10px;
}

.sidebarTitle {
  display: inline-block;
  font-size: 25px;
  color: #ffffff;
  /* padding-left: 20px; */
  display: table-cell;
  vertical-align: middle;
  padding: 0px;
}

.adminTittlebtn {
  outline: 0;
  border: 0;
  background: 0;
  width: 100%;
  padding: 20px;
  text-align: left;
  cursor: pointer;
}
.adminTittlebtn:hover {
  background-color: #324558;
}
</style>

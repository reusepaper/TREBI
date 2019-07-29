<template>
  <div class="adminPageGrid">
    <AdminSideBar></AdminSideBar>
    <AdminMainContain></AdminMainContain>
  </div>
</template>

<script>
import AdminMainContain from "../components/Admin/AdminMainContain";
import AdminSideBar from "../components/Admin/AdminSideBar";

export default {
  components: {
    AdminMainContain,
    AdminSideBar
  }
};
</script>

<style>
.adminPageGrid {
  display: grid;
  grid-template-columns: 2fr 8fr;
}
</style>

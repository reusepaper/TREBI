<template>
  <div class="adminPageGrid">
    <AdminSideBarContain></AdminSideBarContain>
    <AdminMainContain></AdminMainContain>
  </div>
</template>

<script>
import AdminMainContain from "../components/Admin/AdminMainContain";
import AdminSideBarContain from "../components/Admin/AdminSideBarContain";

export default {
  components: {
    AdminMainContain,
    AdminSideBarContain
  }
};
</script>

<style>
.adminPageGrid {
  display: grid;
  grid-template-columns: 2fr 8fr;
}
</style>

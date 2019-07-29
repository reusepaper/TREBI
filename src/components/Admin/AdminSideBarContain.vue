<template>
  <div class="sideBar">
    <div style="margin: 20px; height: 100%;">
      <AdminTitle></AdminTitle>
      <AuthContain></AuthContain>
      <PostContain></PostContain>
      <Analistics></Analistics>
    </div>
  </div>
</template>

<script>
import AdminTitle from "./SidebarComponents/AdminTitle";
import AuthContain from "./SidebarComponents/AuthContain";
import PostContain from "./SidebarComponents/PostContain";
import Analistics from "./SidebarComponents/Analistics";

export default {
  components: {
    AdminTitle,
    AuthContain,
    PostContain,
    Analistics
  }
};
</script>

<style>
.sideBar {
  height: 100vw;
  background-color: #262f3d;
}
</style>

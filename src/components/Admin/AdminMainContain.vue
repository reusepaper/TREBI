<template>
  <div>
    <AdminMain v-show="this.$store.state.adminPage==='Main'"></AdminMain>
    <div class="adminMainPageGrid" v-show="this.$store.state.adminPage!=='Main'">
      <div
        style=" margin-left: 40px; border-bottom: 3px solid #262F3D; box-shadow: 5px 3px 4px #6a88a6;"
      >
        <span class="adminMainTitle" v-show="this.$store.state.adminPage==='AllUser'">
          All User List
          <img src="../../assets/settings.png" style="width: 45px;" />
        </span>
        <span class="adminMainTitle" v-show="this.$store.state.adminPage==='Admin'">
          Admin User List
          <img src="../../assets/settings.png" style="width: 45px;" />
        </span>
        <span class="adminMainTitle" v-show="this.$store.state.adminPage==='Visitor'">
          Member and Visitor List
          <img src="../../assets/settings.png" style="width: 45px;" />
        </span>
        <span class="adminMainTitle" v-show="this.$store.state.adminPage==='PostList'">
          Post List
          <img src="../../assets/settings.png" style="width: 45px;" />
        </span>
        <span class="adminMainTitle" v-show="this.$store.state.adminPage==='PortfolioList'">
          Portfolio List
          <img src="../../assets/settings.png" style="width: 45px;" />
        </span>
      </div>
      <div>
        <AdminMainTable v-show="this.$store.state.adminPage==='AllUser'"></AdminMainTable>
        <AdminUsersTable v-show="this.$store.state.adminPage==='Admin'"></AdminUsersTable>
        <VisitorUsersTable v-show="this.$store.state.adminPage==='Visitor'"></VisitorUsersTable>
        <PostList v-show="this.$store.state.adminPage==='PostList'"></PostList>
        <PortfolioList v-show="this.$store.state.adminPage==='PortfolioList'"></PortfolioList>
      </div>
    </div>
  </div>
</template>

<script>
import AdminMain from "./MainComponents/AdminMain";
import AdminMainTable from "./MainComponents/AuthComponents/AllUser";
import AdminUsersTable from "./MainComponents/AuthComponents/AdminUsers";
import VisitorUsersTable from "./MainComponents/AuthComponents/VisitorUsers";
import PostList from "./MainComponents/PostComponents/PostList";
import PortfolioList from "./MainComponents/PostComponents/PortfolioList";

export default {
  components: {
    AdminMain,
    AdminMainTable,
    AdminUsersTable,
    VisitorUsersTable,
    PostList,
    PortfolioList
  },
  data() {
    return {
      currentPage: this.$store.state.adminPage
    };
  }
};
</script>

<style>
.adminMainPageGrid {
  display: grid;
  grid-template-rows: 2fr 12fr;
}

.adminMainTitle {
  font-size: 60px;
  font-weight: 900;
  color: #262f3d;
  margin-top: 10px;
  text-shadow: 3px 3px 4px #6a88a6;
}
</style>

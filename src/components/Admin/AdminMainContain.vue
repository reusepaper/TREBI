<template>
  <div class="admin__main">
    <AdminMain v-show="this.$store.state.adminPage==='Main'"></AdminMain>
    <div class="adminMainPageGrid" v-show="this.$store.state.adminPage!=='Main'">
      <div
        class="admin__title"
        style=" margin-left: 40px; border-bottom: 3px solid #262F3D; box-shadow: 5px 3px 4px #6a88a6;"
      >
        <span class="adminMainTitle" v-show="this.$store.state.adminPage==='AllUser'">
          All User List
          <img
            src="../../assets/settings.png"
            srcset="../../assets/settings.png 1x, ../../assets/settings.png 2x"
            style="width: 45px;"
            alt="Setting"
          />
        </span>
        <span class="adminMainTitle" v-show="this.$store.state.adminPage==='Admin'">
          Admin User List
          <img
            src="../../assets/settings.png"
            srcset="../../assets/settings.png 1x, ../../assets/settings.png 2x"
            style="width: 45px;"
            alt="Setting"
          />
        </span>
        <span class="adminMainTitle" v-show="this.$store.state.adminPage==='Visitor'">
          Member and Visitor List
          <img
            src="../../assets/settings.png"
            style="width: 45px;"
            srcset="../../assets/settings.png 1x, ../../assets/settings.png 2x"
            alt="Setting"
          />
        </span>
        <span class="adminMainTitle" v-show="this.$store.state.adminPage==='PostList'">
          Post List
          <img
            src="../../assets/settings.png"
            srcset="../../assets/settings.png 1x, ../../assets/settings.png 2x"
            style="width: 45px;"
            alt="Setting"
          />
        </span>
        <span class="adminMainTitle" v-show="this.$store.state.adminPage==='PortfolioList'">
          Portfolio List
          <img
            src="../../assets/settings.png"
            srcset="../../assets/settings.png 1x, ../../assets/settings.png 2x"
            style="width: 45px;"
            alt="Setting"
          />
        </span>
      </div>
      <div class="admin__content">
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
  width: 100%;
  display: block;
  height: 100vh;
}

@media screen and (max-width: 700px) {
  .admin__main {
    overflow-y: scroll;
  }
}

@media screen and (min-width: 700px) {
  .admin__main {
    overflow: hidden;
  }
}

.admin__title {
  height: 15%;
  font-size: 60px;
  font-weight: 900;
  color: #262f3d;
  margin-top: 10px;
  text-shadow: 3px 3px 4px #6a88a6;
}

.admin__content {
  height: 85%;
}
</style>

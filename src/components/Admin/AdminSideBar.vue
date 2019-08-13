<template>
  <div class="sideBar">
    <div style="height: 100%;">
      <!-- Admin Sidebar Title -->
      <AdminTitle style="padding-top: 20px;"></AdminTitle>
      <!-- Accordion 형식으로 구현한 메뉴 List -->
      <div class="accordion vertical">
        <ul>
          <li>
            <input type="checkbox" id="checkbox-1" name="checkbox-accordion" />
            <label for="checkbox-1" style="padding-left: 20px;">
              <div style="display: table;">
                <img
                  src="../../assets/user.png"
                  srcset="../../assets/user.png 1x, ../../assets/user.png 2x"
                  style="color:white; display: table-cell; vertical-align: middle; width:30px; display:inline; margin-right: 10px;"
                  alt="User Logo"
                />
                <span
                  style="display: table-cell; vertical-align: middle; display:inline;"
                >Authentications</span>
              </div>
            </label>
            <div class="content" style="padding: 0px">
              <div style="display: table; width:100%;">
                <button v-on:click="viewAllUser" class="menuDetailBtn">
                  <span>All User List</span>
                </button>
              </div>
              <div style="display: table; width:100%;">
                <button v-on:click="viewAdmin" class="menuDetailBtn">Admin User List</button>
              </div>
              <div style="display: table; width:100%;">
                <button v-on:click="viewVisitor" class="menuDetailBtn">Member and Visitor List</button>
              </div>
            </div>
          </li>
          <li>
            <input type="checkbox" id="checkbox-2" name="checkbox-accordion" />
            <label for="checkbox-2" style="padding-left: 20px;">
              <div style="display: table;">
                <img
                  src="../../assets/note.png"
                  srcset="../../assets/note.png 1x, ../../assets/note.png 2x"
                  style="color:white; display: table-cell; vertical-align: middle; width:30px; display:inline; margin-right: 10px;"
                  alt="Posts"
                />
                <span style="display: table-cell; vertical-align: middle; display:inline;">Post</span>
              </div>
            </label>
            <div class="content" style="padding: 0px;">
              <div style="display: table; width:100%;">
                <button v-on:click="viewPostList" class="menuDetailBtn">Post List</button>
              </div>
              <div style="display: table; width:100%;">
                <button v-on:click="viewPortfolioList" class="menuDetailBtn">Portfolio List</button>
              </div>
            </div>
          </li>
          <li class="AnalyticsBtnLi">
            <button
              class="AnalyticsBtn"
              onclick="window.open('https://analytics.google.com/analytics/web/?utm_source=marketingplatform.google.com&utm_medium=et&utm_campaign=marketingplatform.google.com%2Fabout%2Fanalytics%2F#/report-home/a143603759w204989459p198246038')"
            >
              <div style="display: table;">
                <img
                  src="../../assets/googleAnalytics.png"
                  srcset="../../assets/googleAnalytics.png 1x, ../../assets/googleAnalytics.png 2x"
                  width="30px;"
                  class="AnalyticsImg"
                  alt="Google Analytics Logo"
                />
                <span style="display: table-cell; vertical-align: middle">Google Analytics</span>
              </div>
            </button>
          </li>
          <li class="TrebiBtnLi">
            <button
              class="TrebiBtn"
              onclick="location.href='https://webmobile-sub2-510fa.firebaseapp.com/' "
            >
              <div style="display: table;">
                <img
                  src="../../assets/trebiMain.png"
                  srcset="../../assets/trebiMain.png 1x, ../../assets/trebiMain.png 2x"
                  width="40px;"
                  class="TrebiImg"
                  alt="Trebi Logo"
                />
                <span style="display: table-cell; vertical-align: middle">TREBI Main</span>
              </div>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import AdminTitle from "./SidebarComponents/AdminTitle";

export default {
  components: {
    AdminTitle
  },
  methods: {
    viewMain: function() {
      this.$store.state.adminPage = "Main";
    },
    viewAdmin: function() {
      this.$store.state.adminPage = "Admin";
    },
    viewVisitor: function() {
      this.$store.state.adminPage = "Visitor";
    },
    viewAllUser: function() {
      this.$store.state.adminPage = "AllUser";
    },
    viewPostList: function() {
      this.$store.state.adminPage = "PostList";
    },
    viewPortfolioList: function() {
      this.$store.state.adminPage = "PortfolioList";
    }
  },
  created() {
    this.viewMain();
  }
};
</script>

<style>
.TrebiBtnLi {
  height: 60px;
  border-top: 1px solid #404854;
  border-bottom: 1px solid #404854;
  text-transform: uppercase;
  font-weight: 700;
}

.TrebiBtn {
  padding-left: 15px;
  text-align: left;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  color: #ffffff;
  background-color: #262f3d;
  font-weight: 700;
  cursor: pointer;
  text-transform: uppercase;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
}
.TrebiImg {
  background-color: none;
  margin-right: 5px;
}

.TrebiBtn:hover {
  background-color: #324558;
}
/* Google Analytics 링크 Btn Style */
.AnalyticsBtnLi {
  height: 60px;
  border-top: 1px solid #404854;
  border-bottom: 1px solid #404854;
  text-transform: uppercase;
  font-weight: 700;
}

.AnalyticsBtn {
  padding-left: 20px;
  text-align: left;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  color: #ffffff;
  background-color: #262f3d;
  font-weight: 700;
  cursor: pointer;
  text-transform: uppercase;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
}
.AnalyticsImg {
  background-color: none;
  margin-right: 10px;
}

/* detail menu */
.menuDetailBtn {
  padding-left: 20px;
  color: white;
  height: 32px;
  display: table-cell;
  vertical-align: middle;
  width: 100%;
  text-decoration: none;
  text-align: left;
  border: 0;
  outline: 0;
  background: #19212b;
}

.menuDetailBtn:hover {
  background-color: #324558;
  cursor: pointer;
}

.AnalyticsBtn:hover {
  background-color: #324558;
}

/* 전체 Sidebar */
.sideBar {
  height: 100vh;
  background-color: #262f3d;
}

/* Accordion Sidebar 구현 */
.accordion {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  background: #19212b;
}
.accordion ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.accordion li {
  border-top: 1px solid #404854;
  border-bottom: 1px solid #404854;
  margin: 0;
  padding: 0;
}
.accordion [type="radio"],
.accordion [type="checkbox"] {
  display: none;
}
.accordion label {
  display: block;
  font-size: 16px;
  line-height: 42px;
  background: #262f3d;
  color: #ffffff;
  font-weight: 700;
  cursor: pointer;
  text-transform: uppercase;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
}
.accordion ul li label:hover,
.accordion [type="radio"]:checked ~ label,
.accordion [type="checkbox"]:checked ~ label {
  background-color: #19212b;
  color: #fff;
}
.accordion .content {
  padding: 0 10px;
  overflow: hidden;
  -webkit-transition: all 0.5s ease-out;
  -moz-transition: all 0.5s ease-out;
}
.accordion p {
  color: #333;
  margin: 0 0 10px;
}
.accordion h3 {
  padding: 0;
  margin: 10px 0;
}

/* Vertical */
.vertical ul li {
  overflow: hidden;
}
.vertical ul li label {
  padding: 10px;
}
.vertical [type="radio"]:checked ~ label,
.vertical [type="checkbox"]:checked ~ label {
  border-bottom: 0;
}
.vertical ul li label:hover {
  background-color: #324558; /* We don't want the border to disappear on hover */
}
.vertical ul li .content {
  height: 0px;
  border-top: 0;
}
.vertical [type="radio"]:checked ~ label ~ .content,
.vertical [type="checkbox"]:checked ~ label ~ .content {
  height: 150px;
}
</style>

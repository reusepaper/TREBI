<template>
  <div class="sideBar">
    <div style="height: 100%;">
      <!-- Admin Sidebar Title -->
      <AdminTitle style="margin-left: 20px; padding-top: 20px;"></AdminTitle>

      <!-- Accordion 형식으로 구현한 메뉴 List -->
      <div class="accordion vertical">
        <ul>
          <li>
            <input type="checkbox" id="checkbox-1" name="checkbox-accordion" />
            <label for="checkbox-1" style="padding-left: 20px;">Authentication</label>
            <div class="content" style="padding: 0px">
              <div class="menuDetailBtn">All User List</div>
              <div class="menuDetailBtn">Admin User List</div>
              <div class="menuDetailBtn">User Add</div>
            </div>
          </li>
          <li>
            <input type="checkbox" id="checkbox-2" name="checkbox-accordion" />
            <label for="checkbox-2" style="padding-left: 20px;">Post</label>
            <div class="content" style="padding: 0px;">
              <div class="menuDetailBtn">Post List</div>
              <div class="menuDetailBtn">Portfolio List</div>
            </div>
          </li>
          <li class="AnalyticsBtnLi">
            <button
              class="AnalyticsBtn"
              onclick="window.open('https://analytics.google.com/analytics/web/?utm_source=marketingplatform.google.com&utm_medium=et&utm_campaign=marketingplatform.google.com%2Fabout%2Fanalytics%2F#/report-home/a143603759w204989459p198246038')"
            >
              <img src="../../assets/googleAnalytics.png" width="30px;" class="AnalyticsImg" />
              <span>Google Analytics</span>
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
  }
};
</script>

<style>
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
}

.menuDetailBtn:hover {
  background-color: #324558;
}

.AnalyticsBtn:hover {
  background-color: #324558;
}

/* 전체 Sidebar */
.sideBar {
  height: 100vw;
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

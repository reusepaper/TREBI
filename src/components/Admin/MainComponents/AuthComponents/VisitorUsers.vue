<template>
  <div>
    <div style="margin-top: 20px; padding-right: 40px; text-align: right;">
      <span>total User: {{usersNum}}</span>
    </div>
    <table>
      <thead>
        <tr>
          <th>User Id</th>
          <th>Created At</th>
          <th>Level</th>
          <th>Name</th>
          <th>Post Cnt</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="oneUser in allUsers" style="border-bottom: solid 1px #ccc;">
          <!-- {{oneUser}} -->
          <td>{{oneUser.eamil}}</td>
          <td
            v-for="field, key in oneUser"
            v-if="typeof(field) === 'object'"
          >{{formatDate(field.toDate())}}</td>
          <td v-else-if="key === 'level'">
            <select v-bind:id="oneUser.uid" class="level_select">
              <!-- <option value disabled selected>수정</option> -->
              <option
                v-for="level in userLevel"
                v-bind:selected="oneUser.level == level"
                :value="level"
              >{{ levelKor[level] }}</option>
            </select>
            <button id="select_button" @click="changeLevel(oneUser)">변경</button>
          </td>
          <td v-else-if="key === 'uid'" style="display:none"></td>
          <td v-else-if="key === 'pushToken'" style="display:none"></td>
          <td>{{oneUser.displayName}}</td>
          <td>{{oneUser.post}}</td>
          <td>
            <button
              @click="delete_event(oneUser)"
              style="border: 0; outline: 0;background: none; cursor:pointer;"
            >
              <img
                src="../../../../assets/userDelete.png"
                srcset="../../../../assets/userDelete.png 1x, ../../../../assets/userDelete.png 2x"
                alt="User Delete"
              />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import firebaseService from "@/services/FirebaseService";
export default {
  data() {
    return {
      selectLevel: "",
      allUsers: [],
      usersNum: 0,
      userLevel: ["maintainer", "member", "visitor"],
      levelKor: { maintainer: "관리자", member: "멤버", visitor: "방문자" }
    };
  },
  methods: {
    async getVisitorUsers() {
      this.allUsers = await firebaseService.getVisitorUsers();

      // console.log(this.allUsers);
      this.usersNum = this.allUsers.length;
    },
    formatDate(date) {
      var monthNames = [
        "1월",
        "2월",
        "3월",
        "4월",
        "5월",
        "6월",
        "7월",
        "8월",
        "9월",
        "10월",
        "11월",
        "12월"
      ];

      let day = date.getDate();
      let monthIndex = date.getMonth();
      let year = date.getFullYear();

      return year + "년 " + monthNames[monthIndex] + " " + day + "일";
    },
    async changeLevel(changeUser) {
      let change_user = document.getElementById(changeUser.uid);
      // console.log(changeUser);
      let change_level = change_user.options[change_user.selectedIndex].value;
      // console.log(change_level);
      let isUpdate = await firebaseService.updateUserLevel(
        changeUser.uid,
        change_level
      );
      await alert("변경되었습니다.");
      await this.getVisitorUsers();
    },
    delete_event(deleteUser) {
      if (confirm("정말 삭제하시겠습니까?") == true)
        this.deleteUser(deleteUser);
      // else console.log("아니에요!");
    },
    async deleteUser(deleteUser) {
      await firebaseService.deleteUser(deleteUser.uid);
      await this.getVisitorUsers();
    }
  },
  mounted: function() {
    this.getVisitorUsers();
  }
};
</script>

<style scoped>
table {
  margin: 50px 0px;
  border-collapse: collapse;
  text-align: left;
  line-height: 1.5;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  margin: 10px;
  margin-top: 5px;
}

table thead th {
  width: 150px;
  padding: 10px;
  font-weight: bold;
  vertical-align: top;
  color: #fff;
  background: #e7708d;
  margin: 20px 10px;
  text-align: center;
}

table tbody tr:hover {
  background: #ffddff;
}
table td {
  width: 350px;
  padding: 10px;
  vertical-align: top;
  text-align: center;
}

/* 
Max width before this PARTICULAR table gets nasty
This query will take effect for any screen smaller than 760px
and also iPads specifically.
*/
@media only screen and (max-width: 760px),
  (min-device-width: 768px) and (max-device-width: 1024px) {
  table {
    width: 100%;
  }

  /* Force table to not be like tables anymore */
  table,
  thead,
  tbody,
  th,
  td,
  tr {
    display: block;
  }

  /* Hide table headers (but not display: none;, for accessibility) */
  thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }

  tr {
    border: 1px solid #ebebeb;
  }

  td {
    /* Behave  like a "row" */
    border: none;
    border-bottom: 1px solid #eee;
    position: relative;
    padding-left: 50%;
  }

  td:before {
    /* Now like a table header */
    position: absolute;
    /* Top/left values mimic padding */
    top: 6px;
    left: 6px;
    width: 45%;
    padding-right: 10px;
    white-space: nowrap;
    /* Label the data */
    content: attr(data-column);

    color: #000;
    font-weight: bold;
  }
}
.level_field {
  font-weight: 400;
}

.level_select {
  width: 60%;
}
</style>

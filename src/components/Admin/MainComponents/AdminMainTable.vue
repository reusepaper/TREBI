<template>
  <div>
    <table>
      <thead>
        <tr>
          <th v-for="field in userFields">{{field}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="oneUser in allUsers">
          <!-- {{oneUser}} -->
          <td
            v-for="field, key in oneUser"
            v-if="typeof(field) === 'object'"
          >{{formatDate(field.toDate())}}</td>
          <td v-else-if="key === 'level'">
            {{field}}
            <br />
            <select v-bind:id="oneUser.uid" class="level_select">
              <!-- <option value disabled selected>수정</option> -->
              <option value="visitor">visitor</option>
              <option value="member">member</option>
              <option value="maintainer">maintainer</option>
            </select>
            <button id="select_button" @click="changeLevel(oneUser)">변경</button>
          </td>
          <td v-else>{{field}}</td>
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
      selectLevel: '',
      userFields: null,
      allUsers: []
    };
  },
  methods: {
    async getUserFields() {
      this.userFields = await firebaseService.getUserfield();
      // await console.log(this.userFields[0]);
      this.userFields = await this.userFields[0];
    },
    async getUsers() {
      this.allUsers = await firebaseService.getUsers();
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
    changeLevel: function(changeUser) {
      let change_user = document.getElementById(changeUser.uid);
      // console.log(changeUser);
      let change_level = change_user.options[change_user.selectedIndex].value;
      console.log(change_level);
      firebaseService.updateUserLevel(changeUser, change_level);
      
    },
  },
  mounted: function() {
    this.getUserFields();
    this.getUsers();
  }
};
</script>

<style scoped>
table {
  width: 800px;
  border-collapse: collapse;
  margin: 50px 0px;
}

/* Zebra striping */
tr:nth-of-type(odd) {
  background: #ebebeb;
}

th {
  background: #4f4e57;
  color: white;
  font-weight: bold;
}

td,
th {
  padding: 10px;
  border: 1px solid #ccc;
  text-align: left;
  font-size: 16px;
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
.level_select {
  width: 60%;
}
</style>

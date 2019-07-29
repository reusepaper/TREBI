<template>
  <div>
    <table>
      <thead>
        <tr>
          <th v-for="field in userFields">
            {{field}}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="oneUser in allUsers">
          <td v-for="field in oneUser" v-if="typeof(field) === 'object'">
            {{formatDate(field.toDate())}}
          </td>
          <td v-else>
            {{field}}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import firebaseService from '@/services/FirebaseService'
export default {
  data() {
    return{
      userFields: null,
      allUsers: [],

    }
  },
  methods: {
    async getUserFields(){
      this.userFields = await firebaseService.getUserfield();
      // await console.log(this.userFields[0]);
      this.userFields = await this.userFields[0]
    },
    async getUsers(){
      this.allUsers = await firebaseService.getUsers();
    },
    formatDate(date) {
      var monthNames = [
        "1월", "2월", "3월",
        "4월", "5월", "6월", "7월",
        "8월", "9월", "10월",
        "11월", "12월"
      ];

      var day = date.getDate();
      var monthIndex = date.getMonth();
      var year = date.getFullYear();

      return year + '년 ' + monthNames[monthIndex] + ' ' + day + '일';
    }
  },
  mounted: function(){
    this.getUserFields();
    this.getUsers();
  },

}
</script>

<style scoped>
table { 
	width: 800px; 
	border-collapse: collapse; 
	margin:50px 0px;
	}

/* Zebra striping */
tr:nth-of-type(odd) { 
	background: #eee; 
	}

th { 
	background: #4f4e57; 
	color: white; 
	font-weight: bold; 
	}

td, th { 
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
@media 
only screen and (max-width: 760px),
(min-device-width: 768px) and (max-device-width: 1024px)  {

	table { 
	  	width: 100%; 
	}

	/* Force table to not be like tables anymore */
	table, thead, tbody, th, td, tr { 
		display: block; 
	}
	
	/* Hide table headers (but not display: none;, for accessibility) */
	thead tr { 
		position: absolute;
		top: -9999px;
		left: -9999px;
	}
	
	tr { border: 1px solid #ebebeb; }
	
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
</style>

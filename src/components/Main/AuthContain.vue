<template>
  <div id="authcontainer-out">
    <div id="authcontainer-in" >
      <h1 v-if="this.$store.state.is_login == false">Log In</h1>
      <UserContext v-if="this.$store.state.is_login"></UserContext>
      <div v-else>
        <button id="myBtn" @click="button_click">로그인</button>
        <!-- The Modal -->
        <div id="myModal" class="modal" style="display:none" v-bind:style="this.$store.state.modal_style" @click.stop="close_modal">
          <!-- Modal content -->
          <div class="modal-content">
            <span class="close" @click="close_modal">&times;</span>
            <div @click.stop="button_click"><Login></Login></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Login from "./AuthComponents/Login";
import UserContext from './AuthComponents/UserContext';

// Get the modal
let modal = document.getElementById("myModal");
// Get the button that opens the modal
let btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];




export default {
  data() {
    return {
    }
  },
  components: {
    Login,
    UserContext
  },
  methods: {
    button_click(e){
      // this.modal_style.display = "block";
      this.$store.commit("setModalStyle", "block");
    },
    close_modal(e){
      // this.modal_style.display = "none";
      this.$store.commit("setModalStyle", "none");
    },
    
  },
}

</script>

<style>
.authButton {
  background-color: white;
  border: 1px #8ee468 solid;
  color: #1d9436;
  padding: 3px;
  border-radius: 5px;
}

#authcontainer-out {
  text-align: center;
}
#authcontainer-in {
  display:inline-block;
  margin-top:50px;
}
/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 320px;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  position: relative;
  top: -25px;
  right: -13px;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
</style>

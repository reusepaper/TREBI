<template>
  <div class="navbar">
    <a href="#" class="brand">TREBI</a>
    <div href="#" class="hambar icon" @click="toggleItems()">
      <i class="fa fa-bars"></i>
    </div>
    <ul id='hello'>
      <li><a href="#" class="nav-menu">Team</a></li>
      <li><a href="#" class="nav-menu">Member</a></li>
      <li><a href="#" class="nav-menu">Post</a></li>
      <li><a href="#" class="nav-menu">GitGraph</a></li>
      <li><a href="#" class="nav-menu">Contact</a></li>
      <li><a href="#" class="nav-menu">Login</a></li>
    </ul>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "HeaderContain",
  data:function(){
    liShow:true
  },
  methods:{
    showItems:function(){
      if(this.liShow==true){
          var w = window.innerWidth;
          if(w>900){ var x = document.getElementById("hello");
          x.style.display="flex";}else{
            x.style.display="none";
          }
      }
    },
    toggleItems:function(){
      var x = document.getElementById("hello");
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
      showItems();
    }
  }
}
</script>

<style scoped>
  .navbar{
    position: fixed;
    /* top:0; */
    width: 100%;
    height: 10vh;
    padding: 0 100px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 0.5s;
    z-index: 1;
  }
  .navbar ul {
    margin:0;
    padding:0;
    display:flex;
  }
  .navbar ul li{
    list-style: none;
  }
  .navbar ul li a, .navbar a{
    color: #fff;
    padding: 0 20px;
    font-size: 1.1em;
    text-decoration: none;
    font-weight: bold;
    font-family: Ubuntu;
    transition: 1s ease;
  }
  /* .navbar ul li:hover{
    border: 0.5px solid #fff;
    transform: rotateY(360deg);
  } */
  .navbar ul li:hover a{
    color:salmon;
  }

  a.brand {
    font-family: Ubuntu;
    font-size:1.8em;
    color:#fff;
    font-weight: bold;
    text-decoration: none;
    text-shadow: 
      1px 1px 1px #222222, 
      -1px 1px 1px #222222, 
      1px -1px 1px #222222, 
      -1px -1px 1px #222222,
      1px  1px 1px #555555;
  }

  a.brand, a.nav-menu {
    text-shadow: 
      1px 1px 1px #222222, 
      -1px 1px 1px #222222, 
      1px -1px 1px #222222, 
      -1px -1px 1px #222222,
      1px  1px 1px #555555;
  }
  .navbar .hambar{
    display: none;
  }
  @media screen and (max-width: 900px) {
    .navbar{
      display: block;
      text-align: center;
      margin: 10px auto;
    }
    .navbar ul{
      display:none;
    }
    .navbar .hambar{
      display: inline-flex;
      color: #fff;
    }
    #hello{
      font-size: 30px;
    }
  }
</style>

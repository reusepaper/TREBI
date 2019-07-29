<template>
  <div class="navbar">
    <a href="#" class="brand">TREBI</a>
    <ul>
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
  name: "HeaderContain"
}
</script>

<style scoped>
  .navbar{
    position:fixed;
    /* top:0; */
    width:100%;
    height:80px;
    padding: 0 100px;
    box-sizing:border-box;
    display:flex;
    justify-content: space-between;
    align-items: center;
    transition:0.5s;
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
  .navbar ul li a{
    color: #fff;
    padding: 0 20px;
    font-size: 1.1em;
    text-decoration: none;
    font-weight: bold;
    /* transition: 3s; */
  }
  .navbar ul li:hoveR{
    /* border: 0.5px solid #fff; */
    transform: rotateY(360deg);
  }

  a.brand {
    font-size:1.8em;
    color:#fff;
    font-weight: bold;
    text-decoration: none;
    text-shadow: 
      1px 1px 1px #222222, 
      -1px 1px 1px #222222, 
      1px -1px 1px #222222, 
      -1px -1px 1px #222222,
      1px  1px 5px #555555;
  }

  a.brand, a.nav-menu {
    text-shadow: 
      1px 1px 1px #222222, 
      -1px 1px 1px #222222, 
      1px -1px 1px #222222, 
      -1px -1px 1px #222222,
      1px  1px 5px #555555;
  }
</style>

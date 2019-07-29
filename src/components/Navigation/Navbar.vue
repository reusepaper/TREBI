<template>
  <div class="navbar">
    <a href="#" class="brand">TREBI</a>
    <ul>
      <li><a href="#">Team</a></li>
      <li><a href="#">Member</a></li>
      <li><a href="#">Post</a></li>
      <li><a href="#">GitGraph</a></li>
      <li><a href="#">Contact</a></li>
      <li><a href="#">Login</a></li>
    </ul> 
  </div>
</template>

<script type="text/javascript">
export default {
  
}
</script>

<style scoped>
  .navbar{
    position:fixed;
    top:0;
    width:100%;
    height:80px;
    padding: 0 100px;
    box-sizing:border-box;
    display:flex;
    justify-content: space-between;
    align-items: center;
    transition:0.5s;
  }
  .navbar ul {
    margin:0;
    padding:0;
    display:flex;
  }
  .navbar ul li{
    list-style: none;
    text-shadow: 
      1px  1px     #222, 
      -1px  1px     #222, 
      1px -1px     #222, 
      -1px -1px     #222
      1px  1px 5px #555;
  }
  .navbar ul li a{
    color: #fff;
    padding: 0 20px;
    font-size: 1.1em;
    text-decoration: none;
    font-weight: bold;
    transition: 3s;
    
  }
  .navbar ul li:hoveR{
    /* border: 0.5px solid #fff; */
    transform: rotateY(360deg);
  }

  .brand{
    font-size:1.8em;
    color:#fff;
    font-weight: bold;
    text-decoration: none;
    text-shadow: 
      1px  1px     #222, 
      -1px  1px     #222, 
      1px -1px     #222, 
      -1px -1px     #222
      1px  1px 5px #555;
  }
</style>
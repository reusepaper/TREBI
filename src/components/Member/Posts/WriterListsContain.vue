<template>
  <div class="memberList">
    <img @click="tailMove(1)" src="../../../src/assets/goubook1.png" />
    <img @click="tailMove(2)" src="../../../src/assets/hesee.jpg" />
    <img @click="tailMove(3)" src="../../../src/assets/pikachu.jpg" />
    <img @click="tailMove(4)" src="../../../src/assets/togepi.jpg" />
    <img @click="tailMove(5)" src="../../../src/assets/jammanbo.jpg" />
  </div>
</template>

<script>
export default {
  methods: {
    tailMove: function(i) {
      this.$store.commit("setPostTarget", i);
    }
  }
};
</script>

<style scoped>
.memberList {
  display: grid;
  grid-auto-flow: column;
}
.memberList > img {
  justify-self: center;
  align-self: center;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  box-shadow: 10px 10px 10px grey;
  transition: 0.1s linear;
}
img:hover {
  box-shadow: 5px 5px 0 grey;
}
</style>

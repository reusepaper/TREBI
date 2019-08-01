<template>
  <div class="Wrapper">
    <div v-on:click="pre" v-bind:class="{hidden : selected == 1}">
      <i class="fas fa-chevron-circle-left fa-2x left"></i>
    </div>
    <div
      class="imageContainer"
      v-bind:style="{'transform': 'translate(-' + (selected)*imgWidth + 'vw, 0px)'}"
    >
      <div class="memberInfo" v-for="i in members">
        <!-- <div class="image" v-bind:style="{ 'background-image': 'url(' + i + ')' }"></div> -->
        {{i}}
      </div>
    </div>
    <div v-on:click="next" v-bind:class="{hidden : selected == length}">
      <i class="fas fa-chevron-circle-right fa-2x right"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: ["members"],
  data() {
    return {
      length: this.members.length,
      selected: 1,
      imgWidth: 88.3
    };
  },
  mounted() {},
  methods: {
    next() {
      if (this.selected == this.length) {
        this.selected = 1;
      } else {
        this.selected = this.selected + 1;
      }
      console.log(this.selected);
    },
    pre() {
      if (this.selected == 1) {
        this.selected = this.length;
      } else {
        this.selected = this.selected - 1;
      }
      console.log(this.selected);
    }
  }
};
</script>

<style>
.Wrapper {
  width: 100%;
  height: 100%;
  margin-top: 50px;
  /* overflow: hidden; */
}
.imageContainer {
  height: 100%;
  width: 100%;
  display: flex;
  transition: 0.6s;
}

.post-column {
  height: 578px;
}

.memberInfo {
  height: 80%;
  width: 82vw;
  /* background-color: yellowgreen; */
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  margin: 0 3vw;
}
.memberInfo:first-child {
  /* margin-left: calc(6vw+41px); */
  margin-left: 9vw;
}

.left {
  position: absolute;
  left: 5px;
  top: 50%;
  cursor: pointer;
}

.right {
  position: absolute;
  right: 5px;
  top: 50%;

  cursor: pointer;
}
svg {
  z-index: 2;
  color: rgba(0, 0, 0, 0.2);
}
.hidden {
  display: none;
}
</style>

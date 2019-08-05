<template>
  <div>
    <p>
      <label class="w3-text-blue">
        <b>TITLE</b>
      </label>
      <input class="w3-input w3-border" name="last" type="text" v-model="title" />
    </p>
    <p>
      <label class="w3-text-blue">
        <b>Category</b>
      </label>
      <!-- <v-layout wrap align-center>
        <v-flex xs12 sm6 d-flex>
          <v-select v-model="category" :items="categories" label="Solo field" solo></v-select>
        </v-flex>
      </v-layout>-->
    </p>
    <div class="container">
      <textarea class="md-text" rows="10" v-model="content"></textarea>
      <markdown-it-vue class="md-body" :content="content" :options="options"></markdown-it-vue>
    </div>

    <!-- <ImgUpLoad v-on:upLoadImg="upLoadImg"></ImgUpLoad>
    <img :src="image" />
    <div>
      <br />
      <button class="button buttonblue" v-on:click="submit()">등록</button>
    </div>-->
  </div>
</template>

<script>
import MarkdownItVue from "markdown-it-vue";
import "markdown-it-vue/dist/markdown-it-vue.css";

export default {
  components: {
    MarkdownItVue
  },
  data() {
    return {
      content: "# 이 곳에 내용을 입력하세요 8-)"
    };
  }
};
</script>

<style scoped>
.container {
  display: inline-flex;
  width: 100%;
}

.md-text {
  width: 50%;
  height: 500px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 2px;
  resize: none;
  background-color: #eeeeee;
}

.md-body {
  width: 50%;
  margin-left: 20px;
  overflow: auto;
  max-height: 500px;
}

/* .button {
  background-color: #92c5ff;
  border: none;
  border-radius: 2px;
  color: white;
  padding: 8px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  -webkit-transition-duration: 0.4s; 
  transition-duration: 0.4s;
  cursor: pointer;
}

.buttonblue {
  background-color: white;
  color: black;
  border: 2px solid #92c5ff;
}

.buttonblue:hover {
  background-color: #92c5ff;
  color: white;
} */
</style>

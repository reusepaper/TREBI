<template>
  <div>
    <p>
      <label class="w3-text-blue">
        <b>TITLE</b>
      </label>
      <input class="w3-input w3-border" name="last" type="text" v-model="title" />
    </p>
    <div class="container">
      <textarea class="md-text" rows="10" v-model="content"></textarea>
      <markdown-it-vue class="md-body" :content="content" :options="options"></markdown-it-vue>
    </div>

    <ImgUpLoad v-on:upLoadImg="upLoadImg"></ImgUpLoad>

    <img :src="image" />
    <div>
      <br />
      <button class="button buttonblue" v-on:click="submit()">등록</button>
    </div>
  </div>
</template>

<script>
import MarkdownItVue from "markdown-it-vue";
import "markdown-it-vue/dist/markdown-it-vue.css";
import FirebaseService from "../../../../services/FirebaseService";
import ImgUpLoad from "./ImgUpLoad";

export default {
  components: {
    MarkdownItVue,
    ImgUpLoad
  },
  data() {
    return {
      title: "",
      postWriter: "",
      writerUid: "",
      content: "# 이곳에 게시글을 작성해보세요! 8-)",
      image: "",
      configs: {
        spellChecker: false // disable spell check
      },
      options: {
        markdownIt: {
          linkify: true
        },
        linkAttributes: {
          target: "_blank",
          rel: "noopener"
        }
      }
    };
  },
  methods: {
    submit() {
      if (this.title == "") {
        alert("제목을 입력하세요");
      } else if (this.content == "") {
        alert("내용을 입력하세요");
      } else if (this.image == "") {
        alert("사진을 업로드하세요");
      } else {
        FirebaseService.postPost(
          this.title,
          this.postWriter,
          this.writerUid,
          this.content,
          this.image
        );
        alert("업로드 되었습니다");
        this.title = "";
        this.postWriter = "";
        this.writerUid = "";
        this.image = "";
        this.content = "";
        // window.location.assign("/postlist");
      }
    },
    removeImage() {
      this.image = "";
    },
    upLoadImg(image) {
      console.log("업로드 : ", image);
      this.image = image;
    }
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

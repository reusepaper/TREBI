<template>
  <div>
    <div class="title-container">
      <label class="w3-text-blue">
        <b>TITLE&nbsp;&nbsp;</b>
      </label>
      <input class="w3-input w3-border title-context" name="last" type="text" v-model="title" />
      &nbsp;
      <div class="gotolist">
        <label for="listbutton">리스트보기</label>
        <input type="button" @click="goPostList" id="listbutton" />
      </div>
      <!-- <Button @click="goPostList">리스트 보기</Button> -->
    </div>
    <div class="container">
      <textarea class="md-text" rows="10" v-model="content"></textarea>
      <markdown-it-vue class="md-body" :content="content" :options="options"></markdown-it-vue>
    </div>

    <div class="upload-container">
      <div class="image-upload-container">
        <ImgUpLoad v-on:upLoadImg="upLoadImg"></ImgUpLoad>
        <img :src="image" />
      </div>
      <div class="upload-button-container">
        <div class="upload">
          <label for="uploadButton">등록</label>
          <input type="button" @click="submit" id="uploadButton" />
        </div>
        <!-- <button class="button buttonblue" v-on:click="submit()">등록</button> -->
      </div>
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
  mounted() {
    // console.log(this.$store.state.user);
  },
  data() {
    return {
      title: "",
      postWriter: this.$store.state.user.displayName,
      writerUid: this.$store.state.user.uid,
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
        FirebaseService.updateUserPostUP(this.writerUid);
        alert("업로드 되었습니다");
        this.title = "";
        this.image = "";
        this.content = "";
        this.$store.commit("setPostPopupIndex", 1);
      }
    },
    removeImage() {
      this.image = "";
    },
    upLoadImg(image) {
      console.log("업로드 : ", image);
      this.image = image;
    },
    goPostList: function() {
      this.$store.commit("setPostPopupIndex", 1);
    }
  }
};
</script>

<style scoped>
.title-container {
  margin-top: 2vh;
  width: 100%;
  text-align: center;
}

.title-context {
  width: 80%;
}

.container {
  margin-top: 1vh;
  display: inline-flex;
  width: 100%;
}

.upload-container {
  display: flex;
}

.image-upload-container,
.upload-button-container {
  width: 50%;
}

.upload-button-container {
  text-align: right;
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

.gotolist {
  display: inline-block;
}

.gotolist label {
  margin-bottom: 0.5vh;
  display: inline-block;
  padding: 0.1em 0.2em;
  font-size: inherit;
  line-height: normal;
  vertical-align: middle;
  background-color: white;
  color: black;
  cursor: pointer;
  border: 2px solid #b8b8b8;
  border-radius: 0.25em;
  -webkit-transition: background-color 0.2s;
  transition: background-color 0.2s;
}

.gotolist label:hover {
  background-color: #b8b8b8;
  color: white;
}

.gotolist label:active {
  background-color: #b8b8b8;
  color: white;
}

.gotolist input[type="button"] {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

.upload label {
  margin-top: 1vh;
  display: inline-block;
  padding: 0.5em 0.75em;
  font-size: inherit;
  line-height: normal;
  vertical-align: middle;
  background-color: white;
  color: black;
  cursor: pointer;
  border: 2px solid #b8b8b8;
  border-radius: 0.25em;
  -webkit-transition: background-color 0.2s;
  transition: background-color 0.2s;
}

.upload label:hover {
  background-color: #b8b8b8;
  color: white;
}

.upload label:active {
  background-color: #b8b8b8;
  color: white;
}

.upload input[type="button"] {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
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

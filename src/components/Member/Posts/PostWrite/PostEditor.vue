<template>
  <div>
    <div class="writer__header">
      <div class="postwrite__title">PostWrite</div>
      <Button class="go__list" @click="goPostList">리스트 보기</Button>
    </div>

    <div class="title__container">
      <label class="w3-text-blue">
        <b>TITLE : &nbsp;&nbsp;</b>
      </label>
      <input class="w3-input w3-border title-context" name="last" type="text" v-model="title" />
      <div class="upload">
        <label for="uploadButton">등록</label>
        <input type="button" @click="submit" id="uploadButton" />
      </div>
    </div>

    <div class="container">
      <div class="upload-container">
        <ImgUpLoad class="fileSelectBtn" v-on:upLoadImg="upLoadImg"></ImgUpLoad>
        <div class="image-upload-container">
          <img class="image" :src="image" alt="Post Img" />
        </div>
      </div>
      <div class="container__columm">
        <textarea class="md-text" rows="10" v-model="content"></textarea>
        <markdown-it-vue class="md-body" :content="content" :options="options"></markdown-it-vue>
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
      image: "http://design-ec.com/d/e_others_50/l_e_others_500.png",
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
    async submit() {
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
        this.image = "http://design-ec.com/d/e_others_50/l_e_others_500.png";
        this.content = "# 이곳에 게시글을 작성해보세요! 8-)";
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
.writer__header {
  display: flex;
  justify-content: center;
}
.writer__header .tpostwrite__titleitle {
  font-size: 40px;
}
.go__list {
  position: absolute;
  align-self: center;
  left: 50px;
  background-color: rgb(250, 250, 250);
  padding: 4px 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  cursor: pointer;
}
.title__container {
  margin-top: 2vh;
  width: 100%;
  display: flex;
  align-items: center;
}

.title-context {
  width: 80%;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  border-bottom: 1px solid rgba(0, 0, 0, 0.6);
}
.title-context:focus {
  outline: none;
}

.container {
  margin-top: 1vh;
  /* display: inline-flex; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: minmax(600px, 1fr);
}

.upload-container {
  position: relative;
  display: flex;
  justify-content: flex-end;
}

.image-upload-container,
.upload-button-container {
  width: 100%;
}

.upload-button-container {
  text-align: right;
}

.md-text {
  /* width: 50%; */
  /* height: 500px; */
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 2px;
  resize: none;
  background-color: #eeeeee;
}

.md-body {
  /* width: 50%; */
  /* margin-left: 20px; */
  overflow: auto;
  max-height: 500px;
}

.gotolist {
  display: inline-block;
}
.container__columm {
  border: 1px solid #ccc;
  display: grid;
  grid-template-rows: 1fr 1fr;
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
.fileSelectBtn {
  position: absolute;
  top: 5px;
  right: 5px;
}

.image {
  width: 100%;
  height: 600px;
}
@media (max-width: 768px) {
  .writer__header .tpostwrite__titleitle {
    font-size: 22px;
  }
  .go__list {
    left: 20px;
  }
  .container {
    grid-template-columns: none;
    grid-template-rows: 0.5fr 0.5fr;
    /* grid-auto-flow: dense; */
  }
  .md-body {
    border: 1px solid rgba(0, 0, 0, 0.2);
  }
}
@media (max-width: 415px) {
  .image {
    height: 30vh;
  }
  .container__columm {
    grid-template-rows: 0.6fr 0.8fr;
  }
  .title-context {
    width: 60%;
  }
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

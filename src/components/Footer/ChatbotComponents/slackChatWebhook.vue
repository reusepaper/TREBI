<template>
<div v-if="this.$store.state.user">
  <transition name="fade">
    <div v-if="!show" id=chat_mini @click="chat_button_click" >
      <i id="chat_mini_icon" class="fas fa-comment-dots"></i>
    </div>
  </transition>
  <transition name="slide-up">
    <div id="chat_container" v-if="show">
      <div id="chat_head">
        <span id="chat_head_text">trebi에게 질문하기</span>
        <span id="close" @click="show = !show">&times;</span>
      </div>
      <div id="chat_body">
        <ul>
          <li 
            v-for="(slackMessage, index) in messages"
            v-bind:key="slackMessage.item"
            class="clearfix">
            <div v-if="slackMessage.isMe" >
              <div class="message-data align-right">
                <!-- <span class="message-data-time" >{{slackMessage.time}}</span> &nbsp; &nbsp; -->
                <span class="message-data-name" >{{slackMessage.username}}</span>
              </div>
              <div class="message other-message float-right">
                {{slackMessage.message}}
              </div>
            </div>
            <div v-else>
              <div class="message-data align-left">
                <span class="message-data-name"> {{slackMessage.username}}</span>
                <span class="message-data-time">10:12 AM, Today</span>
              </div>
              <div class="message my-message">
                {{slackMessage.message}}
              </div>
            </div>
          </li>
        </ul>

      </div>
      <div id="chat_send">
        <div id="chat_send_text">
          <span class="icon">
            <i class="fas fa-paperclip"></i>
          </span>
          <span class="icon">
            <i class="far fa-smile"></i>
          </span>
          <input type="text" v-model="message" placeholder="질문을 입력해주세요." v-on:keyup.enter="sendMessage">
          <span class="icon" @click="sendMessage">
            <i class="fas fa-paper-plane"></i>
          </span>
        </div>
      </div>
    </div>
  </transition>
</div>
</template>

<script>
import { setInterval, setTimeout } from 'timers';
import $ from 'jquery';

const { WebClient } = require('@slack/web-api');
const token = process.env.VUE_APP_SLACK_TOKEN;
// Initialize
const web = new WebClient(token);

// var intElemScrollHeight = document.getElementById("#chat_body").scrollHeight;

export default {
  data(){
    return {
      messages: [],
      message:'',
      show: false,
      message_thread_ts: '',
    }
  },
  mounted() {
    this.readMessages();
    this.repliesInterval();
    // this.$store.commit("setMessages");
  },
  methods:{
    async chat_button_click(){
      this.show = !this.show;
      await this.firstScroll();
      // console.log(this.show);
    },
    repliesInterval(){
      // this.checkReply();
      setInterval(() => {
        this.checkReply();
      }, 60000)
    },
    firstScroll(){
      setTimeout(function(){
        $("#chat_body").scrollTop($("#chat_body")[0].scrollHeight);
      }, 500);
    },
    scrollToBottom(){
      setTimeout(function(){
        $("#chat_body").scrollTop($("#chat_body")[0].scrollHeight);
      }, 100);
    },
    async sendMessage(){
      // console.log(this.message);
      if(this.message == '') {
        alert("질문을 입력해주세요");
        return;
      }
      let now = new Date();
      let myMessages = {
          username: this.$store.state.user.displayName,
          isMe: true,
          message: this.message
        }
      await this.messages.push(myMessages);
      await this.botMessage(this.message);
      await this.scrollToBottom();
      await this.postMessage();
      await this.readMessageOne();


      let newMessage = await this.message_thread_ts;
      // this.$store.commit("setMessages");
      await this.$store.commit("upMessages", newMessage);
      // await console.log(this.$store.state.messages);
      // this.messages = await this.$store.state.messages
      this.message = await "";
    },
    async postMessage(){
      const result = await web.chat.postMessage({
          channel: "#test_chat",
          username: this.$store.state.user.displayName,
          text: this.message
        });
        // console.log(result)
    },
    async readMessageOne(){
      const result = await web.conversations.history({
          channel: "CLYG23CHW",
          limit: 1
        });
      // console.log(result.messages[0].ts);
      this.message_thread_ts = await result.messages[0].ts
    },
    async readMessages(){
      for (let ts of this.$store.state.messages){
        let result = await web.channels.replies({
          channel: "CLYG23CHW",
          thread_ts: ts
        })
        let myMessages = {
          username: result.messages[0].username,
          isMe: true,
          message: result.messages[0].text
        }
        await this.messages.push(myMessages);
        if (result.messages[0].hasOwnProperty('replies')){
          for(let replies=1; replies<=result.messages[0].reply_count; replies++){
            // await console.log(result.messages[replies]);
            let trebiMessages = {
              username: "trebi",
              isMe: false,
              message: result.messages[replies].text
            }
            await this.messages.push(trebiMessages);
          }
        } else{
          this.botMessage(result.messages[0].text);
        }
      }
      
      // await console.log(this.messages);
    },
    async botMessage(inputMessage){
      if(inputMessage.includes('안녕')){
        let trebiMessages = {
          username: "trebi",
          isMe: false,
          message: "반갑습니다. 트레비입니다."
        }
        await this.messages.push(trebiMessages);
      } else if(inputMessage.includes('페이지') && inputMessage.includes('어떻게')){
        let trebiMessages = {
          username: "trebi",
          isMe: false,
          message: "저희 페이지는 Vue cli를 기반으로, firebase를 DB로 사용했습니다.\n 더 자세한 답변을 원하시면 잠시 기다려주세요. 답변까지는 최대 하루가 소요됩니다."
        }
        await this.messages.push(trebiMessages);
      } else if(inputMessage.includes('연락')){
        let trebiMessages = {
          username: "trebi",
          isMe: false,
          message: "저희와 연락하시려면 페이지 최하단 contact us를 참고해주시기 바랍니다. 감사합니다."
        }
        await this.messages.push(trebiMessages);
      } else if((inputMessage.includes('왜') || inputMessage.includes('팀')) && (inputMessage.includes('트레비') || inputMessage.includes('trebi') || inputMessage.includes('트래비')) ){
        let trebiMessages = {
          username: "trebi",
          isMe: false,
          message: "유난히 덥던 여름.. 저는 하염없이 길을 걷고 있었죠.. 타는듯한 더위에 갈증을 느끼던 저는 우연히 한 사람의 얼굴에 피어있는 행복감을 보았어요. 저 사람은 무슨 일이 있기에 저렇게 행복한걸까? 오늘 생일인가? 아니면 취업에 성공했나? 그러다 저는 깨달았습니다. 그의 손에 들려있는 트래비를.. 크.. 무더위를 한번에 날려줄 트래비의 청량감에 행복해하는 그를 보면서, 나는 누군가에게 청량한 적이 있었는가. 라는 생각을 하게 되었어요. 누군가에게 행복을 준다는거. 쉽지 않잖아요. 누군가에게 제 정보를 전달하면서 궁굼했던 것, 가려운 부분을 시원하게 해결해 주면어떨까. 트래비는 그런 시원함을 담고자 하는 이유로 만들었습니다. -by 유초록"
        }
        await this.messages.push(trebiMessages);
      } else {
        let trebiMessages = {
          username: "trebi",
          isMe: false,
          message: "질문을 남겼습니다. 답변까지는 최대 1일이 소요됩니다."
        }
        await this.messages.push(trebiMessages);
      }
    },
    async checkReply(){
      const ts = this.$store.state.messages[this.$store.state.messages.length - 1];
      let result = await web.channels.replies({
        channel: "CLYG23CHW",
        thread_ts: ts
      })
      if (result.messages[0].hasOwnProperty('replies')){
        for(let replies=result.messages[0].reply_count; replies>0; replies--){
          // await console.log(replies);
          // await console.log(result.messages[replies]);
          let trebiMessages = {
            username: "trebi",
            isMe: false,
            message: result.messages[replies].text
          }
          if(this.$store.state.reply != trebiMessages){
            await this.$store.commit("setReply", trebiMessages);
          }
          if (this.messages[this.messages.length - 1].message != trebiMessages.message){
            // await this.messages.push(trebiMessages);
            await this.messages.splice(this.messages.length-(result.messages[0].reply_count-replies), 0, trebiMessages)
            await this.scrollToBottom();
            return;
          } else return;
        }
      } 
    }
  }
}
</script>

<style scoped>
div{
  font-family: 'Nanum Gothic', sans-serif !important;
}

#chat_mini{
  width: 62px;
  height: 62px;
  border-radius: 50%;
  background-color: #94c2ed;
  position: fixed;
  bottom: 10px;
  right: 10px;
}
#chat_mini:hover{
  cursor: pointer;
}
#chat_mini_icon{
  font-size: 40px;
  color: #fff;
  position: relative;
  top: 11px;
  left: 11px;
}

.fade-enter-active, .fade-leave-active {
  opacity: 0;
}
.fade-enter, .fade-leave-to {
  transition: opacity .2s;
}
.slide-up-enter-active {
  transition: all .2s ease;
}
.slide-up-leave-active {
  transition: all cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-up-enter, .slide-fade-leave-to {
  transform: translateY(100vh);
  opacity: 0 .2s;
}
#chat_send_text{
  background-color: white;
  border-radius: 0px 0px 10px 10px;
}
.icon{
  color:rgb(199, 199, 199);
  font-size: 20px;
  margin: 5px;
  cursor: pointer;
}
.icon:hover{
  color: rgb(133, 201, 239);
}
#close {
  color: #fff;
  float: right;
  font-size: 28px;
  font-weight: bold;
  position: relative;
  top: 0px;
  right: 15px;
}
#close:hover,
#close:focus {
  color: white;
  text-decoration: none;
  cursor: pointer;
}
#chat_container{
  font-family: "Nanum Gothic" !important;
  width: 320px;
  border-radius: 10px;
  box-shadow: 0 6px 60px 0 rgba(81,99,120,0.3);
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 10;
}
#chat_head {
  background-color: #a0a0a0;
  /* background-color: linear-gradient(130deg,#4f5bff 0%,#4f5bff 50%,#6c4fff) 100%; */
  height: 60px;
  line-height: 60px;
  border-radius: 10px 10px 0px 0px;
  color: white;
}
#chat_head_text{
  vertical-align: middle;
  margin-left: 10px;
  font-size: 16px;
}
#chat_body{
  height: 400px;
  overflow-y: scroll;
  background-color: white;
}
#chat_send{
  height: 54px;
  line-height: 54px;
  border-top: rgb(199, 199, 199) 1px solid;
}
#chat_send_text{
  vertical-align: middle;
  padding: 0px 5px;
}
input{
  border: none;
  font-size: 14px;
  margin: 0px 5px;
  width: 200px;
}

ul{
  list-style: none;
}
li{
  margin-top: 10px;
}
.message-data {
  margin-bottom: 15px;
  font-size: 14px;
}
.message-data-time {
  color: #a8aab1;
  padding-left: 6px;
  visibility: hidden;
}
.message {
  color: white;
  padding: 18px 20px;
  line-height: 26px;
  font-size: 16px;
  border-radius: 7px;
  margin-bottom: 30px;
  width: 200px;
  position: relative;
}
.message:after {
  bottom: 100%;
  left: 7%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  border-bottom-color: #EEF1F4;
  color: #2B2F35;
  border-width: 10px;
  margin-left: -10px;
}
.my-message {
  background: #EEF1F4;
  color: #2B2F35;
  margin-left: 10px;
}
.other-message {
  background: #94c2ed;
  margin-right: 10px;
}
.other-message:after {
  border-bottom-color: #94c2ed;
  left: 93%;
}
.align-left {
  text-align: left;
  margin-left: 10px;
}

.align-right {
  text-align: right;
  margin-right: 10px;
}

.float-right {
  float: right;
}
.clearfix:after {
	visibility: hidden;
	display: block;
	font-size: 0;
	content: " ";
	clear: both;
	height: 0;
}
</style>

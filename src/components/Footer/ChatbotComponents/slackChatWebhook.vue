<template>
<div>
  <div>챗봇 들어갈 위치</div>
  <div id="chat_container">
    <div id="chat_head">
      <span id="chat_head_text">trebi에게 질문하기</span>
      <span id="close">&times;</span>
    </div>
    <div id="chat_body">
      <div>
        <ul>
          <li 
            v-for="(slackMessage, index) in this.$store.state.messages"
            v-bind:key="slackMessage.item">
            <div v-if="slackMessage.isMe" >
              <div class="message-data align-right">
                <span class="message-data-time" >{{slackMessage.time}}</span> &nbsp; &nbsp;
                <span class="message-data-name" >{{slackMessage.username}}</span>
              </div>
              <div class="message other-message float-right">
                {{slackMessage.message}}
              </div>
            </div>
            <div v-else>
              <div class="message-data align-left">
                <span class="message-data-name"> Vincent</span>
                <span class="message-data-time">10:12 AM, Today</span>
              </div>
              <div class="message my-message">
                Are we meeting today? Project has been already finished and I have results to show you.
              </div>
            </div>
          </li>
          

          <!-- <li>
            <div class="message-data align-left">
              <span class="message-data-name"> Vincent</span>
              <span class="message-data-time">10:12 AM, Today</span>
            </div>
            <div class="message my-message">
              Are we meeting today? Project has been already finished and I have results to show you.
            </div>
          </li>

          <li class="clearfix">
            <div class="message-data align-right">
              <span class="message-data-time" >10:14 AM, Today</span> &nbsp; &nbsp;
              <span class="message-data-name" >Olia</span> 
              
            </div>
            <div class="message other-message float-right">
              Well I am not sure. The rest of the team is not here yet. Maybe in an hour or so? Have you faced any problems at the last phase of the project?
            </div>
          </li> -->

        </ul>
      </div>
    </div>
    <div id="chat_send">
      <div id="chat_send_text">
        <span>
          <i class="fas fa-paperclip"></i>
        </span>
        <span>
          <i class="far fa-smile"></i>
        </span>
        <input type="text" v-model="message" placeholder="질문을 입력해주세요." v-on:keyup.enter="sendMessage">
        <span>
          <i class="fas fa-paper-plane"></i>
        </span>
      </div>
    </div>
  </div>
</div>
</template>

<script>

const Slack = require('slack-node');

const webhookUri = "https://hooks.slack.com/services/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";

const slack = new Slack();
slack.setWebhook(webhookUri);
// const send = async(message) => {
//   slack.webhook({
//     channel: "#firebase", // 전송될 슬랙 채널
//     username: "webhookbot", //슬랙에 표시될 이름
//     text: message
//   }, function(err, response) {
//     console.log(response);
//   });
// }



export default {
  data(){
    return {
      messages: [],
      message:'',
    }
  },
  methods:{
    sendMessage(){
      slack.webhook({
        channel: "#test_chat",
        username: this.$store.state.user.displayName,
        text: this.message
      }, function(err, response) {
        console.log(response);
      });
      let now = new Date();
      let newMessage = {
        username: this.$store.state.user.displayName,
        time: now.getFullYear() + '.' + (now.getMonth() + 1) + '.' + now.getDate() + '. ' + now.getHours() + ':' + now.getMinutes(),
        message: this.message,
        isMe: true
      }
      // this.$store.commit("setMessages");
      this.$store.commit("upMessages", newMessage);
      console.log(this.$store.state.messages);
      this.message = ""
    }
  }
}
</script>

<style scoped>
div{
  font-family: 'Nanum Gothic', sans-serif !important;
}
div#chat_send_text>span{
  color:rgb(199, 199, 199);
  font-size: 20px;
  margin: 5px;
  cursor: pointer;
}
div#chat_send_text>span:hover{
  color: rgb(133, 201, 239);
}
#close {
  color: #c3c3c3;
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
  /* border: 1px black solid; */
}
#chat_head {
  background-color: #524F5a;
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

</style>

<template>
  <div class="member">
    <MemberSlider v-bind:members="members"></MemberSlider>
  </div>
</template>
<script>
import MemberSlider from "../components/Member/MemberSlider";
// import $ from "jquery";

export default {
  components: {
    MemberSlider
  },
  data() {
    return {
      members: [
        {
          image_src: require("../assets/goubook1.png"),
          name: "꼬부기2"
        },
        {
          image_src: require("../assets/orangetiger.jpg"),
          name: "이주호",
          intro: "기호 1번 잘부탁드립니당. 출퇴근 4시간 가능합니다. 연락주세용",
          socials: [
            { title: "github", url: "https://github.com/leeiopd" },
            { title: "blog", url: "https://leeiopd.github.io/" }
          ],
          skills: [
            {
              title: "Vue",
              url: "https://www.misterbit.co.il/vue-workshop/img/vueLogo.png",
              desc: "Vue를 이용한 SPA 개발 가능"
            },
            {
              title: "Firebase",
              url:
                "https://seeklogo.com/images/F/firebase-logo-402F407EE0-seeklogo.com.png",
              desc: "Firebase-store 및 function 사용 가능"
            },
            {
              title: "Python",
              url:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png",
              desc: "파이썬으로 빅데이터 가능"
            },
            {
              title: "Django",
              url:
                "https://cdn.freebiesupply.com/logos/thumbs/2x/django-logo.png",
              desc: "장고로 백엔드 구축 가능"
            }
          ]
        },
        {
          image_src: require("../assets/bronzepipe.jpg"),
          name: "유동관",
          intro:
            "기호 2번 잘부탁드립니당. 유하~ 방황하는 반장역할을 맡고 있습니당 유바~",
          socials: [
            { title: "github", url: "https://github.com/dkyou7" },
            {
              title: "YouTube",
              url:
                "https://www.youtube.com/channel/UC1Y934035MUWlBu6E-9nmFQ/about"
            }
          ],
          skills: [
            {
              title: "Vue",
              url: "https://www.misterbit.co.il/vue-workshop/img/vueLogo.png",
              desc: "Vue를 이용한 SPA 개발 가능"
            },
            {
              title: "Java",
              url:
                "https://seeklogo.com/images/J/java-logo-7F8B35BAB3-seeklogo.com.png",
              desc: "자바를 이용한 프로그래밍 가능"
            },
            {
              title: "C++",
              url:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/306px-ISO_C%2B%2B_Logo.svg.png",
              desc: "C++로 알고리즘 B형 취득"
            },
            {
              title: "Android",
              url:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Android_robot.svg/872px-Android_robot.svg.png",
              desc: "어플리케이션 개발 가능"
            }
          ]
        },
        {
          image_src: require("../assets/pikachu.jpg"),
          name: "임연지",
          intro:
            "기호 3번 잘부탁드립니당. 못받은 계약금 받아드립니다 연락주세용",
          socials: [{ title: "github", url: "https://github.com/yeonjilim" }],
          skills: [
            {
              title: "Vue",
              url: "https://www.misterbit.co.il/vue-workshop/img/vueLogo.png",
              desc: "Vue를 이용한 SPA 개발 가능"
            },
            {
              title: "Firebase",
              url:
                "https://seeklogo.com/images/F/firebase-logo-402F407EE0-seeklogo.com.png",
              desc: "Firebase-store 및 function 사용 가능"
            },
            {
              title: "C++",
              url:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/306px-ISO_C%2B%2B_Logo.svg.png",
              desc: "C++로 알고리즘 B형 취득"
            },
            {
              title: "C#",
              url:
                "https://camo.githubusercontent.com/0617f4657fef12e8d16db45b8d73def73144b09f/68747470733a2f2f646576656c6f7065722e6665646f726170726f6a6563742e6f72672f7374617469632f6c6f676f2f6373686172702e706e67",
              desc: "C# 으로 게임 만들기 가능"
            },
            {
              title: "Android",
              url:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Android_robot.svg/872px-Android_robot.svg.png",
              desc: "어플리케이션 개발 가능"
            }
          ]
        },
        {
          image_src: require("../assets/sweetrain.jpg"),
          name: "한단비",
          intro: "기호 4번 잘부탁드립니당.",
          socials: [
            { title: "github", url: "https://github.com/sweetrain096" },
            { title: "blog", url: "https://sweetlog.netlify.com/" }
          ],
          skills: [
            // {
            //   title: "Java",
            //   url:
            //     "https://seeklogo.com/images/J/java-logo-7F8B35BAB3-seeklogo.com.png",
            //   desc: "자바를 이용한 프로그래밍 가능"
            // },
            {
              title: "Vue",
              url: "https://www.misterbit.co.il/vue-workshop/img/vueLogo.png",
              desc: "Vue를 이용한 SPA 개발 가능"
            },
            {
              title: "C++",
              url:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/306px-ISO_C%2B%2B_Logo.svg.png",
              desc: "C++로 알고리즘 B형 취득"
            },
            // {
            //   title: "C#",
            //   url:
            //     "https://camo.githubusercontent.com/0617f4657fef12e8d16db45b8d73def73144b09f/68747470733a2f2f646576656c6f7065722e6665646f726170726f6a6563742e6f72672f7374617469632f6c6f676f2f6373686172702e706e67",
            //   desc: "C# 으로 게임 만들기 가능"
            // },
            {
              title: "Python",
              url:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png",
              desc: "파이썬으로 빅데이터 가능"
            },

            // {
            //   title: "Android",
            //   url:
            //     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Android_robot.svg/872px-Android_robot.svg.png",
            //   desc: "어플리케이션 개발 가능"
            // },
            {
              title: "Django",
              url:
                "https://cdn.freebiesupply.com/logos/thumbs/2x/django-logo.png",
              desc: "장고로 백엔드 구축 가능"
            }
          ]
        },
        {
          image_src: require("../assets/verydissapoint.jpg"),
          name: "한만섭",
          intro: "기호 5번 잘부탁드립니당.",
          socials: [
            { title: "github", url: "https://github.com/13akstjq" },
            { title: "blog", url: "https://13akstjq.github.io/" }
          ],
          skills: [
            {
              title: "Java",
              url:
                "https://seeklogo.com/images/J/java-logo-7F8B35BAB3-seeklogo.com.png",
              desc: "자바를 이용한 프로그래밍 가능"
            },
            {
              title: "C++",
              url:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/306px-ISO_C%2B%2B_Logo.svg.png",
              desc: "C++로 알고리즘 B형 취득"
            },
            {
              title: "Vue",
              url: "https://www.misterbit.co.il/vue-workshop/img/vueLogo.png",
              desc: "Vue를 이용한 SPA 개발 가능"
            },
            // {
            //   title: "C#",
            //   url:
            //     "https://camo.githubusercontent.com/0617f4657fef12e8d16db45b8d73def73144b09f/68747470733a2f2f646576656c6f7065722e6665646f726170726f6a6563742e6f72672f7374617469632f6c6f676f2f6373686172702e706e67",
            //   desc: "C# 으로 게임 만들기 가능"
            // },
            // {
            //   title: "Python",
            //   url:
            //     "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png",
            //   desc: "파이썬으로 빅데이터 가능"
            // },

            {
              title: "Android",
              url:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Android_robot.svg/872px-Android_robot.svg.png",
              desc: "어플리케이션 개발 가능"
            },
            {
              title: "React",
              url: "https://cdn.auth0.com/blog/react-js/react.png",
              desc: "React를 사용한 SPA구현 가능 "
            }
          ]
        },
        {
          member_image_src: require("../assets/goubook1.png"),
          member_name: "꼬부기2"
        }
      ]
    };
  }
};
</script>
<style scoped>
.member {
  background: #ededee;
  display: grid;
  grid-template-rows: 1fr;
}
</style>

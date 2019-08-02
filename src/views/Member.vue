<template>
  <div class="member">
    <MemberTitle class="fadeInRight"></MemberTitle>
    <!-- <MemberListContain></MemberListContain> -->
    <!-- <MemberContentsContain></MemberContentsContain> -->
    <MemberSlider v-bind:members="members"></MemberSlider>
  </div>
</template>
<script>
import MemberTitle from "../components/Member/MemberTitle";
import MemberListContain from "../components/Member/MemberListContain";
import MemberContentsContain from "../components/Member/MemberContentsContain";
import MemberSlider from "../components/Member/MemberSlider";
import $ from "jquery";

export default {
  components: {
    MemberTitle,
    MemberListContain,
    MemberContentsContain,
    MemberSlider
  },
  mounted: function() {
    $(window).scroll(function() {
      $(".fadeInRight").each(function(i) {
        var bottom_of_element = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if (bottom_of_window > bottom_of_element) {
          $(this).animate(
            {
              opacity: "1",
              "margin-right": "0px"
            },
            1000
          );
        }
      });
    });
  },
  data() {
    return {
      members: [
        {
          image_src: require("../assets/goubook1.png"),
          name: "꼬부기2"
        },
        {
          image_src: require("../assets/goubook1.png"),
          name: "이주호",
          intro: "기호 1번 잘부탁드립니당. 출퇴근 4시간 가능합니다. 연락주세용",
          socials: [
            { title: "github", url: "https://github.com/leeiopd" },
            { title: "blog", url: "https://leeiopd.github.io/" }
          ],
          skills: [
            {
              title: "Java",
              url:
                "https://seeklogo.com/images/J/java-logo-7F8B35BAB3-seeklogo.com.png"
            },
            {
              title: "C++",
              url:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/306px-ISO_C%2B%2B_Logo.svg.png"
            },
            {
              title: "C#",
              url:
                "https://camo.githubusercontent.com/0617f4657fef12e8d16db45b8d73def73144b09f/68747470733a2f2f646576656c6f7065722e6665646f726170726f6a6563742e6f72672f7374617469632f6c6f676f2f6373686172702e706e67"
            },
            {
              title: "Python",
              url:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png"
            },

            {
              title: "Android",
              url:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Android_robot.svg/872px-Android_robot.svg.png"
            },
            {
              title: "Django",
              url: "https://www.paulox.net/images/django-postgresql-fts.svg"
            }
          ]
        },
        {
          image_src: require("../assets/hesee.jpg"),
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
              title: "Java",
              url:
                "https://seeklogo.com/images/J/java-logo-7F8B35BAB3-seeklogo.com.png"
            },
            {
              title: "C++",
              url:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/306px-ISO_C%2B%2B_Logo.svg.png"
            },
            {
              title: "C#",
              url:
                "https://camo.githubusercontent.com/0617f4657fef12e8d16db45b8d73def73144b09f/68747470733a2f2f646576656c6f7065722e6665646f726170726f6a6563742e6f72672f7374617469632f6c6f676f2f6373686172702e706e67"
            },
            {
              title: "Python",
              url:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png"
            },
            {
              title: "React",
              url:
                "http://indigo.amsterdam/wp-content/uploads/2017/06/React-icon.svg_-e1498055414258.png"
            },
            {
              title: "ReactNative",
              url:
                "https://raw.githubusercontent.com/kristerkari/react-native-svg-transformer/HEAD/images/react-native-logo.png"
            },
            {
              title: "Android",
              url:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Android_robot.svg/872px-Android_robot.svg.png"
            },
            {
              title: "Django",
              url: "https://www.paulox.net/images/django-postgresql-fts.svg"
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
              title: "Java",
              url:
                "https://seeklogo.com/images/J/java-logo-7F8B35BAB3-seeklogo.com.png"
            },
            {
              title: "C++",
              url:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/306px-ISO_C%2B%2B_Logo.svg.png"
            },
            {
              title: "C#",
              url:
                "https://camo.githubusercontent.com/0617f4657fef12e8d16db45b8d73def73144b09f/68747470733a2f2f646576656c6f7065722e6665646f726170726f6a6563742e6f72672f7374617469632f6c6f676f2f6373686172702e706e67"
            },
            {
              title: "Python",
              url:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png"
            },

            {
              title: "Android",
              url:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Android_robot.svg/872px-Android_robot.svg.png"
            },
            {
              title: "Django",
              url: "https://www.paulox.net/images/django-postgresql-fts.svg"
            }
          ]
        },
        {
          image_src: require("../assets/togepi.jpg"),
          name: "한단비",
          intro: "기호 4번 잘부탁드립니당.",
          socials: [
            { title: "github", url: "https://github.com/sweetrain096" },
            { title: "blog", url: "https://sweetlog.netlify.com/" }
          ],
          skills: [
            {
              title: "C++",
              url:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/306px-ISO_C%2B%2B_Logo.svg.png"
            },
            {
              title: "C#",
              url:
                "https://camo.githubusercontent.com/0617f4657fef12e8d16db45b8d73def73144b09f/68747470733a2f2f646576656c6f7065722e6665646f726170726f6a6563742e6f72672f7374617469632f6c6f676f2f6373686172702e706e67"
            },
            {
              title: "Python",
              url:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png"
            },
            {
              title: "React",
              url:
                "http://indigo.amsterdam/wp-content/uploads/2017/06/React-icon.svg_-e1498055414258.png"
            },

            {
              title: "Django",
              url: "https://www.paulox.net/images/django-postgresql-fts.svg"
            }
          ]
        },
        {
          image_src: require("../assets/jammanbo.jpg"),
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
                "https://seeklogo.com/images/J/java-logo-7F8B35BAB3-seeklogo.com.png"
            },
            {
              title: "React",
              url:
                "http://indigo.amsterdam/wp-content/uploads/2017/06/React-icon.svg_-e1498055414258.png"
            },
            {
              title: "ReactNative",
              url:
                "https://raw.githubusercontent.com/kristerkari/react-native-svg-transformer/HEAD/images/react-native-logo.png"
            },
            {
              title: "Android",
              url:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Android_robot.svg/872px-Android_robot.svg.png"
            },
            {
              title: "Django",
              url: "https://www.paulox.net/images/django-postgresql-fts.svg"
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
  grid-template-rows: auto 1fr;
  padding-bottom: 50px;
}

.fadeInRight {
  opacity: 0;
  margin-right: -400px;
}
</style>

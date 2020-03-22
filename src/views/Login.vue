<!-->
动态视频背景+半透明登陆框。视频背景用https://coverr.co/
<-->
<template>
  <div class="homepage-hero-module">
    <div class="video-container">
      <div :style="fixStyle" class="filter">
        <div class="loginpanel">
          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="70px"
            class="demo-ruleForm"
            hide-required-asterisk="false"
          >
            <h1 style="color:white; text-align:center">欢迎来到AchieveIt平台</h1>
            <el-form-item label="用户名" prop="username">
              <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="info" @click="sendform('ruleForm')">登录</el-button>
              <vcode :show="isShow" @onSuccess="onSuccess" @onClose="onClose" />
            </el-form-item>
          </el-form>
        </div>
        <!--内容-->
      </div>
      <video :style="fixStyle" autoplay loop muted class="fillWidth" v-on:canplay="canplay">
        <source src="../assets/video/G1s.mp4" type="video/mp4" />
      </video>
      <div class="poster hidden" v-if="!vedioCanPlay">
        <img :style="fixStyle" src="../assets/video/G1s.jpg" alt />
      </div>
    </div>
  </div>
</template>


<script>
import vcode from "vue-puzzle-vcode";
export default {
  nameL: "login",
  components: {
    vcode
  },
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        if (this.ruleForm.username !== "") {
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.password !== "") {
        }
        callback();
      }
    };
    return {
      vedioCanPlay: false,
      fixStyle: "",
      isShow: false, // 验证码模态框是否出现
      key: 0, //开关
      // 表单
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, validator: validatePass, trigger: "blur" }
        ],
        password: [
          { required: true, validator: validatePass2, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    // 页面自动获取数据,直接登录
    getform() {
      this.axios
        .post("/login")
        .then(res => {
          this.ruleForm = res.data.data.form;
        })
        .catch(err => {});
    },
    // 登录发送数据
    sendform() {
      this.onSubmit();
      if (this.key == 1) {
        if (this.ruleForm.username == "" || this.ruleForm.password == "") {
          alert("请输入用户名或者密码");
        } else {
          let newform = {
            username: this.ruleForm.username,
            password: this.ruleForm.password
          };
          this.axios
            .post("/login", newform)
            .then(res => {
              const token = res.data.data.userInfo.token;
              localStorage.setItem("loginToken", token);
              this.$store.getters.change;
              this.$router.push("/display");
            })
            .catch(err => {});
        }
      }
    },
    onSubmit() {
      this.isShow = true;
    },
    // 用户通过了验证
    onSuccess(msg) {
      this.isShow = false; // 通过验证后，需要手动隐藏模态框
      this.key = 1;
      this.sendform();
    },
    // 用户点击遮罩层，应该关闭模态框
    onClose() {
      this.isShow = false;
    },
    canplay() {
      this.vedioCanPlay = true;
    }
  },
  mounted: function() {
    //屏幕自适应
    window.onresize = () => {
      const windowWidth = document.body.clientWidth;
      const windowHeight = document.body.clientHeight;
      const windowAspectRatio = windowHeight / windowWidth;
      let videoWidth;
      let videoHeight;
      if (windowAspectRatio < 0.5625) {
        videoWidth = windowWidth;
        videoHeight = videoWidth * 0.5625;
        this.fixStyle = {
          height: windowWidth * 0.5625 + "px",
          width: windowWidth + "px",
          "margin-bottom": (windowHeight - videoHeight) / 2 + "px",
          "margin-left": "initial"
        };
      } else {
        videoHeight = windowHeight;
        videoWidth = videoHeight / 0.5625;
        this.fixStyle = {
          height: windowHeight + "px",
          width: windowHeight / 0.5625 + "px",
          "margin-left": (windowWidth - videoWidth) / 2 + "px",
          "margin-bottom": "initial"
        };
      }
    };
    window.onresize();
  },
  mounted() {
    this.$notify({
      title: "提示",
      message:
        "目前有两个账号可以登录，分别收管理员和用户，用户名分别是admin,user密码都为：123456",
      type: "warning",
      duartion: 0
    }),
      this.getform();
  }
};
</script>

<style scoped>
.homepage-hero-module,
.video-container {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.video-container .poster img {
  z-index: 0;
  position: absolute;
}

.video-container .filter {
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /*padding: 50px;*/
}

.loginpanel {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 20px;
}

.fillWidth {
  width: 100%;
}

.demo-ruleForm {
  border-radius: 20px;
  padding: 50px;
}
h1 {
  font-family: Helvetica, ‘Hiragino Sans GB’, ‘Microsoft Yahei’, ‘微软雅黑’,
    Arial, sans-serif;
  font-size: 50px;
}
.el-form-item {
  margin: 30px;
  width: 450px;
}
button {
  width: 100%;
}
</style>
© 2020 GitHub, Inc.
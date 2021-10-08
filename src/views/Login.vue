<template>
  <div class="login_wrapper">
    <div class="login_box">
      <!-- avatar -->
      <div class="avatar_box">
        <img src="../assets/logo.png" />
      </div>
      <!--login  -->
      <el-form
        class="login_form"
        ref="loginFormRef"
        :model="loginForm"
        :rules="loginFormRules"
      >
        <!-- input -->
        <el-form-item label="Login Name" prop="username">
          <el-input v-model="loginForm.username"> </el-input>
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input v-model="loginForm.password" type="password"> </el-input>
        </el-form-item>
        <!-- button -->
        <el-form-item class="btn-wrapper">
          <el-button id="btn1" @click.prevent="login">Login</el-button>
          <el-button id="btn2">Create</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
const qs = require("qs-stringify");
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
      loginFormRules: {
        username: [
          { required: true, message: "Please input username", trigger: "blur" },
          {
            min: 5,
            max: 10,
            message: "Length should be 5 to 10",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "Please input password", trigger: "blur" },
          { min: 5, message: "Length should morethan 5", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    login() {
      this.$refs.loginFormRef.validate((valid) => {
        if (!valid) return;
        axios({
          method: "post",
          url: "http://localhost:8100/login",
          data: qs(this.loginForm),
        }).then((res) => {
          if (res.data.status === 200) {
            localStorage.setItem('token','login')
            this.$router.push({
              name: "Home",
            });
            
          } else {
            alert("password is wrong");
          }
        });
      });
    },
  },
};
</script>


<style lang="less" scoped>
.login_wrapper {
  background-color: pink;
  height: 100%;

  .login_box {
    width: 550px;
    height: 400px;
    border-radius: 30px;
    background-color: white;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;

    .avatar_box {
      margin-left: 50%;
      transform: translate(-50%, -50%);
      position: absolute;
      background-color: white;
      height: 150px;
      width: 150px;
      padding: 10px;
      border-radius: 50%;

      img {
        height: 100%;
        border-radius: 50%;
        background-color: wheat;
      }
    }
    .login_form {
      position: relative;
      width: 100%;
      top: 30%;

      .btn-wrapper {
        text-align: right;

        #btn1,
        #btn2 {
          background-color: wheat;
        }
      }
    }
  }
}
</style>
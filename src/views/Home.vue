<template>
  <el-container class="home-container">
    <el-header>
      <span>VUESHOP</span>
      <el-button @click="logout">Logout</el-button>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          class="el-menu-vertical-demo"
          background-color="#EC8E91"
          text-color="#fff"
        >
          <el-submenu index="1">
            <template slot="title">
              <span>Administratioin</span>
            </template>
            <el-menu-item>
              <router-link to="/home/userlist">User List</router-link>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <span>Stock</span>
            </template>
            <el-menu-item>
              <router-link to="/home/stock">Stock List</router-link>
            </el-menu-item>
            <el-menu-item> option2 </el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <span>Item3</span>
            </template>
            <el-menu-item> option1 </el-menu-item>
            <el-menu-item> option2 </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Option1 from "./Userlist.vue";
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      menuList: [],
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$router.push({
        name: "Login",
      });
    },
  },
};
</script>

<style>
.home-container {
  height: 100%;
  width: 100%;
}
.el-header {
  background-color: pink;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  color: rgb(87, 80, 80);
}
.el-aside {
  background-color: rgb(236, 126, 144);
  border: 0px;
}
.el-menu {
  border-right: 0px !important;
}
.el-submenu {
  background-color: rgb(236, 146, 161);
}
.el-menu-item {
  background-color: rgb(231, 167, 178);
}
.el-main {
  background-color: rgb(247, 230, 230);
}
</style>
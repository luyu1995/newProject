<template>
  <div>
    姓名：<el-input v-model="name" placeholder="请输入内容"></el-input>
    密码：<el-input
      v-model="password"
      placeholder="请输入密码"
      show-password
    ></el-input>
    <el-button type="primary" @click="toLogin">登录</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      password: ""
    };
  },
  methods: {
    toLogin() {
      alert("我点击了登录按钮");
    }
  }
};
</script>

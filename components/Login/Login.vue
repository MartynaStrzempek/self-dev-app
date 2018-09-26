<template>
  <el-form class="form">
    <p class="input-text hidden">Login</p>
    <input placeholder="Login" class="input">
    <p class="input-text hidden">Password</p>
    <input placeholder="Password" class="input">
    <p class="input-text hidden">Repeat Password</p>
    <input placeholder="Repeat Password" class="input" :class="{ hidden: isLogin }"/>
    <el-button type="primary" @click="confirm">{{ buttonText }}</el-button>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      buttonText: "",
    }
  },
  props: {
    isLogin: Boolean,
  },
  methods: {
    confirm() {
      if (this.isLogin) {

      } else {

      }
    }
  },
  mounted() {
    if (this.isLogin) this.buttonText = "Login";
    else this.buttonText = "Register";
  }
}
</script>

<style scoped lang="scss">
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  .input {
    width: 100%;
    margin-bottom: 40px;
    border: none;
    border-bottom: 1px solid gray;
  }
  .register-btn {
    width: 100%;
  }
}
.hidden {
  display: none;
}
</style>

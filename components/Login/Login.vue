<template>
  <div>
    <p class="title">{{ title }}</p>
    <el-form class="form">
      <p class="input-text hidden">Login</p>
      <input placeholder="Login" class="input" required>
      <p class="input-text hidden">Password</p>
      <input type="password" placeholder="Password" class="input" required>
      <p class="input-text hidden">Repeat Password</p>
      <input type="password" placeholder="Repeat Password" class="input" :class="{ hidden: isLogin }" required/>
      <el-button type="primary" @click="confirm" class="button">{{ buttonText }}</el-button>
    </el-form>
  </div>
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
    title: String,
  },
  methods: {
    confirm() {
      if (this.isLogin) {
        this.$store.commit("setLoginState", true);
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
    outline: 0;
  }
  .button {
    width: 100%;
    height: 50px;
    font-weight: bold;
  }
}
.title {
  padding-bottom: 30px;
  font-weight: bold;
  font-size: 150%;
  color: rgb(248, 160, 2);
}
.hidden {
  display: none;
}
</style>

<template>
  <div>
    <p class="title">{{ title }}</p>
    <el-form class="form">
      <p class="input-text hidden">Login</p>
      <input placeholder="Login" v-model="form.login" class="input" required>
      <p class="input-text hidden">Password</p>
      <input type="password" placeholder="Password" v-model="form.password" class="input" required>
      <p class="input-text hidden">Repeat Password</p>
      <input type="password" placeholder="Repeat Password" v-model="form.repeatedPassword" class="input" :class="{ hidden: isLogin }" required/>
      <p class="validation-text" :class="{ hidden: isFormFilled }">Every input must be filled!</p>
      <p class="validation-text" :class="{ hidden: arePasswordsMatch }">Passwords do not match. Check them again!</p>
      <p class="validation-text" :class="{ hidden: isLoginCorrect }">I'm sorry, user with this login doesn't exist</p>
      <p class="validation-text" :class="{ hidden: isPasswordCorrect }">Password is'nt correct!</p>
      <el-button type="primary" @click="confirm" class="button">{{ buttonText }}</el-button>
    </el-form>
  </div>
</template>

<script>
import * as ACTIONS from "../../store/actionTypes.js";
import Vue from "vue";
export default {
  data() {
    return {
      form: {
        login: "",
        password: "",
        repeatedPassword: ""
      },
      isFormFilled: true,
      arePasswordsMatch: true,
      isLoginCorrect: true,
      isPasswordCorrect: true,
      buttonText: "",
    }
  },
  props: {
    isLogin: Boolean,
    title: String,
  },
  computed: {

  },
  methods: {
    async confirm() {
      let canConfirm = this.validate();
      if (canConfirm) {
        if (this.isLogin) {
          const user = this.getUser(this.form.login);
          if (user) {
            this.isLoginCorrect = true;
            if (user.password === this.form.password) {
              this.isPasswordCorrect = true;
              this.$store.dispatch(ACTIONS.SET_LOGIN_STATE, true);
              setTimeout(() => this.$router.push('goals'), 500);
            }
            else {
              this.isPasswordCorrect = false;
            }
          }
          else {
            this.isLoginCorrect = false;
          }
        }
        else {
          await this.$store.dispatch(ACTIONS.ADD_USER, this.form);
          await this.$store.dispatch(ACTIONS.SET_LOGIN_STATE, true);
          this.$message({
            message: 'Congratulations, You just have registered!',
            type: 'success'
          });
          setTimeout(() => this.$router.push('goals'), 500);
        }
      }
    },
    validate() {
      const { login, password, repeatedPassword } = this.form;
      if (this.isLogin) {
        this.isFormFilled = login.length > 0 && password.length > 0;
        this.arePasswordsMatch = true;
      }
      else {
        this.isFormFilled = login.length > 0 && password.length > 0 && repeatedPassword.length > 0;
        if (password.length > 0 && repeatedPassword.length > 0) {
          this.arePasswordsMatch = password === repeatedPassword;
        }
      }
      return this.arePasswordsMatch && this.isFormFilled;
    },
    getUser(login) {
      return this.$store.getters["getTargetUser"](login);
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
  .validation-text {
    color: red;
    font-size: 80%;
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

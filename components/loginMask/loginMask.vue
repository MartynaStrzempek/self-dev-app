<template>
  <div>
    <p class="title">{{ title }}</p>
    <el-form class="form">
      <input placeholder="Login" v-model="form.login" class="input" required>
      <input type="email" placeholder="E-mail" v-model="form.email" class="input" v-if="!isLogin" required>
      <input type="password" placeholder="Hasło" v-model="form.password" class="input" required>
      <p class="input-text hidden">Powtórz hasło</p>
      <input type="password" placeholder="Powtórz hasło" v-model="form.repeatedPassword" class="input" v-if="!isLogin" required/>
      <p class="validation-text" v-if="!isFormFilled">Każde pole musi być wypełnione!</p>
      <p class="validation-text" v-if="!arePasswordsMatch">Hasła nie pasują do siebie. Sprawdź je jeszcze raz!</p>
      <p class="validation-text" v-if="loginFailure">Podane dane są nieprawidłowe :(</p>
      <el-button type="primary" @click="confirm" class="button">{{ buttonText }}</el-button>
    </el-form>
  </div>
</template>

<script>
import * as ACTIONS from "../../store/actionTypes.js";
import * as MUTATIONS from "../../store/mutationTypes.js";
import Vue from "vue";
export default {
  data() {
    return {
      form: {
        login: "",
        password: "",
        repeatedPassword: "",
        email: ""
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
    loginFailure() {
      return this.$store.getters["getLoginStatus"];
    }
  },
  methods: {
    async confirm() {
      let canConfirm = this.validate();
      if (canConfirm) {
        if (this.isLogin) {
          await this.$store.dispatch(ACTIONS.LOGIN, {
            login: this.form.login,
            password: this.form.password
          });
        }
        else {
          await this.$store.dispatch(ACTIONS.REGISTER_USER, {
            login: this.form.login,
            email: this.form.email,
            password: this.form.password
          });
          await this.$store.dispatch(ACTIONS.SET_LOGIN_STATE, true);
          this.$alert('Gratulacje, właśnie się zarejestrowałeś! Teraz możesz zalogować się i w pełni korzystać z aplikacji.', '', {
            confirmButtonText: 'OK',
            callback: () => {
              setTimeout(() => this.$router.push('login'), 100);
            }
          });
        }
      }
    },
    validate() {
      const { login, password, repeatedPassword, email } = this.form;
      if (this.isLogin) {
        this.isFormFilled = login.length > 0 && password.length > 0;
        this.arePasswordsMatch = true;
      }
      else {
        this.isFormFilled = login.length > 0 && password.length > 0 && repeatedPassword.length > 0 && email.length > 0;
        if (password.length > 0 && repeatedPassword.length > 0) {
          this.arePasswordsMatch = password === repeatedPassword;
        }
      }
      return this.arePasswordsMatch && this.isFormFilled;
    }
  },
  mounted() {
    if (this.isLogin) this.buttonText = "Zaloguj";
    else this.buttonText = "Zarejestruj";
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

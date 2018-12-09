<template>
  <div>
    <div class="triangle-bg"></div>
    <div class="nav-wrapper">
      <div class="navigation">
        <logo />
        <div class="nav-items">
          <nuxt-link to="/" class="nav-item">Strona domowa</nuxt-link>
          <nuxt-link to="/login" class="nav-item" v-if="!isLogedIn">Zaloguj</nuxt-link>
          <nuxt-link to="/signup" class="nav-item" v-if="!isLogedIn">Zarejestruj</nuxt-link>
          <nuxt-link to="/goals" class="nav-item" v-if="isLogedIn">Moje cele</nuxt-link>
          <nuxt-link to="/account" class="nav-item" v-if="isLogedIn">Moje konto</nuxt-link>
          <nuxt-link to="/about" class="nav-item">O aplikacji</nuxt-link>
          <p @click="logout" class="nav-item logout" v-if="isLogedIn">Wyloguj</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "../../components/logo/logo.vue";
import * as ACTIONS from "../../store/actionTypes.js";
import * as MUTATIONS from "../../store/mutationTypes.js";
export default {
  components: {
    Logo
  },
  computed: {
    isLogedIn() {
      return this.$store.getters["getLoginState"];
    }
  },
  methods: {
    async logout() {
      setTimeout(() => this.$router.push('/'), 50);
      await this.$store.dispatch(ACTIONS.SET_LOGIN_STATE, false);
      await this.$store.commit(MUTATIONS.SET_USER, null);
      await this.$store.commit(MUTATIONS.SET_LOGIN_STATUS, false);
      // await this.$store.commit(MUTATIONS.SET_TOKEN, null);
      localStorage.setItem('token', null);
      await this.$store.commit(MUTATIONS.CLEAR_STATE);
    }
  }
}
</script>

<style scoped lang="scss">
.triangle-bg {
  width: 0;
  height: 0;
  border-top: 130px solid rgb(64, 158, 255);
  border-right: 300vw solid transparent;
  position: absolute;
  top: 0;
  left: 0;
}
.nav-wrapper {
  width: 100vw;
  height: 100px;
  position: relative;
  .navigation {
    width: 80%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'Niconne', cursive;
    .nav-items {
      display: flex;
      .nav-item {
        padding-left: 40px;
        color: white;
        font-size: 125%;
        text-decoration: none;
      }
      .logout:hover {
        cursor: pointer;
      }
      p {
        margin: 0;
      }
    }
  }
}
</style>

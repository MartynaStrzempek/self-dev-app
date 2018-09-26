<template>
  <div class="wrapper">
    <div class="navigation">
      <logo />
      <div class="nav-items">
        <nuxt-link to="/" class="nav-item">Home</nuxt-link>
        <nuxt-link to="/login" class="nav-item" v-if="!isLogedIn">Log in</nuxt-link>
        <nuxt-link to="/signup" class="nav-item" v-if="!isLogedIn">Sign up</nuxt-link>
        <nuxt-link to="/goals" class="nav-item" v-if="isLogedIn">My goals</nuxt-link>
        <nuxt-link to="/account" class="nav-item" v-if="isLogedIn">My account</nuxt-link>
        <nuxt-link to="/about" class="nav-item">About</nuxt-link>
        <p @click="logout" class="nav-item logout" v-if="isLogedIn">Log out</p>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "../../components/logo/logo.vue";
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
    logout() {
      this.$store.commit("setLoginState", false);
    }
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  width: 100vw;
  height: 80px;
  background-color: rgb(64, 158, 255);
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
        /*letter-spacing: 1px;*/
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

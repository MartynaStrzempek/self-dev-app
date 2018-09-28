<template>
  <div>
    <div class="triangle-bg"></div>
    <div class="nav-wrapper">
      <div class="navigation">
        <logo />
        <div class="nav-items">
          <nuxt-link to="/" class="nav-item">Home</nuxt-link>
          <nuxt-link to="/login" class="nav-item">Log in</nuxt-link>
          <nuxt-link to="/signup" class="nav-item">Sign up</nuxt-link>
          <nuxt-link to="/goals" class="nav-item">My goals</nuxt-link>
          <nuxt-link to="/account" class="nav-item">My account</nuxt-link>
          <nuxt-link to="/about" class="nav-item">About</nuxt-link>
          <p @click="logout" class="nav-item logout">Log out</p>
        </div>
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

  },
  methods: {
    logout() {
      this.$store.commit("setLoginState", false);
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

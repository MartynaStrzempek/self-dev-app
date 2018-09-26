<template>
  <h1 @click="login">login</h1>
</template>

<script>
export default {
  methods: {
    login() {
      this.$store.commit("setLoginState", true);
    }
  }
}
</script>

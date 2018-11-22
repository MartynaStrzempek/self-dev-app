<template>
  <div class="container">
    <div class="row d-flex align-items-center justify-content-center">
      <div class="col-lg-5">
        <login-mask :isLogin="true" title="Witaj ponownie!" />
      </div>
    </div>
  </div>
</template>

<script>
import LoginMask from "../../components/loginMask/loginMask.vue";
export default {
  components: {
    LoginMask
  }
}
</script>

<style scoped lang="scss">
.container {
  height: calc(100vh - 80px);
  .row {
    height: 100%;
  }
}
</style>

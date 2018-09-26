<template>
  <div class="container">
    <div class="row d-flex align-items-center justify-content-center">
      <div class="col-lg-5">
        <login :isLogin="true" title="Welcome again!" />
      </div>
    </div>
  </div>
</template>

<script>
import Login from "../../components/Login/Login.vue";
export default {
  components: {
    Login
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

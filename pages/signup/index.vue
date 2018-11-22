<template>
  <div class="container">
   <div class="row d-flex align-items-center">
     <div class="registration col-lg-6 d-flex justify-content-start align-items-center">
       <div class="col-lg-9">
         <login-mask :isLogin="false" title="Zarejestruj się!" />
       </div>
     </div>
     <div class="login col-lg-6 d-flex justify-content-end align-items-center">
       <div class="col-lg-9">
         <login-mask :isLogin="true" title="Masz już konto?" />
       </div>
     </div>
   </div>
  </div>
</template>

<script>
import LoginMask from "../../components/loginMask/loginMask.vue";
export default {
  components: {
    LoginMask,
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.container {
  height: calc(100vh - 80px);
  .row {
    height: 100%;
    .registration {
      width: 50%;
      height: 70%;
      border-right: 1px solid rgb(128, 128, 128);
    }
    .login {
      width: 50%;
      height: 70%;
    }
  }
}
</style>

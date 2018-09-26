<template>
  <div class="container">
   <div class="row d-flex align-items-center">
     <div class="registration col-lg-6 d-flex justify-content-start align-items-center">
       <div class="col-lg-9">
         <login :isLogin="false" title="Register yourself!" />
       </div>
     </div>
     <div class="login col-lg-6 d-flex justify-content-end align-items-center">
       <div class="col-lg-9">
         <login :isLogin="true" title="Do You have an account?" />
       </div>
     </div>
   </div>
  </div>
</template>

<script>
import Login from "../../components/Login/Login.vue";
export default {
  components: {
    Login,
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

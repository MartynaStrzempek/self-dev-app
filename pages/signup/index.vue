<template>
  <div class="container">
   <div class="row justify-content-lg-around">
     <div class="registration col-lg-4">
       <p class="title">Register yourself!</p>
       <login isLogin="false" />
     </div>
     <div class="login col-lg-4">
       <p class="title">Do You have an account?</p>
       <login isLogin="true"/>
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
.title {
  padding-bottom: 20px;
}
</style>

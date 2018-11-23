<template>
  <div class="container">
    <div class="row">
      <div class="user-data col-lg-6">
        <h3>Twoje dane</h3>
        <h4>Login</h4>
        <p>Bartek55</p>
        <h4>E-mail</h4>
        <p>bartosz.nowak@onet.pl</p>
      </div>
      <div class="buttons col-lg-6">
        <el-button class="button">Zmień hasło</el-button>
        <el-button class="button">Zmień e-mail</el-button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.user-data {
  margin-top: 60px;
}
.buttons {
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .button {
    width: 200px;
    height: 50px;
    margin: 0;
  }
}
</style>

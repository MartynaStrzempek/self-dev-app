<template>
  <div>
    <div class="first-section section"></div>
    <div class="second-section section"></div>
    <div class="third-section section"></div>
    <div class="fifth-section section">
      <div class="fourth-section section"></div>
      <div class="sixth-section section"></div>
    </div>
    <div class="third-section section"></div>
    <div class="footer">
      <p class="copyrights">Copyright &copy; 2018 Martyna Strzempek</p>
      <div class="fourth-section section"></div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
.section {
  width: 100vw;
  height: 500px;
}
.first-section {
  margin-top: -15px;
  background: rgba(254, 92, 92, 0.6) url(../assets/images/ad1.jpg) fixed center top;
  background-blend-mode: multiply;

}
.second-section {
  width: 0;
  height: 0;
  border-bottom: 500px solid white;
  border-left: 1260vw solid transparent;
  margin-top: -500px;
}
.third-section {
  background-color: white;
}
.fourth-section {
  width: 0;
  height: 0;
  border-top: 40px solid white;
  border-right: 100vw solid transparent;
  position: absolute;
  top: 0;
  left: 0;
}
.sixth-section {
  width: 0;
  height: 0;
  border-bottom: 500px solid white;
  border-left: 1260vw solid transparent;
  margin-top: -500px;
  position: absolute;
  bottom: 0;
  left: 0;
}
.fifth-section {
  background: rgba(255, 165, 0, 0.6) url(../assets/images/p1.jpg) fixed center top;
  background-blend-mode: multiply;
  margin-top: -40px;
  position: relative;
}
.footer {
  width: 100vw;
  height: 130px;
  background-color: rgb(64, 158, 255);
  margin-top: -40px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  .copyrights {
    text-align: center;
    margin: 0;
    padding-top: 10px;
    color: white;
  }
}
</style>

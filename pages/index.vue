<template>
  <div>
    <div class="first-section section">
      <div class="container">
        <div class="row d-flex justify-content-end">
          <div class="image-text col-lg-6">Lorem ipsum dolor sit amet, vis aeterno aliquip te, per vero antiopam ad.</div>
        </div>
      </div>
    </div>

    <div class="white-right-triangle section"></div>

    <div class="second-section section">
      <div class="container">
        <div class="row d-flex justify-content-center">
          <!--<div class="first-title col-lg-12">Lorem ipsum dolor sit amet</div>-->
          <!--<div class="feature col-lg-4">-->
            <!--<i class="fas fa-frog"></i>-->
          <!--</div>-->
          <!--<div class="feature col-lg-4">-->
            <!--<i class="fas fa-frog"></i>-->
          <!--</div>-->
          <!--<div class="feature col-lg-4">-->
            <!--<i class="fas fa-frog"></i>-->
          <!--</div>-->
        </div>
      </div>
    </div>

    <div class="third-section section">
      <div class="container">
        <div class="row d-flex justify-content-end">
          <div class="image-text col-lg-6">Lorem ipsum dolor sit amet, vis aeterno aliquip te, per vero antiopam ad.</div>
        </div>
      </div>
      <div class="white-left-triangle section"></div>
      <div class="white-absolute-right-triangle section"></div>
    </div>

    <div class="fourth-section section"></div>

    <div class="footer">
      <p class="copyrights">Copyright &copy; 2018 Martyna Strzempek</p>
      <div class="white-left-triangle section"></div>
    </div>
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
export default {
  mounted() {
    AOS.init();
  }
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
.second-section, .fourth-section {
  background-color: white;
}

.third-section {
  background: rgba(255, 165, 0, 0.6) url(../assets/images/p1.jpg) fixed center top;
  background-blend-mode: multiply;
  margin-top: -40px;
  position: relative;
  .white-absolute-right-triangle {
    width: 0;
    height: 0;
    border-bottom: 500px solid white;
    border-left: 1260vw solid transparent;
    margin-top: -500px;
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
.row {
  height: 500px;
  .image-text {
    color: white;
    font-size: 250%;
    font-weight: bold;
    display: flex;
    align-items: center;
    text-align: center;
  }
  .first-title {
    font-size: 250%;
    letter-spacing: 1px;
    font-weight: bold;
    color: rgba(254, 92, 92, 0.6);
    font-family: Niconne, cursive;
    text-align: center;
    margin-top: 20px;
  }
  .feature {
    text-align: center;
    i {
      font-size: 500%;
      color: rgb(64, 158, 255);
    }
  }
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
.white-right-triangle {
  width: 0;
  height: 0;
  border-bottom: 500px solid white;
  border-left: 1260vw solid transparent;
  margin-top: -500px;
}
.white-left-triangle {
  width: 0;
  height: 0;
  border-top: 40px solid white;
  border-right: 100vw solid transparent;
  position: absolute;
  top: 0;
  left: 0;
}
</style>

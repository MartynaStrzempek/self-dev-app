<template>
  <div>
    <div class="first-section section">
      <div class="container">
        <div class="row d-flex justify-content-end">
          <div class="image-text col-lg-6">Z nami osiągniesz szczyty swoich możliwości</div>
        </div>
      </div>
    </div>

    <div class="white-right-triangle section"></div>

    <div class="second-section section">
      <div class="container">
        <div class="row d-flex justify-content-center">
          <div class="first-title col-lg-12">Self Dev App to aplikacja wspomagająca rozwój osobisty</div>
          <div class="feature col-lg-4">
            <i class="fas fa-clipboard-list goals"></i>
            <p>Dodawaj cele główne i awaryjne</p>
          </div>
          <div class="feature col-lg-4">
            <i class="fas fa-check statuses"></i>
            <p>Zaznaczaj postępy oraz zapisuj notatki</p>
          </div>
          <div class="feature col-lg-4">
            <i class="fas fa-star awards"></i>
            <p>Wyznaczaj nagrody</p>
          </div>
        </div>
      </div>
    </div>

    <div class="third-section section">
      <div class="container">
        <div class="row d-flex justify-content-end">
          <div class="image-text col-lg-6">Podążaj drogą do lepszej przyszłości</div>
        </div>
      </div>
      <div class="white-left-triangle section"></div>
      <div class="white-absolute-right-triangle section"></div>
    </div>

    <div class="fourth-section section">
      <div class="container">
        <div class="row d-flex justify-content-center">
          <div class="second-title col-lg-12">Zarejestruj się już teraz!!!</div>
          <div><el-button class="registration-btn" type="danger">
            <nuxt-link class="btn-link" to="/signup">Rejestracja</nuxt-link>
          </el-button></div>
        </div>
      </div>
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
    font-size: 300%;
    font-weight: bold;
    display: flex;
    align-items: center;
    text-align: center;
  }
  .first-title {
    font-size: 200%;
    letter-spacing: 1px;
    font-weight: bold;
    color: #7f828b;
    text-align: center;
    margin-top: 40px;
    height: 50px;
  }
  .second-title {
    text-align: center;
    padding-top: 100px;
    font-size: 300%;
    letter-spacing: 1px;
    font-weight: bold;
    color: #7f828b;
  }
  .registration-btn {
    width: 300px;
    height: 60px;
    .btn-link {
      text-decoration: none;
      color: white;
    }
  }
  .feature {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    i {
      font-size: 500%;
    }
    .goals {
      color: rgb(64, 158, 255);
    }
    .statuses {
      color: rgba(254, 92, 92, 0.6);
    }
    .awards {
      color: rgba(255, 165, 0, 0.6);
    }
    p {
      padding-top: 15px;
      color: #7f828b;
      font-weight: bold;
      width: 50%;
      margin: 0;
    }
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

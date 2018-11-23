<template>
  <div>
    <navigation />
    <nuxt/>
    <div class="footer">
      <p class="copyrights">Copyright &copy; 2018 Martyna Strzempek</p>
      <div class="white-left-triangle section"></div>
    </div>
  </div>
</template>

<script>
import Navigation from "../components/navigation/navigation.vue";
export default {
  components: {
    Navigation
  }
}
</script>

<style lang="scss">
html
{
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*, *:before, *:after
{
  box-sizing: border-box;
  margin: 0;
}
body {
  font-family: 'Montserrat', sans-serif;
  overflow-x: hidden;
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
.section {
  width: 100vw;
  height: 500px;
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

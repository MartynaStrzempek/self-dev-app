<template>
  <div class="default-container">
    <navigation />
    <nuxt/>
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
.default-container {
  min-height: 100vh;
  position: relative;
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

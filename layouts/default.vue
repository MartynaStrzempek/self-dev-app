<template>
  <div>
    <navigation />
    <!--<div class="triangle"></div>-->
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

<style>
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
.triangle {
  width: 0;
  height: 0;
  border-top: 100px solid red;
  border-right: 250vw solid transparent;
}

</style>

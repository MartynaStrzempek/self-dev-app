<template>
  <div class="footer-wrapper">
    <div class="footer">
      <p class="copyrights">Copyright &copy; 2018 Martyna Strzempek</p>
      <div class="white-left-triangle section"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer-wrapper {
  position: absolute;
  bottom: 0;
  .footer {
    width: 100vw;
    height: 130px;
    background-color: rgb(64, 158, 255);
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
}
</style>

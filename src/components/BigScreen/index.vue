<template>
  <div class="view">
    <div class="container">
      <HeaderTop class="header"> </HeaderTop>
      <div class="left1">left1</div>
      <div class="left2">left2</div>
      <div class="left3">left3</div>
      <div class="mid">mid</div>
      <div class="right1">right1</div>
      <div class="right2">right2</div>
      <div class="right3">right3</div>
    </div>
  </div>
</template>

<script>
import HeaderTop from "./HeaderTop.vue"
export default {
  components:{
    HeaderTop
  }
};
</script>

<style scoped>
.view {
  width: 3840px;
  height: 2160px;
}
.container {
  position: relative;
  color: white;
  transform: scale(1, 1);
  width: 3840px;
  height: 2160px;
  background-position: 0% 0%;
  background-size: 100% 100%;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-image: url(img/bg.png);
}
.container > div {
  position: absolute;
}
.header {
  width: 3770px;
  height: 150px;
  /* background-color: red; */
  left: 36px;
  top: 50px;
}
.left1 {
  width: 980px;
  height: 614px;
  left: 72px;
  top: 234px;
  background-color: purple;
}
.left2 {
  width: 980px;
  height: 594px;
  left: 72px;
  top: 888px;
  background-color: pink;
}
.left3 {
  width: 980px;
  height: 574px;
  left: 72px;
  top: 1522px;
  background-color: chocolate;
}
.mid {
  width: 1656px;
  height: 1854px;
  left: 1092px;
  top: 242px;
  background-color: blueviolet;
}
.right1 {
  width: 980px;
  height: 634px;
  left: 2788px;
  top: 234px;
  background-color: yellow;
}
.right2 {
  width: 980px;
  height: 634px;
  left: 2788px;
  top: 908px;
  background-color: green;
}
.right3 {
  width: 980px;
  height: 514px;
  left: 2788px;
  top: 1582px;
  background-color: skyblue;
}
</style>


<template>
  <div class="box">
    <div class="number1"></div>
    <div class="number2"></div>
    <div class="number3"></div>
    <div class="number4"></div>
    <MapChina class="map-china"></MapChina>
    <div class="table"></div>
  </div>
</template>

<script>
import MapChina from "./MapChina.vue";
export default {
  components: {
    MapChina,
  },
};
</script>

<style scoped>
.box {
  width: 100%;
  height: 100%;
}
.box .number1 {
  position: absolute;
  background-color: pink;
  width: 332px;
  height: 200px;
  left: 64px;
  top: 162px;
}
.box .number2 {
  position: absolute;
  background-color: pink;
  width: 332px;
  height: 200px;
  left: 476px;
  top: 162px;
}
.box .number3 {
  position: absolute;
  background-color: pink;
  width: 332px;
  height: 200px;
  left: 874px;
  top: 162px;
}
.box .number4 {
  position: absolute;
  background-color: pink;
  width: 332px;
  height: 200px;
  left: 1272px;
  top: 162px;
}
.map-china {
  position: absolute;
  width: 1080px;
  height: 886px;
  left: 288px;
  top: 408px;
}
.table {
  position: absolute;
  left: 80px;
  top: 1378px;
  height: 408px;;
  width: 1496px;
  background-color:yellow;
}
</style>
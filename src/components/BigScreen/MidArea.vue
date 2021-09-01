<template>
  <div class="box">
    <AreaTitle text="全国执行情况汇总"></AreaTitle>
    <NumberBox class="number1"></NumberBox>
    <NumberBox class="number2"></NumberBox>
    <NumberBox class="number3"></NumberBox>
    <NumberBox class="number4"></NumberBox>
    <MapChina class="map-china"></MapChina>
    <TableScroll class="table"></TableScroll>
  </div>
</template>

<script>
import MapChina from "./MapChina.vue";
import AreaTitle from "./AreaTitle.vue";
import NumberBox from "./NumberBox.vue";
import TableScroll from "./TableScroll.vue";
export default {
  components: {
    MapChina,
    AreaTitle,
    NumberBox,
    TableScroll,
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
  /* background-color: pink; */
  width: 332px;
  height: 200px;
  left: 64px;
  top: 162px;
  background-image: url(img/number.png);
}
.box .number2 {
  position: absolute;
  /* background-color: pink; */
  background-image: url(img/number.png);

  width: 332px;
  height: 200px;
  left: 476px;
  top: 162px;
}
.box .number3 {
  position: absolute;
  /* background-color: pink; */
  background-image: url(img/number.png);

  width: 332px;
  height: 200px;
  left: 874px;
  top: 162px;
}
.box .number4 {
  position: absolute;
  /* background-color: pink; */
  background-image: url(img/number.png);

  width: 332px;
  height: 200px;
  left: 1272px;
  top: 162px;
}
.map-china {
  position: absolute;
  width: 1500px;
  height: 886px;
  left: 78px;
  top: 408px;
}
.table {
  position: absolute;
  left: 80px;
  top: 1378px;
  height: 408px;
  width: 1496px;
  /* background-color: yellow; */
}
</style>
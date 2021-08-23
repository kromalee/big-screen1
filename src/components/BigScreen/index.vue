<template>
  <div class="view">
    <div class="container">
      <HeaderTop class="header"> </HeaderTop>
      <RadarChat class="left1"></RadarChat>
      <StackedLineChart class="left2"></StackedLineChart>
      <GradientStackedAreaChart class="left3"></GradientStackedAreaChart>
      <MidArea class="mid"></MidArea>
      <TableRace class="right1"></TableRace>
      <BarRace class="right2"></BarRace>
      <SmoothedLineChart class="right3"></SmoothedLineChart>
    </div>
  </div>
</template>

<script>
import HeaderTop from "./HeaderTop.vue";
import RadarChat from "./RadarChat.vue";
import StackedLineChart from "./StackedLineChart.vue";
import GradientStackedAreaChart from "./GradientStackedAreaChart.vue";
import BarRace from "./BarRace.vue";
import SmoothedLineChart from "./SmoothedLineChart.vue";
import MidArea from "./MidArea.vue";
import TableRace from "./TableRace.vue";
export default {
  components: {
    HeaderTop,
    RadarChat,
    StackedLineChart,
    GradientStackedAreaChart,
    BarRace,
    SmoothedLineChart,
    MidArea,
    TableRace,
  },
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
  /* background-color: purple; */
}
.left2 {
  width: 980px;
  height: 594px;
  left: 72px;
  top: 888px;
  /* background-color: pink; */
}
.left3 {
  width: 980px;
  height: 574px;
  left: 72px;
  top: 1522px;
  /* background-color: chocolate; */
}
.mid {
  width: 1656px;
  height: 1854px;
  left: 1092px;
  top: 242px;
  /* background-color: blueviolet; */
}
.right1 {
  width: 980px;
  height: 634px;
  left: 2788px;
  top: 234px;
  background-color: pink;
}
.right2 {
  width: 980px;
  height: 634px;
  left: 2788px;
  top: 908px;
  /* background-color: green; */
}
.right3 {
  width: 980px;
  height: 514px;
  left: 2788px;
  top: 1582px;
  /* background-color: skyblue; */
}
</style>


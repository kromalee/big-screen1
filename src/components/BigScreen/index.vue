<template>
  <div class="view" :style="viewStyle">
    <div class="container" :style="containerStyle">
      <HeaderTop class="header"> </HeaderTop>
      <RadarChat class="left1" :option="proportionOfCaseTypes"></RadarChat>
      <StackedLineChart
        class="left2"
        :option="entityCaseFilingRate"
      ></StackedLineChart>
      <GradientStackedAreaChart
        class="left3"
        :option="trendOfFiling"
      ></GradientStackedAreaChart>
      <MidArea class="mid" :option="implementation"></MidArea>
      <TableRace class="right1" :option="regionalDistributorTop10"></TableRace>
      <BarRace class="right2" :option="midCourtFilingTop10"></BarRace>
      <SmoothedLineChart
        class="right3"
        :option="trendOfFiling2"
      ></SmoothedLineChart>
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
  props: {
    proportionOfCaseTypes: Array,
    entityCaseFilingRate: Array,
    trendOfFiling: Array,
    regionalDistributorTop10: Array,
    midCourtFilingTop10: Array,
    trendOfFiling2: Array,
    implementation: Array,
  },
  data() {
    return {
      viewStyle: {
        width: "2560px",
        height: "1440px",
      },
      containerStyle: {
        transform: "scale(0.66666, 0.66666)",
      },
    };
  },
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
  methods: {
    resize() {
      this.viewStyle.width = window.innerWidth + "px";
      this.viewStyle.height = window.innerHeight + "px";
      const widthRate = window.innerWidth / 3840;
      const heightRate = window.innerHeight / 2160;
      this.containerStyle.transform =
        "scale(" + widthRate + ", " + heightRate + ")";
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.resize();
      window.addEventListener("resize", () => {
        this.resize();
      });
    });
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
  transform-origin: 0 0;
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
  background-image: url(img/left1.png);
}
.left2 {
  width: 980px;
  height: 594px;
  left: 72px;
  top: 888px;
  background-image: url(img/left2.png);
  /* background-color: pink; */
}
.left3 {
  width: 980px;
  height: 574px;
  left: 72px;
  top: 1522px;
  background-image: url(img/left3.png);
  /* background-color: chocolate; */
}
.mid {
  width: 1656px;
  height: 1854px;
  left: 1092px;
  top: 242px;
  background-image: url(img/mid.png);
  /* background-color: blueviolet; */
}
.right1 {
  width: 980px;
  height: 634px;
  left: 2788px;
  top: 234px;
  /* background-color: pink; */
  background-image: url(img/right1.png);
}
.right2 {
  width: 980px;
  height: 634px;
  left: 2788px;
  top: 908px;
  /* background-color: green; */
  background-image: url(img/right2.png);
}
.right3 {
  width: 980px;
  height: 514px;
  left: 2788px;
  top: 1582px;
  /* background-color: skyblue; */
  background-image: url(img/right3.png);
}
</style>


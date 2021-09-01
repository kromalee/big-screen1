<template>
  <div>
    <AreaTitle text="中案立案率Top10"></AreaTitle>
    <div class="chart" ref="chart"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import AreaTitle from "./AreaTitle.vue";

export default {
  components: { AreaTitle },
  mounted() {
    this.$nextTick(() => {
      const myChart = echarts.init(this.$refs.chart);

      const option = {
        grid: {
          show: false,
          left: "50%",
          right: "10%",
          width: "40%",
        },
        xAxis: {
          axisLabel: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          max: "dataMax",
        },
        yAxis: {
          axisLabel: {
            fontSize: "24px",
            fontFamily: " SourceHanSansCN-Normal, SourceHanSansCN",
            fontWeight: 400,
            color: "#FFFFFF",
            align: "right",
            margin: 20,
            showMaxLabel: true,
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          type: "category",
          data: [
            "新疆维吾尔族自治区哈密市中级人民法院",
            "苏州市中级人民法院",
            "北京市第一中级人民法院",
            "佳木斯市中级人民法院",
            "苏州市中级人民法院",
            "鹤岗市中级人民法院",
            "黑龙江农垦中级人民法院",
            "天津第一中级人民法院",
            "秦皇岛市中级人民法院",
            "辽宁市中级人民法院",
          ],
          inverse: true,
          max: 9,
        },
        series: [
          {
            name: "X",
            type: "bar",
            data: [1000, 900, 800, 700, 600, 500, 400, 300, 200, 100],
            barMaxWidth: "24px",
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  color: "rgba(1, 143, 248, 1)",
                },
                {
                  offset: 1,
                  color: "rgba(0, 254, 246, 1)",
                },
              ]),
              shadowOffsetY: 2,
              shadowBlur: 12,
              shadowColor: "rgba(0, 236, 246, 1)",
            },
            label: {
              show: true,
              color: "#ffffff",
              fontWeight: 400,
              fontSize: 24,
              position: "right",
              distance: 20,
            },
          },
        ],
      };
      myChart.setOption(option);
    });
  },
};
</script>
<style scoped>
.chart {
  padding: 20px;
  padding-top: 90px;
  width: calc(100% - 40px);
  height: calc(100% - 110px);
}
</style>
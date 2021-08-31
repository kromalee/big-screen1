<template>
  <div>
    <AreaTitle text="立案趋势"></AreaTitle>
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
      const option = {
        grid: {
          left: "45px",
          right: "5px",
        },

        xAxis: {
          axisTick: {
            show: false,
          },
          type: "category",
          axisLabel: {
            color: "#84A2FF",
            fontSize: "20px",
            fontFamily: "SourceHanSansCN-Normal, SourceHanSansCN",
            fontWeight: 400,
            interval: 0,
          },
          boundaryGap: true,
          data: [
            "一月",
            "二月",
            "三月",
            "四月",
            "五月",
            "六月",
            "七月",
            "八月",
            "九月",
            "十月",
            "十一月",
            "十二月",
          ],
        },
        yAxis: {
          type: "value",
          splitLine: {
            lineStyle: {
              width: 2,
              color: "rgba(26, 79, 245, 0.3)",
              type: "dashed",
            },
          },
          axisLabel: {
            color: "#84A2FF",
            fontSize: "20px",
            fontFamily: "SourceHanSansCN-Normal, SourceHanSansCN",
            fontWeight: 400,
          },
        },
        series: [
          {
            name: "立案趋势",
            type: "line",
            symbol: "none",
            smooth: true,
            lineStyle: {
              width: 8,
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(200, 78, 188, 1)", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgba(149, 123, 253, 1)", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
              shadowBlur: 12,
              shadowOffsetY: -2,
              shadowColor: "rgba(174, 101, 221, 1)",
            },
            data: [116, 149, 89, 9, 95, 139, 60, 134, 69, 25, 66, 50],
          },
        ],
      };
      const myChart = echarts.init(this.$refs.chart);
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
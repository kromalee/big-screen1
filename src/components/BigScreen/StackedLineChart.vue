<template>
  <div>
    <AreaTitle text="各主体立案率"></AreaTitle>
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
        tooltip: {
          trigger: "axis",
        },
        legend: {
          icon: "roundRect",
          bottom: 0,
          itemGap: 20,
          textStyle: {
            fontSize: "20px",
            color: "#fff",
            fontWeight: 400,
          },
          data: [
            { name: "银行", itemStyle: { color: "#1890FF" } },
            { name: "消金", itemStyle: { color: "#32C25F" } },
            { name: "小贷", itemStyle: { color: "#FACC14" } },
            { name: "保险", itemStyle: { color: "#536FE3" } },
            { name: "担保", itemStyle: { color: "#8543E0" } },
            { name: "金融", itemStyle: { color: "#13C2C2" } },
            { name: "P2P网贷", itemStyle: { color: "#3ACAF7" } },
          ],
        },
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
            name: "银行",
            type: "line",
            symbol: "circle",
            symbolSize: 12,
            // itemStyle: {
            //   color: "#1890FF",
            // },
            data: [116, 149, 89, 9, 95, 139, 60, 134, 69, 25, 66, 50],
          },
          {
            name: "消金",
            type: "line",
            symbol: "circle",
            symbolSize: 12,
            itemStyle: { color: "#32C25F" },
            data: [100, 0, 97, 79, 74, 51, 147, 2, 10, 143, 91, 143],
          },
          {
            name: "小贷",
            type: "line",
            symbol: "circle",
            symbolSize: 12,
            itemStyle: { color: "#FACC14" },
            data: [42, 17, 35, 42, 108, 78, 129, 95, 97, 141, 135, 139],
          },

          {
            name: "保险",
            type: "line",
            symbol: "circle",
            symbolSize: 12,
            itemStyle: { color: "#536FE3" },
            data: [117, 113, 42, 8, 61, 52, 59, 102, 98, 85, 92, 93],
          },
          {
            name: "担保",
            type: "line",
            symbol: "circle",
            symbolSize: 12,
            itemStyle: { color: "#8543E0" },
            data: [34, 69, 139, 92, 26, 103, 127, 92, 57, 79, 102, 129],
          },
          {
            name: "金融",
            type: "line",
            symbol: "circle",
            symbolSize: 12,
            itemStyle: { color: "#13C2C2" },
            data: [53, 69, 68, 2, 25, 65, 89, 15, 64, 25, 99, 36],
          },
          {
            name: "P2P网贷",
            type: "line",
            symbol: "circle",
            symbolSize: 12,
            itemStyle: { color: "#3ACAF7" },
            data: [115, 143, 103, 89, 115, 148, 53, 35, 141, 125, 72, 83],
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
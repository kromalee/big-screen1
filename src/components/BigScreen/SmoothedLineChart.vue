<template>
  <div ref="chart"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  mounted() {
    this.$nextTick(() => {
      const option = {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            smooth: true,
          },
        ],
      };
      const myChart = echarts.init(this.$refs.chart);
      myChart.setOption(option);
    });
  },
};
</script>

<style>
</style>
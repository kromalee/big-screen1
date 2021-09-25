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
  props: { option: Array },
  watch: {
    option: {
      immediate: true,
      handler(newVal) {
        if (newVal) {
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
                data: newVal.map((obj) => {
                  return obj.name;
                }),
                inverse: true,
                max: 9,
              },
              series: [
                {
                  name: "X",
                  type: "bar",
                  data: newVal.map((obj) => {
                    return obj.value;
                  }),
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
        }
      },
    },
  },
  mounted() {},
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
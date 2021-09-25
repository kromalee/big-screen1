<template>
  <div>
    <AreaTitle text="各主体立案率"></AreaTitle>
    <div class="chart" ref="chart"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import AreaTitle from "./AreaTitle.vue";
const colorArray = [
  "#1890FF",
  "#32C25F",
  "#FACC14",
  "#536FE3",
  "#8543E0",
  "#13C2C2",
  "#3ACAF7",
];
export default {
  components: { AreaTitle },
  props: {
    option: Array,
  },
  mounted() {},
  watch: {
    option: {
      immediate: true,
      handler(newVal) {
        if (newVal) {
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
                  {
                    name: "银行",
                    itemStyle: {
                      color: "#1890FF",
                    },
                  },
                  {
                    name: "消金",
                    itemStyle: { color: "#32C25F" },
                  },
                  {
                    name: "小贷",
                    itemStyle: { color: "#FACC14" },
                  },

                  {
                    name: "保险",
                    itemStyle: { color: "#536FE3" },
                  },
                  {
                    name: "担保",
                    itemStyle: { color: "#8543E0" },
                  },
                  {
                    name: "金融",
                    itemStyle: { color: "#13C2C2" },
                  },
                  {
                    name: "P2P网贷",
                    itemStyle: { color: "#3ACAF7" },
                  },
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
              series: newVal.map((obj, index) => {
                return {
                  name: obj.type,
                  type: "line",
                  symbol: "circle",
                  symbolSize: 12,
                  itemStyle: {
                    color: colorArray[index % 7],
                  },
                  data: obj.value,
                };
              }),
            };
            const myChart = echarts.init(this.$refs.chart);
            myChart.setOption(option);
          });
        }
      },
    },
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
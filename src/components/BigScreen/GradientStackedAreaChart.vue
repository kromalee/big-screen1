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
        color: ["#80FFA5", "#00DDFF", "#37A2FF", "#FF0087", "#FFBF00"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
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
              name: "申请量",
              itemStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "#00FEF6", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#018FF8", // 100% 处的颜色
                    },
                  ],
                  global: false, // 缺省为 false
                },
                // color: "linear-gradient(270deg, #00FEF6 0%, #018FF8 100%)",
              },
            },
            {
              name: "立案量",
              itemStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "#D345AE", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#937DFF", // 100% 处的颜色
                    },
                  ],
                  global: false, // 缺省为 false
                },
              },
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
        series: [
          {
            name: "申请量",
            type: "line",
            stack: "总量",
            smooth: false,
            lineStyle: {
              width: 4,
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(0, 255, 246, 1)", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgba(1, 140, 248, 1)", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
              shadowBlur: 12,
              shadowOffsetY: -2,
              shadowColor: "rgba(5, 188, 199, 1)",
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgba(0, 255, 246, 1)",
                },
                {
                  offset: 1,
                  color: "rgba(1, 143, 248, 0)",
                },
              ]),
            },
            emphasis: {
              focus: "series",
            },
            data: [29, 36, 25, 39, 34, 7, 25, 24, 21, 5, 48, 25],
          },
          {
            name: "立案量",
            type: "line",
            stack: "总量",
            smooth: false,
            lineStyle: {
              width: 4,
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
              shadowColor: "rgba(193, 83, 196, 1)",
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgba(211, 69, 174, 1)",
                },
                {
                  offset: 1,
                  color: "rgba(147, 125, 255, 0)",
                },
              ]),
            },
            emphasis: {
              focus: "series",
            },
            data: [13, 36, 43, 13, 39, 9, 28, 2, 28, 40, 7, 39],
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
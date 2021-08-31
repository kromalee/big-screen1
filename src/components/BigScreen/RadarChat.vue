<template>
  <div>
    <AreaTitle text="案件类型占比"></AreaTitle>
    <div class="chart" ref="chart"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import AreaTitle from "./AreaTitle.vue";
export default {
  components: {
    AreaTitle,
  },
  mounted() {
    this.$nextTick(() => {
      const option = {
        tooltip: {
          trigger: "item",
        },

        // visualMap: {
        //   top: "middle",
        //   right: 10,
        //   color: ["red", "yellow"],
        //   calculable: true,
        // },
        radar: {
          name: {
            color: "#fff",
            fontWeight: 500,
            lineHeight: 32,
            fontSize: 32,
            fontFamily: "SourceHanSansCN-Medium, SourceHanSansCN",
          },
          splitArea: {
            areaStyle: {
              color: [
                "rgba(216, 216, 216, 0.4)",
                "rgba(216, 216, 216, 0.3)",
                "rgba(216, 216, 216, 0.2)",
                "rgba(216, 216, 216, 0.1)",
              ],
              shadowBlur: [12, 12, 12, 12],
              shadowOffsetY: [2, 2, 2, 2],
              shadowColor: [
                "rgba(0, 0, 0, 0.1)",
                "rgba(0, 0, 0, 0.2)",
                "rgba(0, 0, 0, 0.3)",
                "rgba(0, 0, 0, 0.4)",
              ],
            },
          },
          splitLine: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          nameGap: 20,
          splitNumber: 4,
          indicator: [
            { text: "消费贷", max: 20 },
            { text: "信用贷", max: 20 },
            { text: "车贷", max: 20 },
            { text: "其他", max: 20 },
            { text: "房贷", max: 20 },
          ],
        },
        series: [
          {
            name: "案件类型占比",
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
            },
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(0, 254, 246, 1)", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgba(1, 143, 248, 1)", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
              shadowOffsetY: 2,
              shadowBlur: 12,
              shadowColor: "rgba(187, 255, 255, 0.32)",
            },
            type: "radar",
            label: {
              show: true,
              position: "inside",
              distance: 10,
              fontSize: 24,
              fontWeight: 500,
              height: 24,
              lineHeight: 24,
              color: "rgba(0, 252, 246, 1)",
              fontFamily: "SourceHanSansCN-Medium, SourceHanSansCN",
            },
            data: [
              {
                value: [15.14, 10.02, 17.02, 3.02, 16.91],
                name: "",
              },
            ],
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
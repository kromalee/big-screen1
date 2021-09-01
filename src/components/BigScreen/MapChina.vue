<template>
  <div ref="chart"></div>
</template>

<script>
import * as echarts from "echarts";
import geoJson from "./geo.json";
export default {
  mounted() {
    this.$nextTick(() => {
      echarts.registerMap("ZH", geoJson);
      var myChart = echarts.init(this.$refs.chart);
      function randomValue() {
        return Math.round(Math.random() * 1000);
      }
      const option = {
        tooltip: {
          show: true,
        },

        visualMap: {
          left: "left",
          top: "bottom",
          pieces: [
            { min: 0, max: 200, color: "rgba(1, 141, 248,0.8)" },
            { min: 200, max: 400, color: "rgba(1, 141, 248, 0.5)" },
            { min: 400, max: 600, color: "rgba(1, 141, 248, 0.3)" },
            { min: 600, max: 800, color: "rgba(0, 255, 246, 0.8)" },
            { min: 800, max: 900, color: "rgba(0, 255, 246, 0.5)" },
            { min: 900, max: 100, color: "rgba(0, 255, 246, 0.3)" },
          ],
          text: ["低", "高"], //取值范围的文字
          textStyle: {
            color: "#ffffff",
            fontSize: 32,
            height: 36,
            lineHeight: 36,
            fontWeight: 400,
          },
          itemHeight: 36,
          itemWidth: 36,
          itemSymbol: "rect",
          itemGap: 20,
          inRange: {
            color: [
              "rgba(1, 141, 248,0.8)",
              "rgba(1, 141, 248, 0.5)",
              "rgba(1, 141, 248, 0.3)",
              "rgba(0, 255, 246, 0.8)",
              "rgba(0, 255, 246, 0.5)",
              "rgba(0, 255, 246, 0.3)",
            ],
          },
          splitNumber: 6,
          orient: "horizontal",
          type: "piecewise",
          calculable: true,
          realtime: false,
          show: true,
        },

        series: [
          {
            type: "map",
            map: "ZH",
            mapType: "ZH",
            roam: false, //不开启缩放和平移
            zoom: 1.23, //视角缩放比例
            selectedMode: false,
            itemStyle: {
              borderColor: "rgba(2, 210, 232, 1)",
              borderWidth: 3,
              shadowOffsetY: 20,
              shadowOffsetX: 0,
              shadowBlur: 10,
              shadowColor: "rgba(1, 221, 230, 0.27)",

              emphasis: {
                // areaColor: "auto", //鼠标选择区域颜色
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 12,
                borderWidth: 3,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
            label: {
              show: false,
            },
            // name: "信息量",
            geoIndex: 0,
            data: [
              { name: "北京市", value: randomValue() },
              { name: "天津市", value: randomValue() },
              { name: "上海市", value: randomValue() },
              { name: "重庆市", value: randomValue() },
              { name: "河北省", value: randomValue() },
              { name: "河南省", value: randomValue() },
              { name: "云南省", value: randomValue() },
              { name: "辽宁省", value: randomValue() },
              { name: "黑龙江省", value: randomValue() },
              { name: "湖南省", value: randomValue() },
              { name: "安徽省", value: randomValue() },
              { name: "山东省", value: randomValue() },
              { name: "新疆维吾尔自治区", value: randomValue() },
              { name: "江苏省", value: randomValue() },
              { name: "浙江省", value: randomValue() },
              { name: "江西省", value: randomValue() },
              { name: "湖北省", value: randomValue() },
              { name: "广西壮族自治区", value: randomValue() },
              { name: "甘肃省", value: randomValue() },
              { name: "山西省", value: randomValue() },
              { name: "内蒙古自治区", value: randomValue() },
              { name: "陕西省", value: randomValue() },
              { name: "吉林省", value: randomValue() },
              { name: "福建省", value: randomValue() },
              { name: "贵州省", value: randomValue() },
              { name: "广东省", value: randomValue() },
              { name: "青海省", value: randomValue() },
              { name: "西藏自治区", value: randomValue() },
              { name: "四川省", value: randomValue() },
              { name: "宁夏回族自治区", value: randomValue() },
              { name: "海南省", value: randomValue() },
              { name: "台湾省", value: randomValue() },
              { name: "香港特别行政区", value: randomValue() },
              { name: "澳门特别行政区", value: randomValue() },
            ],
          },
        ],
      };
      myChart.setOption(option);
    });
  },
};
</script>

<style>
</style>
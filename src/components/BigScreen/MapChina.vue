<template>
  <div ref="chart"></div>
</template>

<script>
import * as echarts from "echarts";
import geoJson from "./geo.json";
export default {
  mounted() {
    // this.$nextTick(() => {
    //   const myChart = echarts.init(this.$refs.chart);
    //   echarts.registerMap("HK", geoJson);

    //   myChart.setOption({
    //     title: {
    //       text: "香港18区人口密度 （2011）",
    //       subtext: "人口密度数据来自Wikipedia",
    //       sublink:
    //         "http://zh.wikipedia.org/wiki/%E9%A6%99%E6%B8%AF%E8%A1%8C%E6%94%BF%E5%8D%80%E5%8A%83#cite_note-12",
    //     },
    //     tooltip: {
    //       trigger: "item",
    //       formatter: "{b}<br/>{c} (p / km2)",
    //     },
    //     toolbox: {
    //       show: true,
    //       orient: "vertical",
    //       left: "right",
    //       top: "center",
    //       feature: {
    //         dataView: { readOnly: false },
    //         restore: {},
    //         saveAsImage: {},
    //       },
    //     },
    //     visualMap: {
    //       min: 800,
    //       max: 50000,
    //       text: ["High", "Low"],
    //       realtime: false,
    //       calculable: true,
    //       inRange: {
    //         color: ["lightskyblue", "yellow", "orangered"],
    //       },
    //     },
    //     series: [
    //       {
    //         name: "香港18区人口密度",
    //         type: "map",
    //         mapType: "HK", // 自定义扩展图表类型
    //         label: {
    //           show: true,
    //         },
    //         data: [
    //           { name: "中西区", value: 20057.34 },
    //           { name: "湾仔", value: 15477.48 },
    //           { name: "东区", value: 31686.1 },
    //           { name: "南区", value: 6992.6 },
    //           { name: "油尖旺", value: 44045.49 },
    //           { name: "深水埗", value: 40689.64 },
    //           { name: "九龙城", value: 37659.78 },
    //           { name: "黄大仙", value: 45180.97 },
    //           { name: "观塘", value: 55204.26 },
    //           { name: "葵青", value: 21900.9 },
    //           { name: "荃湾", value: 4918.26 },
    //           { name: "屯门", value: 5881.84 },
    //           { name: "元朗", value: 4178.01 },
    //           { name: "北区", value: 2227.92 },
    //           { name: "大埔", value: 2180.98 },
    //           { name: "沙田", value: 9172.94 },
    //           { name: "西贡", value: 3368 },
    //           { name: "离岛", value: 806.98 },
    //         ],
    //         // 自定义名称映射
    //         nameMap: {
    //           "Central and Western": "中西区",
    //           Eastern: "东区",
    //           Islands: "离岛",
    //           "Kowloon City": "九龙城",
    //           "Kwai Tsing": "葵青",
    //           "Kwun Tong": "观塘",
    //           North: "北区",
    //           "Sai Kung": "西贡",
    //           "Sha Tin": "沙田",
    //           "Sham Shui Po": "深水埗",
    //           Southern: "南区",
    //           "Tai Po": "大埔",
    //           "Tsuen Wan": "荃湾",
    //           "Tuen Mun": "屯门",
    //           "Wan Chai": "湾仔",
    //           "Wong Tai Sin": "黄大仙",
    //           "Yau Tsim Mong": "油尖旺",
    //           "Yuen Long": "元朗",
    //         },
    //       },
    //     ],
    //   });
    // });
    this.$nextTick(() => {
      const dataList = [
        { name: "南海诸岛", value: 0 },
        { name: "北京", value: randomValue() },
        { name: "天津", value: randomValue() },
        { name: "上海", value: randomValue() },
        { name: "重庆", value: randomValue() },
        { name: "河北", value: randomValue() },
        { name: "河南", value: randomValue() },
        { name: "云南", value: randomValue() },
        { name: "辽宁", value: randomValue() },
        { name: "黑龙江", value: randomValue() },
        { name: "湖南", value: randomValue() },
        { name: "安徽", value: randomValue() },
        { name: "山东", value: randomValue() },
        { name: "新疆", value: randomValue() },
        { name: "江苏", value: randomValue() },
        { name: "浙江", value: randomValue() },
        { name: "江西", value: randomValue() },
        { name: "湖北", value: randomValue() },
        { name: "广西", value: randomValue() },
        { name: "甘肃", value: randomValue() },
        { name: "山西", value: randomValue() },
        { name: "内蒙古", value: randomValue() },
        { name: "陕西", value: randomValue() },
        { name: "吉林", value: randomValue() },
        { name: "福建", value: randomValue() },
        { name: "贵州", value: randomValue() },
        { name: "广东", value: randomValue() },
        { name: "青海", value: randomValue() },
        { name: "西藏", value: randomValue() },
        { name: "四川", value: randomValue() },
        { name: "宁夏", value: randomValue() },
        { name: "海南", value: randomValue() },
        { name: "台湾", value: randomValue() },
        { name: "香港", value: randomValue() },
        { name: "澳门", value: randomValue() },
      ];
      echarts.registerMap("ZH", geoJson);
      var myChart = echarts.init(this.$refs.chart);
      function randomValue() {
        return Math.round(Math.random() * 1000);
      }
      const option = {
        tooltip: {
          formatter: function (params, ticket, callback) {
            return (
              params.seriesName + "<br />" + params.name + "：" + params.value
            );
          }, //数据格式化
        },
        visualMap: {
          min: 0,
          max: 1500,
          left: "left",
          top: "bottom",
          text: ["高", "低"], //取值范围的文字
          inRange: {
            color: ["#e0ffff", "#006edd"], //取值范围的颜色
          },
          show: true, //图注
        },
        geo: {
          map: "ZH",
          roam: false, //不开启缩放和平移
          zoom: 1.23, //视角缩放比例
          label: {
            normal: {
              show: true,
              fontSize: "10",
              color: "rgba(0,0,0,0.7)",
            },
          },
          itemStyle: {
            normal: {
              borderColor: "rgba(0, 0, 0, 0.2)",
            },
            emphasis: {
              areaColor: "#F3B329", //鼠标选择区域颜色
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 20,
              borderWidth: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
        series: [
          {
            name: "信息量",
            type: "map",
            geoIndex: 0,
            data: dataList,
          },
        ],
      };
      myChart.setOption(option);
      myChart.on("click", function (params) {
        alert(params.name);
      });
    });
  },
};
</script>

<style>
</style>
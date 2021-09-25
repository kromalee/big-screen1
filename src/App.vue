<template>
  <div id="app">
    <BigScreen v-bind="options"></BigScreen>
  </div>
</template>

<script>
import BigScreen from "./components/BigScreen/index.vue";
function randomValue() {
  return Math.round(Math.random() * 1000);
}
export default {
  components: {
    BigScreen,
  },
  data() {
    return {
      //案件类型占比
      proportionOfCaseTypes: [
        { type: "消费贷", value: 15.14 },
        { type: "信用贷", value: 10.02 },
        { type: "车贷", value: 17.02 },
        { type: "房贷", value: 3.02 },
        { type: "其他", value: 16.91 },
      ],
      // 各主体立案率, value对应12个月的值
      entityCaseFilingRate: [
        {
          type: "银行",
          value: [116, 149, 89, 9, 95, 139, 60, 134, 69, 25, 66, 50],
        },
        {
          type: "消金",
          value: [100, 0, 97, 79, 74, 51, 147, 2, 10, 143, 91, 143],
        },
        {
          type: "小贷",
          value: [42, 17, 35, 42, 108, 78, 129, 95, 97, 141, 135, 139],
        },
        {
          type: "保险",
          value: [117, 113, 42, 8, 61, 52, 59, 102, 98, 85, 92, 93],
        },
        {
          type: "担保",
          value: [34, 69, 139, 92, 26, 103, 127, 92, 57, 79, 102, 129],
        },
        {
          type: "金融",
          value: [53, 69, 68, 2, 25, 65, 89, 15, 64, 25, 99, 36],
        },
        {
          type: "P2P网贷",
          value: [115, 143, 103, 89, 115, 148, 53, 35, 141, 125, 72, 83],
        },
      ],
      //立案趋势,value 对应12个月的值
      trendOfFiling: [
        {
          type: "申请量",
          value: [29, 36, 25, 39, 34, 7, 25, 24, 21, 5, 48, 25],
        },
        {
          type: "立案量",
          value: [13, 36, 43, 13, 39, 9, 28, 2, 28, 40, 7, 39],
        },
      ],
      regionalDistributorTop10: [
        {
          area: "北京",
          trend: +2,
          count: 5080,
        },
        {
          area: "北京",
          trend: -2,
          count: 5079,
        },
        {
          area: "北京",
          trend: +2,
          count: 5079,
        },
        {
          area: "北京",
          trend: +2,
          count: 5079,
        },
        {
          area: "北京",
          trend: +2,
          count: 5079,
        },
        {
          area: "北京",
          trend: +2,
          count: 5079,
        },
        {
          area: "北京",
          trend: +2,
          count: 5079,
        },
      ],
      midCourtFilingTop10: [
        { name: "新疆维吾尔族自治区哈密市中级人民法院1", value: 1000 },
        { name: "新疆维吾尔族自治区哈密市中级人民法院2", value: 900 },
        { name: "新疆维吾尔族自治区哈密市中级人民法院3", value: 800 },
        { name: "新疆维吾尔族自治区哈密市中级人民法院4", value: 700 },
        { name: "新疆维吾尔族自治区哈密市中级人民法院5", value: 600 },
        { name: "新疆维吾尔族自治区哈密市中级人民法院6", value: 500 },
        { name: "新疆维吾尔族自治区哈密市中级人民法院7", value: 400 },
        { name: "新疆维吾尔族自治区哈密市中级人民法院8", value: 300 },
        { name: "新疆维吾尔族自治区哈密市中级人民法院9", value: 200 },
        { name: "新疆维吾尔族自治区哈密市中级人民法院0", value: 100 },
      ],
      trendOfFiling2: [
        {
          value: [13, 36, 43, 13, 39, 9, 28, 2, 28, 40, 7, 39],
        },
      ],
      implementation: {
        count: [
          { name: "计数1", value: 50000 },
          { name: "计数2", value: 50000 },
          { name: "计数3", value: 50000 },
          { name: "计数4", value: 50000 },
        ],
        countByArea: [
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
        rencentCountByArea: [
          {
            area: "新疆维吾尔族自治区",
            "1月": 8934,
            "2月": 8934,
            "3月": 8934,
            "4月": 8934,
          },
          {
            area: "新疆维吾尔族自治区",
            "1月": 8934,
            "2月": 8934,
            "3月": 8934,
            "4月": 8934,
          },
          {
            area: "新疆维吾尔族自治区",
            "1月": 8934,
            "2月": 8934,
            "3月": 8934,
            "4月": 8934,
          },
          {
            area: "新疆维吾尔族自治区",
            "1月": 8934,
            "2月": 8934,
            "3月": 8934,
            "4月": 8934,
          },
          {
            area: "新疆维吾尔族自治区",
            "1月": 8934,
            "2月": 8934,
            "3月": 8934,
            "4月": 8934,
          },
          {
            area: "新疆维吾尔族自治区",
            "1月": 8934,
            "2月": 8934,
            "3月": 8934,
            "4月": 8934,
          },
          {
            area: "新疆维吾尔族自治区",
            "1月": 8934,
            "2月": 8934,
            "3月": 8934,
            "4月": 8934,
          },
          {
            area: "新疆维吾尔族自治区",
            "1月": 8934,
            "2月": 8934,
            "3月": 8934,
            "4月": 8934,
          },
          {
            area: "新疆维吾尔族自治区",
            "1月": 8934,
            "2月": 8934,
            "3月": 8934,
            "4月": 8934,
          },
        ],
      },
    };
  },
  computed: {
    options() {
      return {
        proportionOfCaseTypes: this.proportionOfCaseTypes,
        entityCaseFilingRate: this.entityCaseFilingRate,
        trendOfFiling: this.trendOfFiling,
        regionalDistributorTop10: this.regionalDistributorTop10,
        midCourtFilingTop10: this.midCourtFilingTop10,
        trendOfFiling2: this.trendOfFiling2,
        implementation: this.implementation,
      };
    },
  },
};
</script>

<style>
</style>
<template>
  <div class="box">
    <div class="box-title">{{ title }}</div>
    <div class="box-number">{{ number }}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, default: "测试文字" },
    number: { type: Number, default: 5000000 },
  },
};
</script>

<style scoped>
.box-title {
  position: absolute;
  top: 54px;
  width: 100%;
  height: 28px;
  font-size: 28px;
  font-family: SourceHanSansCN-Normal, SourceHanSansCN;
  font-weight: 400;
  color: #000000;
  line-height: 28px;
  text-align: center;
  background: linear-gradient(180deg, #24f3ff 0%, #018ef8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.box-number {
  position: absolute;
  top: 92px;
  width: 100%;
  height: 56px;
  font-size: 56px;
  font-family: SourceHanSansCN-Medium, SourceHanSansCN;
  font-weight: 500;
  color: #ffffff;
  line-height: 56px;
  text-align: center;
}
</style>
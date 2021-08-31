<template>
  <div>
    <AreaTitle text="地区总理Top10"></AreaTitle>
    <div class="table"></div>
  </div>
</template>

<script>
import AreaTitle from "./AreaTitle.vue";
export default {
  components: {
    AreaTitle,
  },
};
</script>

<style scoped>
.table {
  position: absolute;
  left: 48px;
  top: 158px;
  height: 408px;
  width: 884px;
  background-color: yellow;
}
</style>
<template>
  <div>
    <AreaTitle text="地区总理Top10"></AreaTitle>
    <DataTable :columns="columns" :rows="rows" class="table">
      <template #field-trend="{ value }">
        <template>
          <div v-if="value > 0" class="red-text">↑{{ value }}</div>
          <div v-else-if="value < 0" class="green-text">↓{{ -value }}</div>
        </template>
      </template>
    </DataTable>
  </div>
</template>

<script>
import AreaTitle from "./AreaTitle.vue";
import DataTable from "./DataTable.vue";
export default {
  components: {
    AreaTitle,
    DataTable,
  },
  data() {
    return {
      columns: [
        {
          field: "area",
          name: "地 区",
        },
        {
          field: "trend",
          name: "趋 势",
        },
        {
          field: "count",
          name: "总 量",
        },
      ],
      rows: [
        {
          area: "北京",
          trend: +2,
          count: 5079,
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
    };
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
  /* background-color: yellow; */
}
div.red-text {
  color: rgba(255, 39, 2, 1) !important;
  letter-spacing: 4px;
}
div.green-text {
  color: rgba(0, 255, 101, 1) !important;
  letter-spacing: 4px;
}
</style>
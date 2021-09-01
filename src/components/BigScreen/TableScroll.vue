<template>
  <DataTable :columns="columns" :rows="rows"></DataTable>
</template>

<script>
import DataTable from "./DataTable.vue";
export default {
  components: { DataTable },
  data() {
    return {
      columns: [
        {
          field: "area",
          name: "省份",
          width: "28%",
        },
        {
          field: "m1",
          name: "1月",
          width: "18%",
        },
        {
          field: "m2",
          name: "2月",
          width: "18%",
        },
        {
          field: "m3",
          name: "3月",
          width: "18%",
        },
        {
          field: "m4",
          name: "4月",
          width: "18%",
        },
      ],
      rows: [
        { area: "新疆维吾尔族自治区", m1: 8934, m2: 8934, m3: 8934, m4: 8934 },
        { area: "新疆维吾尔族自治区", m1: 8934, m2: 8934, m3: 8934, m4: 8934 },
        { area: "新疆维吾尔族自治区", m1: 8934, m2: 8934, m3: 8934, m4: 8934 },
        { area: "新疆维吾尔族自治区", m1: 8934, m2: 8934, m3: 8934, m4: 8934 },
        { area: "新疆维吾尔族自治区", m1: 8934, m2: 8934, m3: 8934, m4: 8934 },
        { area: "新疆维吾尔族自治区", m1: 8934, m2: 8934, m3: 8934, m4: 8934 },
        { area: "新疆维吾尔族自治区", m1: 8934, m2: 8934, m3: 8934, m4: 8934 },
        { area: "新疆维吾尔族自治区", m1: 8934, m2: 8934, m3: 8934, m4: 8934 },
        { area: "新疆维吾尔族自治区", m1: 8934, m2: 8934, m3: 8934, m4: 8934 },
      ],
    };
  },
};
</script>

<style>
</style>                                                                         
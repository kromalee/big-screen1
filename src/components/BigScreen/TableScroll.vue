<template>
  <DataTable :columns="columns" :rows="option"></DataTable>
</template>

<script>
import DataTable from "./DataTable.vue";
export default {
  components: { DataTable },
  props: {
    option: Array,
  },
  computed: {
    columns() {
      if (this.option && this.option.length > 0) {
        const keys = Object.keys(this.option[0]).filter((obj) => {
          return obj !== "area";
        });
        return [
          {
            field: "area",
            name: "省份",
            width: "28%",
          },
        ].concat(
          keys.map((obj) => {
            return {
              field: obj,
              name: obj,
              width: "18%",
            };
          })
        );
      }
    },
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>                                                                         
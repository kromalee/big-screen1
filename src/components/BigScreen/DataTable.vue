<template>
  <div>
    <table class="table-head">
      <colgroup>
        <col
          v-for="col in columns"
          :key="col.field"
          :width="col.width || 100 / (cols || 1) + '%'"
        />
      </colgroup>
      <tr>
        <td v-for="item in columns" :key="item.field">{{ item.name }}</td>
      </tr>
    </table>
    <div class="box">
      <table class="table-row">
        <colgroup>
          <col
            v-for="col in columns"
            :key="col.field"
            :width="col.width || 100 / (cols || 1) + '%'"
          />
        </colgroup>
        <tr v-for="(row, index) in rows" :key="index">
          <td v-for="col in columns" :key="col.field">
            <slot :name="'field-' + col.field" :value="row[col.field]">
              {{ row[col.field] }}
            </slot>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    columns: {
      type: Array,
    },
    rows: { type: Array },
  },
  computed: {
    cols() {
      return this.columns && this.columns.length;
    },
  },
};
</script>

<style scoped>
table {
  width: 100%;
  text-align: center;
  border-collapse: separate;
  border: none;
  border-spacing: 0;
}
.table-head {
  background: rgba(32, 75, 216, 0.6);
  /* opacity: 0.6; */
}
.table-head td {
  height: 68px;
  line-height: 68px;
  font-size: 32px;
  font-family: SourceHanSansCN-Medium, SourceHanSansCN;
  font-weight: 500;
  color: #ffffff;
}
.table-row tr:nth-child(odd) {
  background: rgba(32, 75, 216, 0.19);
}
.table-row tr:nth-child(even) {
  background: transparent;
}
.table-row td {
  height: 68px;
  line-height: 68px;
  font-size: 24px;
  font-family: SourceHanSansCN-Normal, SourceHanSansCN;
  font-weight: 400;
  color: #ffffff;
}
td.red-text {
  color: rgba(255, 39, 2, 1);
  letter-spacing: 4px;
}
td.green-text {
  color: rgba(0, 255, 101, 1);
  letter-spacing: 4px;
}
.box {
  width: 100%;
  height: 340px;
  overflow: hidden;
}
.box:hover {
  overflow: auto;
}
</style>
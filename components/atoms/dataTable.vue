<template>
  <NDataTable
    remote
    :data="props.data"
    :columns="props.columns"
    :row-props="rowProps"
  />
</template>

<script setup lang="ts">
import { NDataTable, type DataTableColumns } from "naive-ui";
import type { RowData } from "naive-ui/es/data-table/src/interface";
import type { HTMLAttributes } from "vue";

interface Props {
  data: RowData[];
  columns: DataTableColumns<any>;
}
interface Emits {
  (event: "select", row: RowData): void;
}
const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const rowProps: (row: RowData) => HTMLAttributes = (row) => ({
  style: {
    cursor: "pointer",
  },
  onClick: () => emit("select", row),
});
</script>

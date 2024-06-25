<template>
  <AtomsDataTable v-if="todos" :data="todos" :columns="columns" />
</template>

<script setup lang="ts">
import { NCheckbox, type DataTableColumns } from "naive-ui";
import type { Todo } from "~/models/todo";
import type { User } from "~/models/user";

interface Props {
  user: User | null;
}
const props = defineProps<Props>();

const api = useApi();
const { data: todos } = useAsyncData<Todo[]>(() =>
  api(`/users/${props.user?.id}/todos`)
);

const columns = computed<DataTableColumns<Todo>>(() => [
  {
    key: "id",
    title: "ID",
    render: (row) => row.id,
  },
  {
    key: "title",
    title: "Title",
    render: (row) => row.title,
  },
  {
    key: "completed",
    title: "Completed",
    render: (row) => {
      return h(NCheckbox, { checked: row.completed, disabled: true });
    },
  },
]);
</script>

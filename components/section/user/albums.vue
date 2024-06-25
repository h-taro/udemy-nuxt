<template>
  <AtomsDataTable v-if="albums" :data="albums" :columns="columns" />
</template>

<script setup lang="ts">
import type { DataTableColumns } from "naive-ui";
import type { Album } from "~/models/album";
import type { User } from "~/models/user";

interface Props {
  user: User | null;
}
const props = defineProps<Props>();

const api = useApi();
const { data: albums } = useAsyncData<Album[]>(() =>
  api(`/users/${props.user?.id}/albums`)
);

const columns = computed<DataTableColumns<Album>>(() => [
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
]);
</script>

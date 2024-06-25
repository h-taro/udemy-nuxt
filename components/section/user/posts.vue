<template>
  <AtomsDataTable v-if="posts" :data="posts" :columns="columns" />
</template>

<script setup lang="ts">
import type { DataTableColumns } from "naive-ui";
import type { Post } from "~/models/post";
import type { User } from "~/models/user";

interface Props {
  user: User | null;
}
const props = defineProps<Props>();

const api = useApi();
const { data: posts } = useAsyncData<Post[]>(() =>
  api(`/users/${props.user?.id}/posts`)
);

const columns = computed<DataTableColumns<Post>>(() => [
  {
    key: "id",
    title: "ID",
    width: 60,
    render: (row) => row.id,
  },
  {
    key: "title",
    title: "Title",
    render: (row) => row.title,
  },
  {
    key: "body",
    title: "Body",
    render: (row) => row.body,
  },
]);
</script>

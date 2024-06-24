<template>
  <div class="px-[40px] py-[32px] flex flex-col gap-[32px]">
    <span class="text-[24px] font-bold">Posts</span>
    <NDataTable remote v-if="posts" :data="posts" :columns="columns" />
  </div>
</template>

<script setup lang="ts">
import { NDataTable, type DataTableColumns } from "naive-ui";
import type { Post } from "~/models/post";

const api = useApi();
const { data: posts } = useAsyncData<Post[]>(() => api("/posts"));

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

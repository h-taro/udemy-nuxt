<template>
  <NDataTable remote v-if="users" :data="users" :columns="columns" />
</template>

<script setup lang="ts">
import { NDataTable, type DataTableColumns } from "naive-ui";
import type { User } from "~/models/user";

const { data: users } = useFetch<User[]>(
  "https://jsonplaceholder.typicode.com/users"
);

const columns = computed<DataTableColumns<User>>(() => [
  {
    key: "id",
    title: "ID",
    render: (row) => row.id,
  },
  {
    key: "name",
    title: "Name",
    render: (row) => row.name,
  },
  {
    key: "email",
    title: "Email",
    render: (row) => row.email,
  },
  {
    key: "website",
    title: "Website",
    render: (row) => row.website,
  },
]);
</script>

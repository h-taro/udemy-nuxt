<template>
  <div class="px-[40px] py-[32px] flex flex-col gap-[32px]">
    <div class="flex flex-row items-center justify-between">
      <span class="text-[24px] font-bold">Users</span>
      <NButton>
        <span class="text-[14px]">新規登録</span>
      </NButton>
    </div>
    <NDataTable remote v-if="users" :data="users" :columns="columns" />
  </div>
</template>

<script setup lang="ts">
import { NButton, NDataTable, type DataTableColumns } from "naive-ui";
import type { User } from "~/models/user";

definePageMeta({
  requiresAuth: true,
})

const api = useApi();
const { data: users } = useAsyncData<User[]>(() => api("/users"));

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

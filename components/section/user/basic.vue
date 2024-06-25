<template>
  <NTable>
    <tbody>
      <tr>
        <th class="w-[240px] bg-[#FAFAFA]">
          <span class="text-[14px]">ID</span>
        </th>
        <td>
          <span class="text-[14px]">{{ props.user?.id }}</span>
        </td>
      </tr>
      <tr>
        <th class="w-[240px] bg-[#FAFAFA]">
          <span class="text-[14px]">Name</span>
        </th>
        <td>
          <span class="text-[14px]">{{ props.user?.name }}</span>
        </td>
      </tr>
      <tr>
        <th class="w-[240px] bg-[#FAFAFA]">
          <span class="text-[14px]">Username</span>
        </th>
        <td>
          <span class="text-[14px]">{{ props.user?.username }}</span>
        </td>
      </tr>
      <tr>
        <th class="w-[240px] bg-[#FAFAFA]">
          <span class="text-[14px]">Email</span>
        </th>
        <td>
          <span class="text-[14px]">{{ props.user?.email }}</span>
        </td>
      </tr>
    </tbody>
  </NTable>
</template>

<script setup lang="ts">
import type { User } from "~/models/user";
import { NTable } from "naive-ui";

interface Props {
  user: User | null;
}
const props = defineProps<Props>();
</script>

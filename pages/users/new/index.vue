<template>
  <div class="px-[40px] py-[32px] flex flex-col gap-[32px]">
    <span class="text-[24px] font-bold">新規登録</span>
    <SectionUserForm />
    <div class="flex flex-row items-center justify-end">
      <NButton>
        <span class="text-[14px]">新規登録</span>
      </NButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NButton } from "naive-ui";
</script>

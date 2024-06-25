<template>
  <div class="px-[40px] py-[32px] flex flex-col gap-[32px]">
    <span class="text-[24px] font-bold">編集</span>
    <SectionUserForm ref="formRef" />
    <div class="flex flex-row items-center justify-end">
      <NButton>
        <span class="text-[14px]">編集</span>
      </NButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { UserFormInst } from "~/components/section/user/form.vue";
import { NButton } from "naive-ui";

const formRef = ref<UserFormInst>();
</script>

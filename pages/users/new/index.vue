<template>
  <div class="px-[40px] py-[32px] flex flex-col gap-[32px]">
    <span class="text-[24px] font-bold">新規登録</span>
    <SectionUserForm ref="formRef" />
    <div class="flex flex-row items-center justify-end">
      <NButton @click="createUser">
        <span class="text-[14px]">新規登録</span>
      </NButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NButton } from "naive-ui";
import type { UserFormInst } from "~/components/section/user/form.vue";

const formRef = ref<UserFormInst>();

const createUser = async () => {
  try {
    const formValue = await formRef.value?.submit();
    console.log(formValue);
  } catch (error) {
    console.error(error);
  }
};
</script>

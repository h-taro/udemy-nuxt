<template>
  <div class="px-[40px] py-[32px] flex flex-col gap-[32px]">
    <span class="text-[24px] font-bold">編集</span>
    <SectionUserForm ref="formRef" :user="user" />
    <div class="flex flex-row items-center justify-end">
      <NButton @click="updateUser">
        <span class="text-[14px]">編集</span>
      </NButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { UserFormInst } from "~/components/section/user/form.vue";
import { NButton } from "naive-ui";
import type { User } from "~/models/user";

const api = useApi();
const route = useRoute();
const router = useRouter();

const userId = computed<string>(() =>
  decodeURIComponent(String(route.params.id))
);

const formRef = ref<UserFormInst>();

const { data: user } = useAsyncData<User>(() => api(`/users/${userId.value}`));

const updateUser = async () => {
  try {
    const formValue = await formRef.value?.submit();
    if (!formValue) {
      return;
    }

    await api(`/users/${userId.value}`, {
      method: "PATCH",
      body: JSON.stringify(formValue),
    });

    router.push(`/users/${userId.value}`);
  } catch (error) {
    console.error(error);
  }
};
</script>

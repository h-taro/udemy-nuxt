<template>
  <NForm ref="formRef" :rules="rules" :model="formValue">
    <div class="flex flex-col gap-[24px]">
      <NFormItem label="ID" path="id">
        <NInput v-model:value="formValue.id" />
      </NFormItem>
      <NFormItem label="パスワード" path="password">
        <NInput v-model:value="formValue.password" :type="'password'" />
      </NFormItem>
      <NButton :attr-type="'submit'" @click="login">
        <span class="text-[14px]">ログイン</span>
      </NButton>
    </div>
  </NForm>
</template>

<script setup lang="ts">
import {
  NButton,
  NForm,
  NFormItem,
  NInput,
  type FormInst,
  type FormRules,
} from "naive-ui";
import type { User } from "~/models/user";

definePageMeta({
  layout: "static",
});

interface FormValue {
  id: string;
  password: string;
}
const emptyFormValue: FormValue = {
  id: "",
  password: "",
};
const formValue = ref<FormValue>(emptyFormValue);
const formRef = ref<FormInst>();
const rules: FormRules = {
  id: {
    required: true,
    message: "IDを入力してください",
  },
  password: {
    required: true,
    message: "パスワードを入力してください",
  },
};

const api = useApi();
const router = useRouter();
const authStore = useAuthStore();

const login = async () => {
  try {
    await formRef.value?.validate();

    const res = await api<User>(`/users/${formValue.value.id}`);
    authStore.setUser(res);
    router.push("/users");
  } catch (error) {
    console.error(error);
  }
};
</script>

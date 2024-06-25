<template>
  <NForm ref="formRef" :rules="rules" :model="formValue">
    <div class="flex flex-col gap-[32px]">
      <NFormItem label="Name" path="name">
        <NInput v-model:value="formValue.name" />
      </NFormItem>
      <NFormItem label="Email" path="email">
        <NInput v-model:value="formValue.email" />
      </NFormItem>
      <NFormItem label="Phone" path="phone">
        <NInput v-model:value="formValue.phone" />
      </NFormItem>
    </div>
  </NForm>
</template>

<script setup lang="ts">
import {
  NForm,
  NFormItem,
  NInput,
  type FormInst,
  type FormRules,
} from "naive-ui";
import type { User } from "~/models/user";

interface Props {
  user: User | null;
}
const props = defineProps<Props>();

export interface UserFormValue {
  name: string;
  email: string;
  phone: string;
}
const emptyFormValue: UserFormValue = {
  name: "",
  email: "",
  phone: "",
};
const formValue = ref<UserFormValue>(emptyFormValue);
const formRef = ref<FormInst>();
const rules: FormRules = {
  name: {
    required: true,
    message: "Name is required",
  },
  email: {
    required: true,
    message: "Email is required",
  },
  phone: {
    required: true,
    message: "Phone is required",
  },
};
export interface UserFormInst {
  submit(): Promise<UserFormValue>;
}
defineExpose<UserFormInst>({
  submit: async () => {
    await formRef.value?.validate();
    return formValue.value;
  },
});

watch(
  () => props.user,
  () => {
    if (props.user) {
      formValue.value = {
        name: props.user.name,
        email: props.user.email,
        phone: props.user.phone,
      };
    }
  }
);
</script>

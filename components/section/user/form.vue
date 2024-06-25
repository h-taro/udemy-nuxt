<template>
  <NForm>
    <div class="flex flex-col gap-[32px]">
      <NFormItem label="Name">
        <NInput />
      </NFormItem>
      <NFormItem label="Email">
        <NInput />
      </NFormItem>
      <NFormItem label="Phone">
        <NInput />
      </NFormItem>
    </div>
  </NForm>
</template>

<script setup lang="ts">
import { NForm, NFormItem, NInput } from "naive-ui";
</script>

<template>
  <div class="min-h-screen flex items-center justify-center">
    <NInput />
  </div>
</template>

<script setup lang="ts">
import { NInput } from "naive-ui";

const router = useRouter();

definePageMeta({
  requiresAuth: true,
});

onMounted(() => {
  router.push("/users");
});
</script>

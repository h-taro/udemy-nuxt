<template>
  <NDialogProvider>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </NDialogProvider>
</template>

<script setup lang="ts">
import { NDialogProvider } from 'naive-ui';

const router = useRouter();
const authStore = useAuthStore();

onBeforeMount(() => {
  const redirect = authStore.validateRoute(router.currentRoute.value);
  if (redirect) {
    navigateTo(redirect);
  }
});
</script>

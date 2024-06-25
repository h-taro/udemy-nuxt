<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const router = useRouter();
const authStore = useAuthStore();

onBeforeMount(() => {
  const redirect = authStore.validateRoute(router.currentRoute.value);
  if (redirect) {
    navigateTo(redirect);
  }
});
</script>

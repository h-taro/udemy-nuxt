<template>
  <div>
    <pre>{{ JSON.stringify(user, null, 2) }}</pre>
  </div>
</template>

<script setup lang="ts">
import type { User } from "~/models/user";

const api = useApi();
const route = useRoute();

const userId = computed<string>(() =>
  decodeURIComponent(String(route.params.id))
);

const { data: user } = useAsyncData<User>(() => api(`/users/${userId.value}`));
</script>

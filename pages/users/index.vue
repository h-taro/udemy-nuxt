<template>
  <div>{{ JSON.stringify(users, null, 2) }}</div>
</template>

<script setup lang="ts">
import type { User } from "~/models/user";

const { data: users } = useFetch<User[]>(
  "https://jsonplaceholder.typicode.com/users"
);
</script>

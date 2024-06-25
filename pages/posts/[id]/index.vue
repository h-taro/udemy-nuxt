<template>
  <div>
    <pre>{{ JSON.stringify(post, null, 2) }}</pre>
  </div>
</template>

<script setup lang="ts">
import type { Post } from "~/models/post";

const api = useApi();
const route = useRoute();

const postId = computed<string>(() =>
  decodeURIComponent(String(route.params.id))
);

const { data: post } = useAsyncData<Post>(() => api(`/posts/${postId.value}`));
</script>

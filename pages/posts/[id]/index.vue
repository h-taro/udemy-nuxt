<template>
  <div class="py-[32px] px-[40px] flex flex-col gap-[32px]">
    <span class="text-[24px] font-bold">Post詳細</span>
    <NTable>
      <tbody>
        <tr>
          <th class="w-[240px] bg-[#FAFAFA]">
            <span class="text-[14px]">ID</span>
          </th>
          <td>
            <span class="text-[14px]">{{ post?.id }}</span>
          </td>
        </tr>
        <tr>
          <th class="w-[240px] bg-[#FAFAFA]">
            <span class="text-[14px]">Title</span>
          </th>
          <td>
            <span class="text-[14px]">{{ post?.title }}</span>
          </td>
        </tr>
        <tr>
          <th class="w-[240px] bg-[#FAFAFA]">
            <span class="text-[14px]">Body</span>
          </th>
          <td>
            <span class="text-[14px]">{{ post?.body }}</span>
          </td>
        </tr>
      </tbody>
    </NTable>
  </div>
</template>

<script setup lang="ts">
import { NTable } from "naive-ui";
import type { Post } from "~/models/post";

const api = useApi();
const route = useRoute();

const postId = computed<string>(() =>
  decodeURIComponent(String(route.params.id))
);

const { data: post } = useAsyncData<Post>(() => api(`/posts/${postId.value}`));
</script>

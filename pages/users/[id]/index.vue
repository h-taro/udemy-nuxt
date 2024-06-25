<template>
  <div class="px-[40px] py-[32px] flex flex-col gap-[32px]">
    <div class="flex flex-row items-center justify-between">
      <span class="text-[24px] font-bold">{{ user?.name }}</span>
      <div class="flex flex-row items-center gap-[12px]">
        <NButton>
          <span class="text-[14px]">編集</span>
        </NButton>
        <NButton>
          <span class="text-[14px]">編集</span>
        </NButton>
      </div>
    </div>
    <NTabs>
      <NTabPane name="basic">
        <SectionUserBasic :user="user" />
      </NTabPane>
      <NTabPane name="posts">
        <SectionUserPosts :user="user" />
      </NTabPane>
      <NTabPane name="albums">
        <SectionUserAlbums :user="user" />
      </NTabPane>
      <NTabPane name="todos"> </NTabPane>
    </NTabs>
  </div>
</template>

<script setup lang="ts">
import { NButton, NTabPane, NTabs } from "naive-ui";
import type { User } from "~/models/user";

const api = useApi();
const route = useRoute();

const userId = computed<string>(() =>
  decodeURIComponent(String(route.params.id))
);

const { data: user } = useAsyncData<User>(() => api(`/users/${userId.value}`));
</script>

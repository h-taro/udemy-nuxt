<template>
  <div class="px-[40px] py-[32px] flex flex-col gap-[32px]">
    <div class="flex flex-row items-center justify-between">
      <span class="text-[24px] font-bold">{{ user?.name }}</span>
      <div class="flex flex-row items-center gap-[12px]">
        <NButton @click="router.push(`/users/${user?.id}/edit`)">
          <span class="text-[14px]">編集</span>
        </NButton>
        <NButton @click="openDialog">
          <span class="text-[14px]">削除</span>
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
      <NTabPane name="todos">
        <SectionUserTodos :user="user" />
      </NTabPane>
    </NTabs>
  </div>
</template>

<script setup lang="ts">
import { NButton, NTabPane, NTabs } from "naive-ui";
import type { User } from "~/models/user";

const api = useApi();
const route = useRoute();
const router = useRouter();
const dialog = useDialog();

const userId = computed<string>(() =>
  decodeURIComponent(String(route.params.id))
);

const { data: user } = useAsyncData<User>(() => api(`/users/${userId.value}`));

const deleteUser = async () => {
  try {
    await api(`/users/${userId.value}`, {
      method: "DELETE",
    });

    router.push("/users");
  } catch (error) {
    console.error(error);
  }
};

const openDialog = () => {
  dialog.warning({
    title: "削除",
    content: "本当に削除しますか？",
    positiveText: "削除",
    negativeText: "キャンセル",
    onPositiveClick: async () => {
      await deleteUser();
    },
  });
};
</script>

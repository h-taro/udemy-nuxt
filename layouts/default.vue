<template>
  <NLayout has-sider class="min-h-screen">
    <NLayoutSider bordered class="min-h-screen">
      <NMenu :options="menuOptions" />
    </NLayoutSider>
    <NLayout class="min-h-screen">
      <NLayoutHeader>
        <div class="py-[24px] px-[40px] flex flex-row items-center justify-end">
          <div class="flex flex-row items-center gap-[12px]">
            <span class="text-[14px]">hoge</span>
            <NButton>
              <span class="text-[14px]">ログアウト</span>
            </NButton>
          </div>
        </div>
      </NLayoutHeader>
      <NLayoutContent>
        <slot />
      </NLayoutContent>
    </NLayout>
  </NLayout>
</template>

<script setup lang="ts">
import {
  NButton,
  NLayout,
  NLayoutContent,
  NLayoutHeader,
  NLayoutSider,
  NMenu,
  type MenuOption,
} from "naive-ui";
import { RouterLink } from "vue-router";

const menuOptions: MenuOption[] = [
  {
    key: "users",
    label: () => h(RouterLink, { to: "/users" }, { default: () => "Users" }),
  },
  {
    key: "posts",
    label: () => h(RouterLink, { to: "/posts" }, { default: () => "Posts" }),
  },
];
</script>

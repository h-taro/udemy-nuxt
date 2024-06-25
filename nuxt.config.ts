import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";

export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["@/assets/styles/main.scss"],
  ssr: false,
  vite: {
    plugins: [Components({ resolvers: [NaiveUiResolver()] })],
  },
  modules: ["@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt"],
  imports: {
    dirs: ["stores"],
  },
  plugins: ["@/plugins/naive"],
});

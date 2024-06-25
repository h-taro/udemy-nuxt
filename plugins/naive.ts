import { createDiscreteApi } from "naive-ui";

export default defineNuxtPlugin(() => {
  const { loadingBar, dialog } = createDiscreteApi(["loadingBar", "dialog"]);

  return {
    provide: {
      loadingBar,
      dialog,
    },
  };
});

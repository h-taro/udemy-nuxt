export default defineNuxtPlugin(() => {
  const loading = useLoading()
  const dialog = useDialog()

  const api = $fetch.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    onRequest: () => {
      loading.start()
    },
    onResponse: () => {
      loading.finish()
    },
    onResponseError: () => {
      loading.error()
      dialog.error({
        title: 'エラー',
        content: 'エラーが発生しました。'
      })
    }
  });

  return {
    provide: {
      api,
    },
  };
});

export const useLoading = () => {
  const { $loadingBar } = useNuxtApp();
  return $loadingBar;
};

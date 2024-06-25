export default defineNuxtRouteMiddleware((to) => {
  const authStore = useAuthStore();

  const redirectTo = authStore.validateRoute(to);
  if (redirectTo) {
    return navigateTo(redirectTo);
  }
});

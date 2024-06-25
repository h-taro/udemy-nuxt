import type { User } from "~/models/user";

export const useAuthStore = defineStore(
  "auth",
  () => {
    const user = ref<User>();
    const isLogin = computed<boolean>(() => !!user.value);

    const setUser = (newUser: User) => {
      user.value = newUser;
    };
    const clearUser = () => {
      user.value = undefined;
    };

    return {
      user,
      isLogin,
      setUser,
      clearUser,
    };
  },
  { persist: true }
);

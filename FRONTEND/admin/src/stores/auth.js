// stores/auth.js
import { defineStore } from "pinia";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    isAdminLoggedIn: false,
  }),
  actions: {
    loginAdmin() {
      // Thực hiện đăng nhập admin và đặt isAdminLoggedIn thành true
      this.isAdminLoggedIn = true;
    },
    logoutAdmin() {
      // Thực hiện đăng xuất admin và đặt isAdminLoggedIn thành false
      this.isAdminLoggedIn = false;
    },
  },
});

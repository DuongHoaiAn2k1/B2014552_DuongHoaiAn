// stores/auth.js
import { defineStore } from "pinia";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    isUserLoggedIn: JSON.parse(
      localStorage.getItem("isUserLoggedIn") || "false"
    ),
    token: localStorage.getItem("token") || null, // Thêm trạng thái token
  }),
  actions: {
    login(token) {
      // Thực hiện đăng nhập admin và đặt isUserLoggedIn thành true
      this.isUserLoggedIn = true;
      this.token = token; // Lưu token vào trạng thái
      localStorage.setItem("isUserLoggedIn", true);
      localStorage.setItem("token", token); // Lưu token vào localStorage
    },
    logout() {
      // Thực hiện đăng xuất admin và đặt isUserLoggedIn thành false
      this.isUserLoggedIn = false;
      this.token = null; // Xóa token khỏi trạng thái
      localStorage.setItem("isUserLoggedIn", false);
      localStorage.removeItem("token"); // Xóa token khỏi localStorage
    },
  },
});

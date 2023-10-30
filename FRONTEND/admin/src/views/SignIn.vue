<template>
  <div class="page">
    <SignInForm @submit:signin="submitSignIn" />
    <p></p>
  </div>
</template>

<script>
import adminService from "@/services/admin.service.js";
import SignInForm from "@/components/SignInForm.vue";
import { ref } from "vue";
import { useAuthStore } from "@/stores/auth.js";
import { useRouter } from "vue-router";

export default {
  components: {
    SignInForm,
  },
  setup() {
    const authStore = useAuthStore();
    // const store = useStore();
    const router = useRouter();
    // const message = ref("");
    const submitSignIn = async (data) => {
      try {
        const response = await adminService.signIn(data);
        console.log(response);
        authStore.loginAdmin();
        console.log("Đăng nhập thành công");
        router.push({ name: "home" });
        console.log(authStore.isAdminLoggedIn);
        // Redirect hoặc thực hiện các tác vụ cần thiết cho trang admin
        // const token = response.token;
        // localStorage.setItem("token", token);
        // store.setIsAuthenticated(true);
        // store.setRole("admin");
        // router.push({ name: 'admin.dashboard.show' });
      } catch (error) {
        console.log(error);
        // message.value = "Tài phản hoặc mật khẩu. Vui lòng thử lại.";
      }
    };
    // return { store, message, submitSignIn }
    return { submitSignIn };
  },
};
</script>

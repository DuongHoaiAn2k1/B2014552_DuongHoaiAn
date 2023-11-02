<template>
  <div class="page">
    <!-- <SignUpForm @submit:signup="submitSignUp" />
      <p>{{ message }}</p> -->
    <SignInForm @submit:signin="submitSignIn" />
  </div>
</template>

<script>
import customerService from "@/services/customer.service";
import SignInForm from "@/components/SignInForm.vue";
import { useAuthStore } from "../stores/auth";
import { useRouter } from "vue-router";
export default {
  components: {
    SignInForm,
  },
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();
    //   //   const message = ref("");
    const submitSignIn = async (data) => {
      try {
        console.log(data.email);
        const response = await customerService.signIn(data);
        console.log(response);
        if (response && response.token) {
          authStore.login(response.token, response.userId);
        }

        alert("Đăng nhập thành công");
        router.push({ name: "home" });
      } catch (error) {
        console.log(error);
        //   //       message.value = "Tài phản hoặc mật khẩu. Vui lòng thử lại.";
      }
    };
    //   //   return { store, message, submitSignIn };
    return { submitSignIn };
  },
};
</script>

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
import { defineComponent, ref } from "vue";
export default defineComponent({
  components: {
    SignInForm,
  },
  setup() {
    //   //   const store = useStore();
    //   //   const router = useRouter();
    //   //   const message = ref("");
    const submitSignIn = async (data) => {
      try {
        console.log(data.email);
        const response = await customerService.signIn(data);
        console.log(response);
        //   //       const token = response.token;
        //   //       localStorage.setItem("token", token);
        //   //       store.setIsAuthenticated(true);
        //   //       router.push({ name: "home" });
      } catch (error) {
        console.log(error);
        //   //       message.value = "Tài phản hoặc mật khẩu. Vui lòng thử lại.";
      }
    };
    //   //   return { store, message, submitSignIn };
    return { submitSignIn };
  },
});
</script>

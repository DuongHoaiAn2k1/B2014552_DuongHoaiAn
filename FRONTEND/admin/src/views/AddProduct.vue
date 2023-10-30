<template>
  <ProductForm @submit:addproduct="submitAddproduct" />
</template>

<script>
import productService from "@/services/product.service.js";
import ProductForm from "@/components/ProductForm.vue";
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  components: {
    ProductForm,
  },
  setup() {
    const submitAddproduct = async (data) => {
      try {
        const formData = new FormData();
        // Thêm các trường dữ liệu vào formData
        for (const key in data) {
          if (key !== "productImg") {
            formData.append(key, data[key]);
          } else if (data.productImg) {
            // Thêm hình ảnh vào formData
            formData.append("productImg", data.productImg[0]);
          }
        }
        console.log(data);
        console.log(formData);
        const response = await productService.create(formData);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    return { submitAddproduct };
  },
});
</script>

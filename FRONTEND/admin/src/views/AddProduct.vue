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
          } else if (data.productImg && Array.isArray(data.productImg)) {
            // Thêm mỗi hình ảnh vào formData
            data.productImg.forEach((img) => {
              formData.append("productImg", img);
            });
          }
        }
        for (let [key, value] of formData.entries()) {
          console.log(`${key}:`, value);
        }
        console.log(data.productImg);
        console.log(data);
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

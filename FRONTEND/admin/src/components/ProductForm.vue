<template>
  <div id="layoutSidenav_content">
    <main>
      <div class="container-fluid px-4">
        <h2 style="font-weight: 600" class="mt-4">Thêm sản phẩm</h2>

        <div class="card mb-4"></div>
        <div class="container-fluid">
          <form @submit="submitAddproduct" enctype="multipart/form-data">
            <div class="row mb-4">
              <div class="col">
                <div class="form-outline">
                  <label class="form-label" for="productName"
                    >Tên sản phẩm</label
                  >
                  <input
                    type="text"
                    id="productName"
                    v-model="productData.productName"
                    class="form-control"
                    name="productName"
                  />
                  <div class="text-danger">
                    {{ productNameError }}
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="form-outline">
                  <label class="form-label" for="productDescription"
                    >Mô tả sản phẩm</label
                  >
                  <input
                    type="text"
                    id="productDescription"
                    v-model="productData.productDes"
                    class="form-control"
                    name="productDes"
                  />
                  <div class="text-danger">
                    {{ productDesError }}
                  </div>
                </div>
              </div>
            </div>
            <div class="row mb-4">
              <div class="col">
                <div class="form-outline">
                  <label class="form-label" for="productCategory"
                    >Danh mục sản phẩm</label
                  >
                  <select
                    id="productCategory"
                    v-model="productData.categoryId"
                    class="form-select"
                    name="categoryId"
                  >
                    <option value="653a78533a03fc2b1f826df9">Nước hoa</option>
                    <option value="category2">Danh mục 2</option>
                    <!-- Add more options as needed -->
                  </select>
                  <div class="text-danger">
                    {{ categoryIdError }}
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="form-outline">
                  <label class="form-label" for="productImage"
                    >Hình ảnh sản phẩm</label
                  >
                  <input
                    type="file"
                    name="productImg"
                    @change="handleImageUpload"
                    class="form-control"
                    multiple
                  />
                </div>
              </div>
            </div>
            <div class="row mb-4">
              <div class="col">
                <div class="form-outline">
                  <label class="form-label" for="productPrice">Giá</label>
                  <input
                    type="text"
                    id="productPrice"
                    v-model="productData.price"
                    class="form-control"
                    name="price"
                  />
                  <div class="text-danger">
                    {{ priceError }}
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="form-outline">
                  <label class="form-label" for="productBrand"
                    >Thương hiệu</label
                  >
                  <input
                    type="text"
                    id="productBrand"
                    v-model="productData.trademark"
                    class="form-control"
                    name="trademark"
                  />
                  <div class="text-danger">
                    {{ trademarkError }}
                  </div>
                </div>
              </div>
            </div>
            <div class="row mb-4">
              <div class="col">
                <div class="form-outline">
                  <label class="form-label" for="productOrigin">Xuất xứ</label>
                  <input
                    type="text"
                    id="productOrigin"
                    v-model="productData.origin"
                    class="form-control"
                    name="origin"
                  />
                  <div class="text-danger">
                    {{ originError }}
                  </div>
                </div>
              </div>
              <div class="col"></div>
            </div>
            <!-- Submit button -->
            <button type="submit" class="btn btn-primary btn-block mb-4">
              Thêm
            </button>
          </form>
        </div>
      </div>
    </main>
    <footer class="py-4 bg-light mt-auto">
      <div class="container-fluid px-4">
        <div class="d-flex align-items-center justify-content-between small">
          <div class="text-muted">Bản quyền &copy; Trang web của bạn 2023</div>
          <div>
            <a href="#">Chính sách bảo mật</a>
            &middot;
            <a href="#">Điều khoản &amp; Điều kiện</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { useAuthStore } from "@/stores/auth.js";
import productService from "@/services/product.service.js";
import { ref, reactive } from "vue";
import * as yup from "yup";

const authStore = useAuthStore();
const schema = yup.object().shape({
  productName: yup.string().required("Tên sản phẩm không được để trống"),
  productDes: yup.string().required("Mô tả sản phẩm không được để trống"),
  categoryId: yup.string().required("Danh mục sản phẩm không được để trống"),
  price: yup.number().typeError("Giá sản phẩm không được để trống").nullable(),
  trademark: yup.string().required("Thương hiệu không được để trống"),
  origin: yup.string().required("Xuất xứ không được để trống"),
});
export default {
  setup(props, context) {
    const productData = reactive({
      productName: "",
      productDes: "",
      categoryId: "",
      productImg: "",
      price: "",
      trademark: "",
      origin: "",
    });

    const productNameError = ref("");
    const productDesError = ref("");
    const categoryIdError = ref("");
    const priceError = ref("");
    const trademarkError = ref("");
    const originError = ref("");
    const handleImageUpload = (event) => {
      const imageFiles = event.target.files; // Lấy danh sách tệp hình ảnh đã chọn

      if (imageFiles && imageFiles.length > 0) {
        productData.productImg = imageFiles;
      } else {
        productData.productImg = null;
      }
    };
    const submitAddproduct = (event) => {
      event.preventDefault();
      productNameError.value = null;
      productDesError.value = null;
      categoryIdError.value = null;
      priceError.value = null;
      trademarkError.value = null;
      originError.value = null;
      schema
        .validate(productData, { abortEarly: false })
        .then(() => {
          productNameError.value = null;
          productDesError.value = null;
          categoryIdError.value = null;
          priceError.value = null;
          trademarkError.value = null;
          originError.value = null;
          // console.log(productData);

          context.emit("submit:addproduct", productData);
        })
        .catch((errors) => {
          // Handle validation errors
          errors.inner.forEach((error) => {
            if (error.path === "productName") {
              productNameError.value = error.message;
            }
            if (error.path === "productDes") {
              productDesError.value = error.message;
            }
            if (error.path === "categoryId") {
              categoryIdError.value = error.message;
            }
            if (error.path === "price") {
              priceError.value = error.message;
            }
            if (error.path === "trademark") {
              trademarkError.value = error.message;
            }
            if (error.path === "origin") {
              originError.value = error.message;
            }
          });
        });
    };

    return {
      productData,
      productNameError,
      productDesError,
      categoryIdError,
      priceError,
      trademarkError,
      originError,
      submitAddproduct,
      handleImageUpload,
    };
  },
};
</script>

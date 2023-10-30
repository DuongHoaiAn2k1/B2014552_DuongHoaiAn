<template>
  <div id="layoutSidenav_content">
    <main>
      <div class="container-fluid px-4">
        <h2 style="font-weight: 600" class="mt-4">Cập nhật sản phẩm</h2>

        <div class="card mb-4"></div>
        <div class="container-fluid">
          <form
            @submit.prevent="submitUpdateProduct"
            enctype="multipart/form-data"
          >
            <div class="row mb-4">
              <div class="col">
                <div class="form-outline">
                  <label class="form-label" for="productName"
                    >Tên sản phẩm</label
                  >
                  <input
                    type="text"
                    id="productName"
                    v-model="currentProduct.productName"
                    class="form-control"
                    name="productName"
                  />
                  <div class="text-danger"></div>
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
                    v-model="currentProduct.productDes"
                    class="form-control"
                    name="productDes"
                  />
                  <div class="text-danger"></div>
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
                    v-model="currentProduct.categoryId"
                    class="form-select"
                    name="categoryId"
                  >
                    <option disabled value="">
                      Vui lòng chọn một danh mục
                    </option>
                    <option
                      v-for="category in categories"
                      :key="category._id"
                      :value="category._id"
                      :selected="category._id === currentProduct.categoryId"
                    >
                      {{ category.name }}
                    </option>
                  </select>

                  <div class="text-danger"></div>
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
                  <div class="text-danger"></div>
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
                    v-model="currentProduct.price"
                    class="form-control"
                    name="price"
                  />
                  <div class="text-danger"></div>
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
                    v-model="currentProduct.trademark"
                    class="form-control"
                    name="trademark"
                  />
                  <div class="text-danger"></div>
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
                    v-model="currentProduct.origin"
                    class="form-control"
                    name="origin"
                  />
                  <div class="text-danger"></div>
                </div>
              </div>
              <div class="col"></div>
            </div>
            <!-- Submit button -->
            <button type="submit" class="btn btn-primary btn-block mb-4">
              Cập nhật
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
import { ref, toRefs, computed } from "vue";

export default {
  props: {
    currentProduct: Object,
    categories: {
      type: Array,
      default: () => [],
    },
  },

  setup(props, { emit }) {
    const { currentProduct } = toRefs(props);

    const submitUpdateProduct = (event) => {
      event.preventDefault();
      emit("updateProduct", currentProduct.value);
    };

    return {
      currentProduct,
      submitUpdateProduct,
    };
  },
};
</script>

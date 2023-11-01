<template>
  <div id="layoutSidenav_content">
    <main>
      <div class="container-fluid px-4">
        <h1 class="mt-4" style="font-weight: 600">Danh sách sản phẩm</h1>
        <ol class="breadcrumb mb-4">
          <button type="button" class="btn btn-dark">
            <router-link :to="{ name: 'add-product' }" class="router-css">
              Thêm (+)</router-link
            >
          </button>
        </ol>
        <div class="card mb-4"></div>
        <div class="card mb-4">
          <div class="card-header">
            <i class="fas fa-table me-1"></i>
          </div>
          <div class="card-body">
            <table class="table">
              <thead class="table-light">
                <tr>
                  <th>STT</th>
                  <th>Tên sản phẩm</th>
                  <th>Hình ảnh</th>
                  <th>Giá</th>
                  <th>Mô tả</th>
                  <th>Thương hiệu</th>
                  <th>Xuất xứ</th>
                  <th>Trạng thái</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(product, index) in products" :key="product._id">
                  <td>&ensp;{{ index + 1 }}</td>
                  <td>{{ product.productName }}</td>
                  <td>
                    <img
                      :src="
                        'http://localhost:3000/uploads/' + product.productImg[0]
                      "
                      alt="Hình ảnh"
                      width="50"
                      height="50"
                    />
                  </td>
                  <td>{{ product.price }}</td>
                  <td>{{ product.productDes }}</td>
                  <td>{{ product.trademark }}</td>
                  <td>{{ product.origin }}</td>
                  <td>{{ product.soldOut ? "Hết" : "Còn" }}</td>
                  <td>
                    <router-link
                      :to="{
                        name: 'edit-product',
                        params: { id: product._id },
                      }"
                      class="router-css-2"
                      ><i class="fa-regular fa-pen-to-square"></i
                    ></router-link>
                    &ensp;|&ensp;
                    <a
                      href=""
                      style="color: black"
                      @click="
                        confirmDeleteProduct(product._id, product.productName)
                      "
                      ><i class="fa-solid fa-trash"></i
                    ></a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
    <footer class="py-4 bg-light mt-auto">
      <div class="container-fluid px-4">
        <div class="d-flex align-items-center justify-content-between small">
          <div class="text-muted">Copyright &copy; Your Website 2023</div>
          <div>
            <a href="#">Privacy Policy</a>
            &middot;
            <a href="#">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { useAuthStore } from "@/stores/auth.js";
import productService from "@/services/product.service.js";
import { ref, onMounted } from "vue";
const authStore = useAuthStore();

export default {
  setup() {
    const products = ref([]);
    const fetchProducts = async () => {
      try {
        const response = await productService.findAll();
        products.value = response;
      } catch (error) {
        console.error("Lỗi khi lấy danh sách sản phẩm:", error);
      }
    };

    const confirmDeleteProduct = async (productId, productName) => {
      const shouldDelete = window.confirm(
        `Bạn có chắc muốn xóa sản phẩm "${productName}" không?`
      );

      if (shouldDelete) {
        try {
          const response = await productService.delete(productId);
        } catch (error) {
          console.log(error);
        }
      }
    };

    onMounted(() => {
      fetchProducts();
    });

    return {
      products,
      confirmDeleteProduct,
    };
  },
};
</script>

<style>
.router-css {
  text-decoration: none;
  color: #fff;
}
.router-css-2 {
  color: black;
}
</style>

<template>
  <!-- Footer -->
  <footer class="text-center text-lg-start bg-light text-muted">
    <!-- Section: Social media -->
    <section
      class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
    >
      <!-- Left -->
    </section>
    <!-- Section: Social media -->

    <!-- Section: Links  -->
    <section class="">
      <div class="container text-center text-md-start mt-5">
        <!-- Grid row -->
        <div class="row mt-3">
          <!-- Grid column -->
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <!-- Content -->
            <h6 class="text-uppercase fw-bold mb-4">
              <i class="fas fa-gem me-3"></i>Man Store
            </h6>
            <p>
              Phong cách đích thực, từng chi tiết hoàn hảo - Chọn lựa của quý
              ông hiện đại
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
            <router-link :to="{ name: 'product' }" class="router-css">
              <h6 class="text-uppercase fw-bold mb-4">Products</h6>
            </router-link>
            <p>
              Vẻ Ngoài Mạnh Mẽ, Hương Thơm Quyến Rũ - Lựa Chọn Hàng Đầu Cho Phái
              Mạnh
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
            <router-link :to="{ name: 'introduce' }" class="router-css">
              <h6 class="text-uppercase fw-bold mb-4">Giới thiệu</h6>
            </router-link>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <!-- Links -->
            <router-link :to="{ name: 'contact' }" class="router-css">
              <h6 class="text-uppercase fw-bold mb-4">Liên hệ</h6>
            </router-link>
            <p>
              <i class="fas fa-home me-3"></i> 94 3/2 Xuân Khánh - Ninh Kiều -
              Cần Thơ
            </p>
            <p>
              <i class="fas fa-envelope me-3"></i>
              anb2014552@student.ctu.edu.vn
            </p>
            <p><i class="fas fa-phone me-3"></i> +84 943808107</p>
            <p><i class="fas fa-print me-3"></i> +84 976146523</p>
          </div>
          <!-- Grid column -->
        </div>
        <!-- Grid row -->
      </div>
    </section>
    <!-- Section: Links  -->

    <!-- Copyright -->
    <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05)">
      B2014552 - Dương Hoài Ân
    </div>
    <!-- Copyright -->
  </footer>
  <!-- Footer -->
</template>

<style>
.router-css {
  color: #6c757d;
}
</style>

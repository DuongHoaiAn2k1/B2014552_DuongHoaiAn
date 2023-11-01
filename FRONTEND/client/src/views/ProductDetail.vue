<template>
  <div class="page">
    <section class="py-5">
      <div class="container">
        <div class="row gx-5">
          <aside class="col-lg-6">
            <div class="border rounded-4 mb-3 d-flex justify-content-center">
              <div
                id="carouselExampleControls"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      :src="
                        'http://localhost:3000/uploads/' + product.productImg[0]
                      "
                      class="d-block w-100"
                      alt="..."
                      style="height: 350px"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      :src="
                        'http://localhost:3000/uploads/' + product.productImg[1]
                      "
                      class="d-block w-100"
                      alt="..."
                      height="350"
                    />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <!-- thumbs-wrap.// -->
            <!-- gallery-wrap .end// -->
          </aside>
          <main class="col-lg-6">
            <div class="ps-lg-3">
              <h4 class="title text-dark">
                {{ product.productName }}
              </h4>
              <div class="d-flex flex-row my-3">
                <div class="text-warning mb-1 me-2">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                  <span class="ms-1"> 4.5 </span>
                </div>
                <span class="text-muted"
                  ><i class="fas fa-shopping-basket fa-sm mx-1"></i>154
                  orders</span
                >
                <span class="text-success ms-2">In stock</span>
              </div>

              <div class="mb-3">
                <span style="color: red; font-size: 28px" class="h5">
                  {{
                    product.price ? formatPriceVND(product.price) : "Loading..."
                  }}</span
                >
              </div>

              <p>
                {{ product.productDes }}
              </p>

              <div class="row">
                <dt class="col-3">Thương hiệu:</dt>
                <dd class="col-9">{{ product.trademark }}</dd>

                <dt class="col-3">Xuất xứ:</dt>
                <dd class="col-9">{{ product.origin }}</dd>
              </div>

              <hr />

              <div class="row mb-4">
                <!-- col.// -->
                <div class="col-md-4 col-6 mb-3">
                  <label class="mb-2 d-block">Quantity</label>
                  <div class="input-group mb-3" style="width: 170px">
                    <button
                      class="btn btn-white border border-secondary px-3"
                      type="button"
                      id="button-addon1"
                      data-mdb-ripple-color="dark"
                    >
                      <i class="fas fa-minus"></i>
                    </button>
                    <input
                      type="text"
                      class="form-control text-center border border-secondary"
                      placeholder="14"
                      aria-label="Example text with button addon"
                      aria-describedby="button-addon1"
                    />
                    <button
                      class="btn btn-white border border-secondary px-3"
                      type="button"
                      id="button-addon2"
                      data-mdb-ripple-color="dark"
                    >
                      <i class="fas fa-plus"></i>
                    </button>
                  </div>
                </div>
                <div class="col-md-4 col-6">
                  <div class="row mt-4" style="margin-top: 32px !important">
                    <a href="#" class="btn btn-primary shadow-0">
                      <i class="me-1 fa fa-shopping-basket"></i> Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
    <!-- content -->
  </div>
</template>

<script>
import { ref, toRefs, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import productService from "@/services/product.service.js";

export default {
  setup() {
    const product = ref({
      productName: "",
      productImg: [],
      price: null,
      productDes: "",
      trademark: "",
      origin: "",
    });

    const route = useRoute();
    onMounted(async () => {
      try {
        const productId = computed(() => route.params.id);
        // console.log(productId.value);
        product.value = await productService.get(productId.value);
        console.log(product);
      } catch (error) {
        console.log(error);
      }
    });
    function formatPriceVND(price) {
      return price.toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND",
      });
    }
    return { product, formatPriceVND };
  },
};
</script>

<style>
.icon-hover:hover {
  border-color: #3b71ca !important;
  background-color: white !important;
  color: #3b71ca !important;
}

.icon-hover:hover i {
  color: #3b71ca !important;
}
</style>

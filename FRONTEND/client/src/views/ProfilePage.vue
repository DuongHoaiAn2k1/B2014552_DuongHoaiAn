<template>
  <div class="container mt-2">
    <div class="row gutters">
      <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
        <div class="card h-100">
          <div class="card-body">
            <div class="account-settings">
              <div class="user-profile">
                <h3 style="font-weight: 600" class="text-center">KHÁCH HÀNG</h3>
                <h5 style="font-weight: 600" class="user-name mt-2 text-center">
                  {{ customer.name }}
                </h5>
                <div class="user-avatar">
                  <img
                    src="https://png.pngtree.com/png-vector/20190728/ourlarge/pngtree-avatar-user-profile-flat-color-icon-vector-icon-banner-png-image_1619399.jpg"
                    alt="Maxwell Admin"
                    height="250"
                    width="250"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
        <div class="card h-100">
          <div class="card-body">
            <div class="row gutters">
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <h5 style="font-weight: 600" class="mb-2 text-dark">
                  Thông tin khách hàng
                </h5>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div class="form-group">
                  <label style="font-weight: 600" for="fullName"
                    >Họ và tên</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="fullName"
                    name="name"
                    placeholder="Enter full name"
                    v-model="customerData.name"
                  />
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div class="form-group">
                  <label style="font-weight: 600" for="eMail">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="eMail"
                    name="email"
                    placeholder="Enter email ID"
                    v-model="customerData.email"
                  />
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div class="form-group">
                  <label style="font-weight: 600" for="phone"
                    >Số điện thoại</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="phone"
                    name="phone"
                    placeholder="Enter phone number"
                    v-model="customerData.phone"
                  />
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div class="form-group">
                  <label style="font-weight: 600" for="address">Địa chỉ</label>
                  <input
                    type="url"
                    class="form-control"
                    id="address"
                    name="address"
                    placeholder=""
                    v-model="customerData.address"
                  />
                </div>
              </div>
            </div>

            <div class="row gutters mt-1">
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="text-right">
                  <button
                    type="button"
                    id="submit"
                    name="submit"
                    class="btn btn-primary"
                    @click="updateCustomer"
                  >
                    Cập nhật
                  </button>
                </div>
              </div>
            </div>
          </div>

          <h2 style="font-weight: 600">Đơn hàng</h2>
          <div id="scroll-container" class="card-body">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colspan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colspan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colspan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colspan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colspan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import customerService from "@/services/customer.service.js";
import { useAuthStore } from "../stores/auth";

export default {
  setup() {
    const customer = ref({});
    const customerData = ref({
      name: "",
      email: "",
      phone: "",
      address: "",
    });
    const authStore = useAuthStore();
    const userId = computed(() => authStore.userId);

    onMounted(async () => {
      try {
        const response = await customerService.get(userId.value);
        customer.value = response;
        const { name, email, phone, address } = response;
        customerData.value = { name, email, phone, address };
      } catch (error) {
        console.error(error);
      }
    });

    const updateCustomer = async () => {
      try {
        const response = await customerService.update(
          userId.value,
          customerData.value
        );
        customer.value = response;
        alert("Cập nhật thông tin thành công");
      } catch (error) {
        console.error(error);
        // Hiển thị thông báo lỗi
      }
    };

    return { userId, customer, customerData, updateCustomer };
  },
};
</script>

<style>
#scroll-container {
  padding: 0px;
  height: 300px;
  overflow: auto;
}
table {
  width: 100%;
  border-collapse: collapse;
}

thead {
  background-color: #000;
  /* Màu nền của phần head */
  color: #fff;
  position: sticky;
  top: 0;
}

th {
  text-align: left;
  padding: 8px 10px;
  /* Các thuộc tính CSS khác cho phần đầu bảng */
}

tbody {
  height: 200px;
  /* Đặt chiều cao cho phần body để tạo thanh cuộn */
  overflow: auto;
}
</style>

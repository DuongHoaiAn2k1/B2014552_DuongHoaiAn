<template>
  <div class="header">
    <!-- Navbar -->
    <nav class="container navbar navbar-expand-lg navbar-light bg-light">
      <!-- Container wrapper -->
      <div class="container-fluid">
        <!-- Toggle button -->
        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>

        <!-- Collapsible wrapper -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <!-- Navbar brand -->
          <a class="navbar-brand mt-2 mt-lg-0" href="#">
            <img
              src="https://t4.ftcdn.net/jpg/03/28/11/35/360_F_328113542_31B2IVU37qZ09cXXA6iMSXs62Optrwok.jpg"
              height="80"
              alt="MDB Logo"
              loading="lazy"
            />
          </a>
          <!-- Left links -->
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <router-link :to="{ name: 'home' }" class="router-css">
              <li class="nav-item">
                <a class="nav-link" href="#">Trang chủ</a>
              </li>
            </router-link>
            <router-link :to="{ name: 'product' }" class="router-css">
              <li class="nav-item">
                <a class="nav-link" href="#">Sản phẩm</a>
              </li>
            </router-link>
            <router-link :to="{ name: 'introduce' }" class="router-css">
              <li class="nav-item">
                <a class="nav-link" href="#">Giới thiệu</a>
              </li>
            </router-link>
            <router-link :to="{ name: 'contact' }" class="router-css">
              <li class="nav-item">
                <a class="nav-link" href="#">Liên hệ</a>
              </li>
            </router-link>
          </ul>
          <!-- Left links -->
        </div>
        <!-- Collapsible wrapper -->

        <!-- Right elements -->
        <div class="d-flex align-items-center">
          <form class="d-flex input-group w-auto me-2">
            <input
              type="search"
              class="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <span class="input-group-text border-0" id="search-addon">
              <i class="fas fa-search"></i>
            </span>
          </form>
          <!-- Icon -->
          <a class="text-reset me-3" href="#">
            <i class="fas fa-shopping-cart"></i>
            <span class="badge rounded-pill badge-notification bg-danger"
              >1</span
            >
          </a>

          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle button-user"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i
                style="color: black; font-size: 18px"
                class="fa-solid fa-user"
              ></i>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <router-link
                :to="{ name: 'signin' }"
                class="router-css router-li"
              >
                <li>
                  <a class="dropdown-item" href="#">Đăng nhập</a>
                </li>
              </router-link>
              <!-- <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li> -->
            </ul>
          </div>
          <!-- Avatar -->
          <!-- <div class="dropdown">
            <a
              class="dropdown-toggle d-flex align-items-center hidden-arrow"
              href="#"
              id="navbarDropdownMenuAvatar"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
                class="rounded-circle"
                height="25"
                alt="Black and White Portrait of a Man"
                loading="lazy"
              />
            </a>
            <ul
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuAvatar"
            >
              <router-link
                :to="{ name: 'signin' }"
                class="router-css router-li"
              >
                <li>
                  <a class="dropdown-item" href="#">Đăng nhập</a>
                </li>
              </router-link>

              
            </ul>
          </div> -->
        </div>
        <!-- Right elements -->
      </div>
      <!-- Container wrapper -->
    </nav>
    <!-- Navbar -->
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  // setup() {
  //   const store = useStore();
  //   const router = useRouter();
  //   const signOut = async () => {
  //     try {
  //       const headers = {
  //         Authorization: `Bearer ${localStorage.getItem("token")}`,
  //       };
  //       await adminService.signOut({ headers });
  //       localStorage.removeItem("token");
  //       store.setIsAuthenticated(false);
  //       router.push({ name: "home" });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   return { store, signOut };
  // },
});
</script>

<style>
.router-css {
  text-decoration: none;
}

.header {
  height: 80px;
  background-color: #fff;
}

.header .navbar {
  height: 80px;
  background-color: #fff !important;
  font-size: 18px !important;
  text-transform: uppercase;
  font-weight: 600;
}

.router-li li a {
  font-size: 12px;
}

.button-user {
  background-color: #fff;
  border: none;
  padding: 4px;
}

@media screen and (min-width: 1024px) {
}
</style>

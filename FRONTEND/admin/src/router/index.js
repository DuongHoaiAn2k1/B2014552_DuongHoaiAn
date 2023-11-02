import { useAuthStore } from "@/stores/auth";
import { RouterView, createWebHistory, createRouter } from "vue-router";

// import { useStore } from "../stores/store";
const routes = [
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: () => import("@/views/NotFoundPage.vue"),
  },

  // Admin
  {
    path: "/signin",
    name: "signin",
    component: () => import("@/views/SignIn.vue"),
    beforeEnter: (to, from, next) => {
      const authStore = useAuthStore();
      if (authStore.isAdminLoggedIn) {
        next("/home");
      } else {
        next();
      }
    },
  },
  {
    path: "/",
    name: "admin",
    component: () => import("@/views/AdminPage.vue"),
    beforeEnter: (to, from, next) => {
      const authStore = useAuthStore();
      if (authStore.isAdminLoggedIn) {
        next();
      } else {
        next({ name: "signin" });
      }
    },
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("@/components/Home.vue"),
        meta: {
          requiresAuth: true, // Yêu cầu đăng nhập để truy cập trang này
        },
      },
      {
        path: "/add-product",
        name: "add-product",
        component: () => import("@/views/AddProduct.vue"),
        meta: {
          requiresAuth: true, // Yêu cầu đăng nhập để truy cập trang này
        },
      },
      {
        path: "/edit-product/:id",
        name: "edit-product",
        component: () => import("@/views/EditProduct.vue"),
        meta: {
          requiresAuth: true, // Yêu cầu đăng nhập để truy cập trang này
        },
      },
      {
        path: "/category-list",
        name: "category-list",
        component: () => import("@/components/CategoryList.vue"),
        meta: {
          requiresAuth: true, // Yêu cầu đăng nhập để truy cập trang này
        },
      },
      {
        path: "/add-category",
        name: "add-category",
        component: () => import("@/views/AddCategory.vue"),
        meta: {
          requiresAuth: true, // Yêu cầu đăng nhập để truy cập trang này
        },
      },

      {
        path: "/edit-category/:id",
        name: "edit-category",
        component: () => import("@/views/EditCategory.vue"),
        meta: {
          requiresAuth: true, // Yêu cầu đăng nhập để truy cập trang này
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;

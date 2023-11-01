import { createWebHistory, createRouter } from "vue-router";
// import { useStore } from "../stores/store";
const routes = [
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: () => import("@/views/NotFoundPage.vue"),
  },

  {
    path: "/",
    component: () => import("@/views/CustomerPage.vue"),
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("@/components/Home.vue"),
      },

      {
        path: "/signup",
        name: "signup",
        component: () => import("@/views/SignUp.vue"),
        // beforeEnter: (to, from, next) => {
        //   const store = useStore();
        //   if (store.isAuthenticated) next("/");
        //   else next();
        // },
      },

      {
        path: "/signin",
        name: "signin",
        component: () => import("@/views/SignIn.vue"),
        // beforeEnter: (to, from, next) => {
        //   const store = useStore();
        //   if (store.isAuthenticated) next("/");
        //   else next();
        // },
      },
      {
        path: "/product",
        name: "product",
        component: () => import("@/views/Product.vue"),
      },
      {
        path: "/product/:id",
        name: "product-detail",
        component: () => import("@/views/ProductDetail.vue"),
        props: true,
      },
      // {
      //   path: "/cart",
      //   name: "cart",
      //   component: () => import("@/views/Cart.vue"),
      //   beforeEnter: (to, from, next) => {
      //     const store = useStore();
      //     if (store.isAuthenticated) next();
      //     else next({ name: "signin" });
      //   },
      // },
      {
        path: "/introduce",
        name: "introduce",
        component: () => import("@/views/IntroducePage.vue"),
      },
      {
        path: "/contact",
        name: "contact",
        component: () => import("@/views/ContactPage.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;

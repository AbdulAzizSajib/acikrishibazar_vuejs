import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import { createRouter, createWebHistory } from "vue-router";
import Cookies from "js-cookie";
import UpdateProduct from "@/views/UpdateProduct.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: Login,
    },
    {
      path: "/home",
      name: "home",
      component: Home,
    },
    {
      path: "/update/:id",
      name: "update-product",
      component: UpdateProduct,
    },
    //redirect
    // {
    //   path: "/:pathMatch(.*)*",
    //   redirect: "/",
    // },
    { path: "/:catchAll(.*)", redirect: "/" },
  ],
});

router.beforeEach((to, from, next) => {
  const token = Cookies.get("token");
  // set condition

  if (to.path == "/" && !token) {
    next();
  } else if (to.path == "/" && token) {
    next({ name: "home" });
  } else if (token) {
    next();
  } else {
    next({ name: "login" });
  }
});

export default router;

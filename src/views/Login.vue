<template>
  <Mainlayout>
    <div class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div
          class="card shadow-md shadow-indigo-200 border w-full md:w-[512px] md:h-[371px] max-w-lg shrink-0"
        >
          <h2 class="text-center text-3xl font-bold mt-4 uppercase">Sign in</h2>
          <form @submit.prevent="handleLogin($router)" class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                class="input input-bordered"
                v-model="formData.email"
                required
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                class="input input-bordered"
                v-model="formData.pass"
                required
              />
              <label class="label">
                <a href="#" class="label-text-alt link link-hover"
                  >Forgot password?</a
                >
              </label>
            </div>
            <div class="form-control">
              <button
                type="submit"
                class="btn bg-green-500 rounded-full text-white text-lg text-bold"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </Mainlayout>
</template>

<script setup>
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { reactive } from "vue";
import Mainlayout from "../components/MainLayOut/Mainlayout.vue";
import Cookies from "js-cookie";
// submit Button
const formData = reactive({
  email: null,
  password: null,
});
const handleLogin = (router) => {
  if (formData.email != "aci@com") {
    toast.error("Email is not correct");
    return 0;
  } else {
    Cookies.set("token", "Token123456");
    toast.success("You've logged in", "success");
    setTimeout(() => router.push({ name: "home" }), 2000);
  }
  console.log("submit", formData);
};
</script>

<style lang="scss" scoped></style>

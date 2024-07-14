<script setup>
import { useLoginStore } from "@/stores/Login";
import Cookies from "js-cookie";
import { storeToRefs } from "pinia";
const loginStore = useLoginStore();
const { isLoading } = storeToRefs(loginStore);

const handleLogout = (router) => {
  localStorage.clear();
  Cookies.set("token", "");
  loginStore.$reset();
  router.push({ name: "login" });
};
</script>

<template>
  <main>
    <h2>home</h2>
    <button @click="handleLogout($router)" class="btn">Logout</button>
  </main>
</template>

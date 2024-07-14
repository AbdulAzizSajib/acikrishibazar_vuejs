<script setup>
import { onMounted } from "vue";
import { useLoginStore } from "@/stores/Login";
import Cookies from "js-cookie";
import { storeToRefs } from "pinia";
const loginStore = useLoginStore();
const { isLoading, allData } = storeToRefs(loginStore);
//......
const { handleGetInfo, handleDelete } = loginStore;
onMounted(() => handleGetInfo());

const handleLogout = (router) => {
  localStorage.clear();
  Cookies.set("token", "");
  loginStore.$reset();
  router.push({ name: "login" });
};

const deleteItem = async (id) => {
  await handleDelete(id);
  // handleGetInfo(); // Refresh the data
};
</script>

<template>
  <main>
    <h2>home</h2>
    <h2 v-if="isLoading">loading...</h2>
    <button @click="handleLogout($router)" class="btn">Logout</button>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div
        class="border-2 p-5 gap-5 flex flex-col justify-center items-center"
        v-for="(data, index) in allData"
        :key="index"
      >
        <h2>Title: {{ data.title }}</h2>
        <p>Price: {{ data.price }}</p>
        <img class="w-40" :src="data.image" alt="" />
        <div class="space-x-8">
          <!-- <button @click="handleUpdateItem(data.id)" class="btn btn-warning">
            Update
          </button> -->
          <!-- <router-link
            :to="{ name: 'update-product', params: { id: data.id } }"
            class="btn btn-warning"
          >
            Update
          </router-link> -->
          <router-link
            :to="{ name: 'update-product', params: { id: data.id } }"
            class="btn btn-warning"
          >
            Update
          </router-link>
          <button @click="deleteItem(data.id)" class="btn btn-warning">
            Delete
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

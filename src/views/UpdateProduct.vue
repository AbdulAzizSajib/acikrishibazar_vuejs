<template>
  <div>
    <h2>Update Product</h2>
    <form @submit.prevent="updateProduct">
      <div>
        <label for="title">Title:</label>
        <input id="title" v-model="updateData.title" required />
      </div>
      <div>
        <label for="price">Price:</label>
        <input id="price" type="number" v-model="updateData.price" required />
      </div>
      <button type="submit" class="btn btn-success">Update</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useLoginStore } from "@/stores/Login";

const loginStore = useLoginStore();
const { handleUpdate, handleGetInfo } = loginStore;
const route = useRoute();
const router = useRouter();
const updateData = ref({ title: "", price: "" });

onMounted(() => {
  const productId = route.params.id;
  if (!productId) {
    console.error("Product ID is missing!");
    return;
  }
  const product = loginStore.allData.find((item) => item.id == productId);
  if (product) {
    updateData.value = { ...product };
  } else {
    console.error("Product not found!");
  }
});

const updateProduct = async () => {
  const productId = route.params.id;
  if (!productId) {
    console.error("Product ID is missing!");
    return;
  }
  const res = await handleUpdate(productId, updateData.value);
  res && router.push({ name: "home" });
  //   handleGetInfo(); // Refresh the data
};
</script>

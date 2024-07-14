import axios from "axios";
import Cookies from "js-cookie";
import { defineStore } from "pinia";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export const useLoginStore = defineStore("loginStore", {
  state: () => ({
    isLoading: false,
    token: "",
    userInfo: "",
    allData: null,
  }),

  actions: {
    async handleLogin(data, router) {
      this.isLoading = true;
      try {
        const response = await axios.post(
          "https://jsonplaceholder.typicode.com/posts",
          data
        );
        this.isLoading = false;
        if (response?.status == 201) {
          this.token = response?.data?.id;
          this.userInfo = response?.data;
          Cookies.set("token", this.token);
          console.log("token ->>", this.token);
          console.log("User Info ->>", this.userInfo);
          toast.success("Login Successfull");
          router.push({ name: "home" });
        } else {
          toast.error("Invalid Credentials");
          this.token = null;
          Cookies.set("token", this.token);
        }
      } catch (error) {
        this.isLoading = false;
        this.token = null;
        this.userInfo = null;
        Cookies.set("token", this.token);
        toast.error(error.message);
      }
    },
    async handleGetInfo() {
      this.isLoading = true;
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        this.isLoading = false;
        if (response?.status == 200) {
          this.allData = response?.data;

          console.log("All Data->>", this.allData);
        } else {
          toast.error("Invalid Credentials");
        }
      } catch (error) {
        toast.error(error.message);
      }
    },

    async handleUpdate(id, data) {
      this.isLoading = true;
      try {
        const response = await axios.put(
          `https://fakestoreapi.com/products/${id}`,
          data
        );
        this.isLoading = false;
        if (response?.status == 200) {
          this.allData = response?.data;

          console.log("All Data->", this.allData);
          return 1;
        } else {
          toast.error("Invalid Credentials");
        }
      } catch (error) {
        toast.error(error.message);
      }
    },
    async handleDelete(id) {
      this.isLoading = true;
      try {
        const response = await axios.delete(
          `https://fakestoreapi.com/products/${id}`
        );
        this.isLoading = false;
        if (response?.status == 200) {
          this.allData = this.allData.filter((item) => item.id !== id);
          console.log("All Data->>", this.allData);
          toast.success("Product deleted successfully");
        } else {
          toast.error("Failed to delete product");
        }
      } catch (error) {
        this.isLoading = false;
        toast.error(error.message);
      }
    },
  },
});

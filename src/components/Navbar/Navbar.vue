<script setup>
import { ref } from "vue";

const navbarLinks = ref([
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
]);
import {
  BellIcon,
  HeartIcon,
  ShoppingCartIcon,
  UserIcon,
  MagnifyingGlassIcon,
} from "@heroicons/vue/24/outline";
</script>

<template>
  <div
    class="navbar space-x-2 px-4 mx-auto bg-base-200 max-w-full flex flex-wrap"
  >
    <!-- Navbar Start -->
    <div
      class="flex justify-between w-full md:w-auto md:justify-start md:space-x-4"
    >
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          <li v-for="(link, index) in navbarLinks" :key="index">
            <router-link :to="link.link">{{ link.name }}</router-link>
          </li>
        </ul>
      </div>
      <a class="text-green-700 md:text-[2vw] font-semibold">
        ACI Krishibazar
      </a>

      <!-- Help & Contact and Order Tracking -->
      <div class="hidden lg:flex gap-4">
        <div class="flex items-center space-x-2">
          <img
            class="w-6 h-6"
            src="/src/assets/images/icons/chat.png"
            alt="Live Chat"
          />
          <a href="#" class="hidden lg:inline-block text-md text-green-700">
            Help & Contact
          </a>
        </div>
        <div class="flex items-center space-x-2">
          <img
            class="w-6 h-6"
            src="/src/assets/images/icons/truck.png"
            alt="Order Tracking"
          />
          <a href="#" class="hidden lg:inline-block text-md text-green-700">
            Order Tracking
          </a>
        </div>
      </div>
    </div>

    <!-- Search Bar -->
    <label
      class="input input-bordered flex rounded-full w-full md:w-[50%] items-center gap-2 mx-2 mt-2 md:mt-0"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        class="h-6 w-6 opacity-70"
      >
        <path
          fill-rule="evenodd"
          d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
          clip-rule="evenodd"
        />
      </svg>
      <input type="text" class="grow" placeholder="Search" />
    </label>

    <!-- Icons -->
    <div
      class="border flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-1 lg:space-x-2 mt-2 w-full md:w-auto md:mt-0"
    >
      <div class="space-x-1 flex">
        <button
          class="p-2 rounded-full group hover:bg-white hover:border-2 hover:border-green-600 bg-green-600"
        >
          <BellIcon class="w-6 h-6 text-white group-hover:text-green-600" />
        </button>
        <button class="p-2 rounded-full bg-green-600">
          <HeartIcon class="w-6 h-6 text-white" />
        </button>
        <button class="p-2 rounded-full bg-green-600">
          <ShoppingCartIcon class="w-6 h-6 text-white" />
        </button>
        <button class="p-2 rounded-full bg-green-600">
          <UserIcon class="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

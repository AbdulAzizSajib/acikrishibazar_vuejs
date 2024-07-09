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
} from "@heroicons/vue/24/outline";
</script>

<template>
  <div class="navbar bg-base-200">
    <div class="navbar-start border">
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
      <a class="text-green-700 text-3xl font-bold">ACI Krishibazar</a>
    </div>
    <!-- <div class="navbar-center hidden border lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li v-for="link in navbarLinks" :key="link.name">
          <router-link :to="link.link">{{ link.name }}</router-link>
        </li>
      </ul>
    </div> -->
    <div class="flex-1 border">
      <input type="search" name="" id="" />
    </div>
    <div class="border space-x-1">
      <button
        class="p-2 rounded-full group hover:bg-white hover:border-2 hover:border-green-600 bg-green-600"
      >
        <BellIcon class="size-6 text-white group-hover:text-green-600" />
      </button>
      <button class="p-2 rounded-full bg-green-600">
        <HeartIcon class="size-6 text-white" />
      </button>
      <button class="p-2 rounded-full bg-green-600">
        <ShoppingCartIcon class="size-6 text-white" />
      </button>
      <button class="p-2 rounded-full bg-green-600">
        <UserIcon class="size-6 text-white" />
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

<template>
  <header>
    <Navbar></Navbar>
  </header>
  <main class="min-h-screen border-2 border-red-500">
    <slot></slot>
  </main>
  <footer>Footer</footer>
</template>

<script setup>
import Navbar from "../Navbar/Navbar.vue";
</script>

<style lang="scss" scoped></style>

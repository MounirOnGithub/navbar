<script setup lang="ts">
const navs = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]
</script>

<template>
  <div class="text-3xl font-bold underline">
    <router-link v-for="nav in navs" :key="nav.name" :to="nav.path" class="mr-4">
      {{ nav.name }}
    </router-link>
  </div>
  <router-view />
</template>

<style lang="scss" scoped></style>

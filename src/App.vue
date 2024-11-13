<script setup lang="ts">
import NavigationBar from './components/NavigationBar.vue'
const navs = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]
</script>

<template>
  <NavigationBar :navs="navs" />
</template>

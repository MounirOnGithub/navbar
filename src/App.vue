<script setup lang="ts">
import { ref } from 'vue'
import { QSelect } from 'quasar'
import { useRoute } from 'vue-router'

const navs = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]

const universes = ['Krosmoz', 'AllSkreen']
const selectedUniverse = ref<string>(universes[0])

const route = useRoute()
const isActive = (path: string) => route.path === path
</script>

<template>
  <div class="h-full">
    <div class="text-3xl font-bold underline">
      <div class="flex">
        <q-select
          v-model="selectedUniverse"
          :options="universes"
          :label="selectedUniverse.name"
          class="ml-4"
        />
        <div class="nav-container">
          <router-link v-for="nav in navs" :key="nav.name" :to="nav.path" class="mr-4">
            <div :class="['nav-items', { active: isActive(nav.path) }]">
              {{ nav.name }}
            </div>
            <div
              class="nav-highlight"
              :style="{ left: `${navs.findIndex((nav) => isActive(nav.path)) * 100}px` }"
            ></div>
          </router-link>
        </div>
      </div>
    </div>

    <div class="w-screen">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nav-container {
  display: flex;
  position: relative;
  align-items: center;
  margin-left: 8px;
}

.nav-item {
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.nav-item.active {
  background-color: blue;
  color: white;
}

.nav-highlight {
  position: absolute;
  bottom: 0;
  height: 4px;
  width: 100px;
  background-color: blue;
  transition: left 0.3s;
}
</style>

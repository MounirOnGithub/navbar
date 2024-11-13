<script lang="ts" setup>
import { defineProps } from 'vue'
import { useRoute } from 'vue-router'

interface Props {
  navs: { name: string; path: string }[]
}

const route = useRoute()

const props = defineProps<Props>()
const isActive = (path: string) => route.path === path
</script>

<template>
  <div class="h-full">
    <div class="text-3xl">
      <div class="flex">
        <div class="nav-container">
          <router-link v-for="nav in props.navs" :key="nav.name" :to="nav.path" class="mr-4">
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

<script setup lang="ts">
import { useData } from "vitepress";

const {} = useData();
</script>
<template>
  <div :class="$style['container']">
    <slot />
  </div>
</template>
<style module>
.container {
  width: 100%;
  display: flex;
  overflow-y: hidden;
  overflow-x: auto;
}
.img {
  display: block;
  width: 100%;
  height: auto;
  flex: 1 1 100%
}
</style>

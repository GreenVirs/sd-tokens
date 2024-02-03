<script setup lang="ts">
import {withBase} from "vitepress";

defineProps<{
  alt: string
  images: string[]
}>()
</script>

<template>
  <div :class="$style['container']">
    <img v-for="image in images" :class="$style['img']" :src="withBase(image)" :alt="alt" />
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

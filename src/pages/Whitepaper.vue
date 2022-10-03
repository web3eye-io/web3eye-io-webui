<template>
  <blog-page />
</template>

<script setup lang='ts'>
import { defineAsyncComponent } from 'vue'

const BlogPage = defineAsyncComponent(() => import('../components/BlogPage/Page.vue'))

</script>

<template>
  <RouterLink
    class="page-link"
    to="/"
    ><HomeIcon
  /></RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import HomeIcon from '../icons/HomeIcon.vue';
</script>

<style lang="less" scoped>
.page-link {
  display: block;
  padding: 6px 10px;
}
</style>

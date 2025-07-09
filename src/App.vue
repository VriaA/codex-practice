<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <RouterView />
</template>

<style lang="less">
@import (reference) '@wikimedia/codex-design-tokens/theme-wikimedia-ui.less';

* {
  font-family: @font-family-system-sans;
  margin: 0;
  padding: 0;
}

.cdx-dialog-backdrop {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>

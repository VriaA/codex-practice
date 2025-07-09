<template>
  <header class="editor-header">
    <div class="left-header-options">
      <template
        v-for="(Component, index) in leftHeaderOptions"
        :key="index">
        <component :is="Component" />
        <OptionsDivider v-if="index !== leftHeaderOptions.length - 1" />
      </template>
    </div>

    <CdxTextInput
      class="banner-name-input"
      v-model="bannerName"
      aria-label="Editable banner name"></CdxTextInput>

    <div class="right-header-options">
      <DocsMenu></DocsMenu>
      <ShareDesign></ShareDesign>
      <CdxButton
        action="progressive"
        weight="primary"
        size="large"
        @click="isDialogOpen = true">
        GENERATE CODE
      </CdxButton>
      <CodeDialog v-model:open="isDialogOpen" />
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { CdxButton, CdxTextInput } from '@wikimedia/codex';
import CodeDialog from '../CodeDialog.vue';
import ShareDesign from './ShareDesign.vue';
import ViewportMenu from './ViewportMenu.vue';
import DocsMenu from '../DocsMenu.vue';
import TemplatesMenu from './TemplatesMenu.vue';
import HomeButton from './HomeButton.vue';
import OptionsDivider from '../icons/OptionsDivider.vue';

const bannerName = ref('Banner Name');
const isDialogOpen = ref(false);
const leftHeaderOptions = [HomeButton, TemplatesMenu, ViewportMenu];
</script>

<style lang="less" scoped>
@import (reference) '@wikimedia/codex-design-tokens/theme-wikimedia-ui.less';
@import '@/styles/header-options.less';

.editor-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 0 20px;
  background-color: #eaecf0;
  border-bottom: 1px solid #c8ccd1;
  box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.08);
}

.cdx-text-input {
  min-width: 200px;
  max-width: 250px;
}

::v-deep(.cdx-text-input__input) {
  font-family: @font-family-heading-main;
  border-radius: @border-radius-base;
  border: none;
  text-align: center;
  font-size: 1.625rem;
  background: none;
}

.right-header-options {
  display: flex;
  align-items: center;
  gap: 12px;
}
</style>

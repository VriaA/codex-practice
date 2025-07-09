<template>
  <div class="viewport-menu-wrapper">
    <CdxButton
      class="left-header-options__option"
      ref="button"
      v-model="selectedValue"
      :aria-expanded="expanded"
      :aria-controls="menuId"
      :aria-activedescendant="activeDescendant"
      @click="onClick"
      @blur="expanded = false"
      size="large"
      ><DevicesIcon />Viewport <ChevronIcon :class="{ 'rotate-180': expanded }"></ChevronIcon
    ></CdxButton>

    <CdxMenu
      :id="menuId"
      ref="menu"
      v-model:selected="selectedValue"
      v-model:expanded="expanded"
      :menu-items="menuItems"
      @close="expanded = false">
    </CdxMenu>
  </div>
</template>

<script lang="ts" setup>
import { CdxButton, CdxMenu } from '@wikimedia/codex';
import useMenu from '@/composables/useMenu';

import DevicesIcon from '../icons/DevicesIcon.vue';
import ChevronIcon from '../icons/ChevronIcon.vue';

/* ==== The icons are not available on Codex even though I got them from the Figma design library for codex
Still figuring out how to make local icons work with the codex menu
What I tried so far has not worked
=== */
// import MobileIcon from '../icons/MobileIcon.vue';
// import DesktopIcon from '../icons/DesktopIcon.vue';
// import TabletIcon from '../icons/TabletIcon.vue';

const { button, selectedValue, expanded, menuId, onClick, activeDescendant } = useMenu();

const menuItems = [
  {
    label: 'Viewport Options',
    description: 'Style how your banner will appear on different devices.',
    items: [
      {
        value: 'mobile',
        label: 'Mobile',
      },
      {
        value: 'tablet',
        label: 'Tablet',
      },
      {
        value: 'desktop',
        label: 'Desktop',
      },
    ],
  },
];
</script>

<style lang="less" scoped>
@import '@/styles/header-options.less';
.viewport-menu-wrapper {
  position: relative;
}

.cdx-menu {
  top: calc(100% + 4px);
  width: 288px;
}

.rotate-180 {
  rotate: 180deg;
}
</style>

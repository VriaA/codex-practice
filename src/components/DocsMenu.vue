<template>
  <div class="docs-menu-wrapper">
    <CdxButton
      class="docs-btn"
      ref="button"
      v-model="selectedValue"
      :aria-expanded="expanded"
      :aria-controls="menuId"
      :aria-activedescendant="activeDescendant"
      @click="onClick"
      @blur="expanded = false"
      size="large"
      ><DocsIcon></DocsIcon
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

<script setup lang="ts">
import { CdxButton, CdxMenu } from '@wikimedia/codex';
import DocsIcon from './icons/DocsIcon.vue';
import useMenu from '@/composables/useMenu';

const { button, selectedValue, expanded, menuId, onClick, activeDescendant } = useMenu();

const menuItems = [
  {
    label: 'Documentation',
    description: 'Get help using this tool and learn more about CentralNotice banners.',
    items: [
      {
        value: 'banner tool guide',
        label: 'Banner Tool Guide',
        url: 'https://toolsadmin.wikimedia.org/tools/id/centralnotice-bannergenerator',
        description: 'Step-by-step instructions for using this banner creation tool.',
      },
      {
        value: 'banner design best practices',
        label: 'Banner Design Best Practices',
        url: 'https://meta.wikimedia.org/wiki/CentralNotice/Usage_guidelines#Customizing_banner_code,_design_and_styling',
        description: 'Tips for creating accessible, effective banners on Wikimedia sites.',
      },
      {
        value: 'centralcotice documentation',
        label: 'CentralNotice Documentation',
        url: 'https://meta.wikimedia.org/wiki/Help:CentralNotice#Banners',
        description:
          'Learn how to manage campaigns, configure banners, and use the CentralNotice extension.',
      },
    ],
  },
];
</script>

<style lang="less" scoped>
.docs-menu-wrapper {
  position: relative;
}

.docs-btn {
  border: none;
  background: none;
}

.cdx-menu {
  top: calc(100% + 4px);
  width: 288px;
}
</style>

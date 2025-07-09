<template>
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
    ><TemplatesIcon />Templates
  </CdxButton>
</template>

<script setup lang="ts">
import { CdxButton } from '@wikimedia/codex';
import useMenu from '@/composables/useMenu';
import TemplatesIcon from '../icons/TemplatesIcon.vue';

const { button, selectedValue, expanded, menuId, onClick, activeDescendant } = useMenu();
</script>

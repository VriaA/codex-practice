<template>
  <CdxDialog
    v-model:open="localOpen"
    title="Generated code preview"
    subtitle="Copy this code to CentralNotice:"
    :use-close-button="true"
    :primary-action="primaryAction"
    :default-action="defaultAction"
    @primary="onPrimaryAction"
    @default="emit('update:open')">
    <!-- Code generation not implemented yet -->
    <pre class="code-block">Generated code will appear here.</pre>
    <template #footer-text>
      Complete the banner configuration and add it to a campaign using the
      <a
        class="cdx-docs-link"
        href="https://meta.wikimedia.org/wiki/Special:CentralNoticeBanners"
        >CentralNotice</a
      >
      extension.
    </template>
  </CdxDialog>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue';
import { CdxDialog } from '@wikimedia/codex';
import type { PrimaryModalAction, ModalAction } from '@wikimedia/codex';

const props = defineProps({ open: Boolean });
const emit = defineEmits(['update:open']);

const localOpen = computed({
  get: () => props.open,
  set: (value) => emit('update:open', value),
});

const defaultAction: ModalAction = {
  label: 'Close',
};

const primaryAction: PrimaryModalAction = reactive({
  label: 'Copy',
  actionType: 'progressive',
});

function onPrimaryAction(): void {
  primaryAction.label = 'Copied!';
  setTimeout(() => {
    primaryAction.label = 'Copy';
  }, 1500);
}
</script>

<style lang="less">
@import (reference) '@wikimedia/codex-design-tokens/theme-wikimedia-ui.less';
@import (reference) '@wikimedia/codex/mixins/link.less';

.cdx-docs-link {
  .cdx-mixin-link();
}

.code-block {
  font-family: @font-family-monospace;
  font-size: @font-size-small;
  padding: @spacing-100;
  background-color: #f8f9fa;
  color: #2a2a2a;
  border: 1px solid #dadde3;
  overflow-y: auto;
  height: 212px;
}
</style>

<template>
  <CdxButton
    class="share-button"
    size="large"
    aria-label="Share design"
    @click="isDialogOpen = true"
    ><ShareIcon></ShareIcon>
  </CdxButton>

  <CdxDialog
    class="link-dialog"
    v-model:open="isDialogOpen"
    title="Shareable link"
    subtitle="Anyone with this link can view and load your design."
    :use-close-button="true">
    <CdxField
      status="default"
      :label-icon="cdxIconLink">
      <div class="link-input-wrapper">
        <CdxTextInput
          class="link-input"
          v-model="inputValue"
          :disabled="true" />
        <CdxButton
          action="progressive"
          weight="primary"
          class="copy-btn"
          ><CopyIcon></CopyIcon>Copy link</CdxButton
        >
      </div>

      <template #label> Link </template>
      <template #help-text> Make sure not to share sensitive information in your design. </template>
    </CdxField>
  </CdxDialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { CdxButton, CdxDialog, CdxField, CdxTextInput } from '@wikimedia/codex';
import { cdxIconLink } from '@wikimedia/codex-icons';
import ShareIcon from '../icons/ShareIcon.vue';
import CopyIcon from '../icons/CopyIcon.vue';

const isDialogOpen = ref(false);
const inputValue = ref('https://w.wiki/EVbT');
</script>

<style lang="less" scoped>
@import (reference) '@wikimedia/codex-design-tokens/theme-wikimedia-ui.less';

.share-button {
  border: none;
  background: none;
}

.link-input-wrapper {
  display: flex;
}

.link-input {
  width: 100%;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

::v-deep(.cdx-text-input__input:disabled) {
  color: #202122;
  opacity: 1;
  -webkit-text-fill-color: unset;
  cursor: default;
}

::v-deep(.cdx-field__help-text) {
  font-size: @font-size-small;
}

.copy-btn {
  flex: none;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
</style>

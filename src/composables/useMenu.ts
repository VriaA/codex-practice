import { ref, useId, computed } from 'vue';
import type { Ref, ComputedRef } from 'vue';

type MenuElement = {
  getHighlightedMenuItem: () => { id: string } | null;
};

type UseMenuValues = {
  button: Ref<HTMLElement | null>;
  menu: Ref<MenuElement | null>;
  selectedValue: Ref<string>;
  expanded: Ref<boolean>;
  menuId: string;
  onClick: () => void;
  activeDescendant: ComputedRef<string | undefined>;
};

export default function useMenu(): UseMenuValues {
  const button = ref<HTMLElement | null>(null);
  const menu = ref<MenuElement | null>(null);
  const selectedValue = ref<string>('');
  const expanded = ref<boolean>(false);
  const menuId = useId();

  function onClick(): void {
    expanded.value = !expanded.value;
  }

  const activeDescendant: ComputedRef<string | undefined> = computed(() => {
    const highlightedItem = menu.value?.getHighlightedMenuItem();
    return highlightedItem ? highlightedItem.id : undefined;
  });

  return {
    button,
    menu,
    selectedValue,
    expanded,
    menuId,
    onClick,
    activeDescendant,
  };
}

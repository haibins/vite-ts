<template>
  <div class="tree-node" :style="style">
    <div :class="[isEmptyChildren ? 'tree-switcher-close' : isExpanded ? 'tree-switcher-open' : '']">
      <div class="tree-switcher" @click="handleExpanded(id)"></div>
    </div>
    <div>{{ title }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';


interface TreeNodeType {
  id: string;
  title: string;
  level: number;
  isExpanded: boolean;
  isEmptyChildren: boolean;
  handleExpanded: (key: string) => void;
}

const props = defineProps<TreeNodeType>()

const style = computed(() => {
  return {
    marginLeft: `${(props.level - 1) * 18}px`
  }
});

</script>

<style scoped>

</style>
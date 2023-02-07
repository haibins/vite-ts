<template>
  <div class="container">
    <Tree :expandedKeys="expandedKeys" :treeMap="treeMap" :treeData="treeData" :changeKeys="changeKeys" />
  </div>
</template>

<script setup lang="ts">
import Tree from './tree.vue'
import { computed } from 'vue';
import { treeToMap, treeDataType } from '@/libs/utils'


type expandedKeysType = string[];



interface TreeTypes {
  expandedKeys: expandedKeysType;
  treeData: treeDataType;
  changeKeys: (keys: string[]) => void;
}

const props = defineProps<TreeTypes>()


const treeMap = computed(() => {
  return treeToMap(props.treeData)
})
</script>

<style lang="scss">
.container {
  padding: 30px;
}

/* height:30px */
.tree-node {
  height: 30px;
  display: flex;
  align-items: center;

  .tree-switcher {
    cursor: pointer;
    margin: 0 8px 0 0;
    width: 14px;
    height: 14px;
    border: 1px solid #bfc3c7;
    border-radius: 2px;
    position: relative;

    &::before {
      position: absolute;
      content: '';
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 10px;
      border-top: 2px solid #bfc3c7;
      border-radius: 1px;
    }

    &::after {
      position: absolute;
      content: '';
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      height: 10px;
      border-left: 2px solid #bfc3c7;
      border-radius: 1px;
    }
  }
}

.tree-switcher-open .tree-switcher::after {
  visibility: hidden;
}

.tree-switcher-close .tree-switcher {
  visibility: hidden;
}

.tree-switcher-close .tree-switcher::after,
.tree-switcher-close .tree-switcher::before {
  visibility: hidden;
}
</style>
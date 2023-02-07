<template>
  <div>
    <div key={key} v-for="treeItem in treeData">
      <TreeNode :title="treeItem.title" :id="treeItem.key" :level="treeMap[treeItem.key].level"
        :isEmptyChildren="!treeItem.children?.length" :isExpanded="expandedKeys.includes(treeItem.key)"
        :handleExpanded="handleExpanded" />
      <Tree v-if="treeItem.children?.length && expandedKeys.includes(treeItem.key)" :expandedKeys="expandedKeys"
        :treeData="treeItem.children" :changeKeys="changeKeys" :treeMap="treeMap"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import Tree from './tree.vue'
import TreeNode from './treeNode.vue'
import { treeDataType, mapData } from '@/libs/utils'

type expandedKeysType = string[];



interface TreeTypes {
  expandedKeys: expandedKeysType;
  treeData: treeDataType;
  changeKeys: (keys: string[]) => void;
  treeMap: mapData
}

const props = defineProps<TreeTypes>()


const handleExpanded = (key: string) => {
  const newExpandedKeys = [...props.expandedKeys];
  const index = newExpandedKeys?.indexOf(key);
  index > -1 ? newExpandedKeys.splice(index, 1) : newExpandedKeys.push(key);

  props.changeKeys(newExpandedKeys)

}
</script>


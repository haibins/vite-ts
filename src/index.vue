<template>
  <div class="container">
    <a-button type="primary" :onclick="successToast">Primary Button</a-button>
    <a-button type="primary" danger :onclick="errorToast">Primary</a-button>
    <Tree :treeData="treeData" :expandedKeys="expandedKeys" :changeKeys="changeKeys" />
  </div>
</template>

<script setup lang="ts">
import Tree from './components/tree/index.vue'
import Notice from './components/toast/index'
import { reactive, ref } from 'vue'


const treeData = reactive([
  {
    title: "我是1",
    key: "1",
    children: [
      {
        title: "我是1-1",
        key: "1-1",
        children: [
          {
            title: "我是1-1-1",
            key: "1-1-1"
          },
          {
            title: "我是1-1-2",
            key: "1-1-2"
          },
          {
            title: "我是1-1-3",
            key: "1-1-3"
          }
        ]
      },
      {
        title: "我是1-2",
        key: "1-2",
        children: [
          {
            title: "我是1-2-1",
            key: "1-2-1"
          },
          {
            title: "我是1-2-2",
            key: "1-2-2"
          }
        ]
      }
    ]
  },
  { title: "我是2", key: "2", children: [] }
])

const expandedKeys = ref<string[]>([])
const changeKeys = (keys: string[]) => {
  expandedKeys.value = keys
}

const vm = getCurrentInstance();
const successToast = () => {
  Notice.success({
    content: 'tessss',
    onClose: () => {
      console.log('close')
    }
  })
}
const errorToast = () => {
  Notice.error({
    content: '司法局hi阿斯蒂芬技术打法鸡',
    onClose: () => {
      console.log('close')
    }
  })
}

</script>

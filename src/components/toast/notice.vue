<template>
    <div class="notice">
      <component :is="coms[type][0]" :style="coms[type][1]"></component>
      <span class="noticeContent">{{ content }}</span>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  content: string;
  type: 'success' | 'error';
}

const props = defineProps<Props>()

const coms = {
  success: [CheckCircleOutlined, {
    color: '#52c41a'
  }],
  error: [CloseCircleOutlined, {
    color: '#e4393c'
  }]
}

onBeforeUnmount(() => {
  console.timeEnd()
})

onMounted(() => {
  console.time()
})
</script>



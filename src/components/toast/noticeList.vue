<template>
  <TransitionGroup name="list" tag="ul" class="notice-list" type="transition">
    <Notice v-for="nt in noticeLists" :key="nt.key" :content="nt.content" :type="nt.type" />
  </TransitionGroup>
</template>

<script setup lang="ts">
import Notice from './notice.vue'
import { UUID } from '@/libs/utils'

interface NoticeItem {
  type: 'success' | 'error';
  key: string;
  content: string;
  duration: number;
  onClose?: () => void
}

const noticeLists = ref<NoticeItem[]>([])


const removeNotice = (key: string) => {
  noticeLists.value = noticeLists.value.filter((notice) => {
    // 根据key删除对应的notice，同时处理callback
    if (notice.key === key) {
      if (notice.onClose) {
        notice.onClose();
      }
      return false;
    }
    return true;
  })
};

const addNotice = (notice: NoticeItem) => {
  const notices = noticeLists.value;
  // 设置独一无二的key
  notice.key = UUID();
  notices.push(notice);
  // 设置消失的定时器
  if (notice.duration > 0) {
    setTimeout(() => {
      removeNotice(notice.key);
    }, notice.duration);
  }
};

defineExpose({
  addNotice
})
</script>



<style lang="scss">
@charset "UTF-8";




.notice-list {
  position: fixed;
  left: 50%;
  top: 40px;
  width: 40%;
  height: 300px;
  transform: translate3D(-50%, 0, 0);
  z-index: 100;
  padding: 0;

  .notice {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    // position: relative;
    box-sizing: border-box;
    // left: 50%;
    // top: 30%;
    margin-bottom: 15px;
    padding: 10px;
    background-color: #fff;
    border-radius: 3px;
    text-align: center;
    font-size: 12px;
    color: black;
    z-index: 1000;
    box-shadow: 0 0 2px #ddd;
    // transform: translate3D(-50%, -50%, 0);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;


    .noticeContent {
      margin-left: 5px;
    }
  }

  .list-move,
  /* 对移动中的元素应用的过渡 */
  .list-enter-active,
  .list-leave-active {
    transition: all 0.5s ease;
  }

  .list-enter-from {
    opacity: 0;
    transform: translateY(30px);
  }

  .list-leave-to {
    opacity: 0;
    transform: translateY(-30px);
  }

  /* 确保将离开的元素从布局流中删除
  以便能够正确地计算移动的动画。 */
  .list-leave-active {
    position: absolute;
  }
}
</style>
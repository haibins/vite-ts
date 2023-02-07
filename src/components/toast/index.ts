import { createApp } from "vue";

import Notice from "./noticeList.vue";

const defaultDuration = 3000;
let noticeListInstance: any;

interface IOptions {
  content: string;
  type?: "success" | "error";
  duration?: number;
  onClose: () => void;
}

const toast = (options: IOptions) => {
  const { type, content, duration = defaultDuration, onClose } = options;
  // 保证单例，只创建一个noticeList实例
  if (!noticeListInstance) {
    // 创建全局toast容器
    const mountNode = document.createElement("div");
    //将options参数传入，并将Notice组件转换成虚拟DOM，并赋值给app
    const app = createApp(Notice, {
      ...options,
      duration,
    });
    //render函数的作用就是将Notice组件的虚拟DOM转换成真实DOM并插入到mountNode元素里
    console.log(app.config)
    noticeListInstance = app.mount(mountNode);
    //然后把转换成真实DOM的Notice组件插入到body里
    document.body.appendChild(mountNode);
  }
  console.log(noticeListInstance);
  // 本质上就是给noticeList不停的加通知
  noticeListInstance.addNotice({
    type,
    content,
    duration,
    onClose,
  });
};

export default {
  success(options: Omit<IOptions, "type">) {
    return toast({
      ...options,
      type: "success",
    });
  },
  error(options: Omit<IOptions, "type">) {
    return toast({
      ...options,
      type: "error",
    });
  },
};

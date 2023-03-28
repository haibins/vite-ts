import { createApp } from 'vue';

// 从一个单文件组件中导入根组件
import App from './app.vue';
import store from './store';
import router from './router';

const app = createApp(App);

// 挂载插件
app.use(store);
app.use(router);

app.mount('#app');

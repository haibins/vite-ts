import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import VuePlugin from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
import path from "path";

export default defineConfig({
  plugins: [
    VuePlugin(),
    vueJsx(),
    checker({
      typescript: true,
    }),
    Components({
      resolvers: [AntDesignVueResolver({ resolveIcons: true })],
    }),
    AutoImport({
      imports: [
        // presets
        "vue",
        "vue-router",
        // custom
        {
          "@vueuse/core": [
            // named imports
            "useMouse", // import { useMouse } from '@vueuse/core',
            // alias
            ["useFetch", "useMyFetch"], // import { useFetch as useMyFetch } from '@vueuse/core',
          ],
          axios: [
            // default imports
            ["default", "axios"], // import { default as axios } from 'axios',
          ],
          "@ant-design/icons-vue": [
            "CheckCircleOutlined",
            // alias
            "CloseCircleOutlined",
          ],
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});

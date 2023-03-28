import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import VuePlugin from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import {
    createStyleImportPlugin,
    AndDesignVueResolve,
} from 'vite-plugin-style-import';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import * as path from 'path';

export default defineConfig({
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
            },
        },
    },
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
            imports: ['vue'],
            resolvers: [AntDesignVueResolver({ resolveIcons: true })],
        }),
        createStyleImportPlugin({
            resolves: [AndDesignVueResolve()],
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
});

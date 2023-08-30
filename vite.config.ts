import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import WindiCSS from "vite-plugin-windicss";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import {ElementPlusResolver} from "unplugin-vue-components/resolvers";

import path from "path"; //这个path用到了上面安装的@types/node
export default defineConfig({
	plugins: [
		vue(),
		WindiCSS(),
		AutoImport({
			resolvers: [ElementPlusResolver()],
		}),
		Components({
			resolvers: [ElementPlusResolver()],
		}),
	],
	//这里进行配置别名
	resolve: {
		alias: {
			"@": path.resolve("./src"), // @代替src
		},
	},
	css: {
		preprocessorOptions: {
			less: {
				modifyVars: {
					hack: `true; @import (reference) "${path.resolve("src/assets/css/base.less")}";`,
				},
				javascriptEnabled: true,
			},
		},
	},
	// 本地反向代理解决浏览器跨域限制
	server: {
		host: "localhost",
		port: 3000,
		open: false, // 启动是否自动打开浏览器
		proxy: {
			["/api"]: {
				target: "http://真实地址", //
				changeOrigin: true,
				// log: 'debug',
				rewrite: (path) => {
					return path.replace(new RegExp("^" + "/api"), "");
				},
			},
		},
	},
});

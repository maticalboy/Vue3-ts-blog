/*
 * @Author: chenjinwei cjwhongchen@163.com
 * @Date: 2023-06-13 08:06:58
 * @LastEditors: chenjinwei cjwhongchen@163.com
 * @LastEditTime: 2023-08-17 14:57:36
 * @FilePath: \vue3-demo\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {createApp} from "vue";
import {createPinia} from "pinia";
import piniaPersist from "pinia-plugin-persist";
import "virtual:windi.css";


import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css';
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import App from "./App.vue";
import router from "@/router";

import "./style.css";

const app = createApp(App);
const pinia = createPinia();
// @vue/runtime-core
declare module "@vue/runtime-core" {
	interface ComponentCustomProperties {
		$globalNum2: number;
	}
}
pinia.use(piniaPersist);

// 全局注册el-icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(router);
app.use(pinia);
app.use(ElementPlus,{locale: zhCn,});
app.mount("#app");

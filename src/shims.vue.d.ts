/*
 * @Author: chenjinwei cjwhongchen@163.com
 * @Date: 2023-08-17 14:49:45
 * @LastEditors: chenjinwei cjwhongchen@163.com
 * @LastEditTime: 2023-08-17 14:51:47
 * @FilePath: \vue3-demo\src\types\shims.vue.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
declare module "*.vue" {
	import { defineComponent } from "vue";
	const component: ReturnType<typeof defineComponent>;
	export default component;
}

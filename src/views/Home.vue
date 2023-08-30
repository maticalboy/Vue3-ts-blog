<!--
 * @Author: chenjinwei cjwhongchen@163.com
 * @Date: 2023-06-13 16:18:36
 * @LastEditors: chenjinwei cjwhongchen@163.com
 * @LastEditTime: 2023-08-17 14:57:53
 * @FilePath: \vue3-demo\src\views\Home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import {storeToRefs} from "pinia";
import {demoStore} from "@/store/test";

defineProps({
	msg: String,
});

const store = demoStore();

const {count} = storeToRefs(store);

function plus() {
	store.$patch({
		count: store.count + 1,
	});
}

function m1() {
	console.log(import.meta.env);
}
m1();
</script>

<template>
	<div class="container">
		<p>
			Recommended IDE setup:
			<a
				href="https://code.visualstudio.com/"
				target="_blank"
				>VS Code</a
			>
			+
			<a
				href="https://github.com/johnsoncodehk/volar"
				target="_blank"
				>Volar</a
			>
		</p>

		<p>
			<a
				href="https://vitejs.dev/guide/features.html"
				target="_blank"
			>
				Vite Documentation
			</a>
			|
			<a
				href="https://v3.vuejs.org/"
				target="_blank"
				>Vue 3 Documentation</a
			>
		</p>

		<button
			type="button"
			@click="plus()"
		>
			count is: {{ count }}
		</button>
		<p>
			<el-icon
				:size="16"
			>
				<Edit />
			</el-icon>
			<code>components/HelloWorld.vue</code> to test hot module replacement.
		</p>
	</div>
</template>

<style lang="less" scoped>
.container {
	background-color: aqua;
	height: 100px;
}
</style>

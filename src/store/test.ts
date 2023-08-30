import {defineStore} from "pinia";

export const demoStore = defineStore("demo", {
	state: () => {
		return {
			count: 100,
		};
	},
	getters: {
		//state与getters中的Key不能冲突，否则会读取失败
		getCount: (state) => state.count,
	},
	actions: {
		plus() {
			this.count++;
		},
	},
	persist: {
		enabled: true,
	},
});

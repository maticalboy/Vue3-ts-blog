import {createRouter, createWebHistory} from "vue-router";
const routes = [
	{
		path: "/",
		redirect: "/home",
	},
	{
		path: "/home",
		name: "Home",
		component: () => import("../views/Home.vue"),
		meta: {
			title: "主页",
		},
	},
];

const router = createRouter({
	history: createWebHistory("/base-directory/"),
	routes,
});

export default router;

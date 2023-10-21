// 该文件专门用于创建整个应用的路由器
//import Vue from 'vue';
import Router from 'vue-router';
//引入相关页面

// 这个没有进行路由守卫的设定，
//vue引入路由插件
// Vue.use(Router);
// 这里这个形式，是不是说郑敬宇使用了多级录路由呢
export default new Router({
	// mode: 'history',     //用来消除路径中的#/
	routes: [            //路由数组，其中每个对象都是一个页面信息
		{
			path: '/',       //虚拟路径path，也就是浏览器中的路径
			title: '项目',
			// 奇怪的组件引入方式
			component:() => import('../components/PortalIndex.vue'),
			children:[
				{
					// 子路由不加斜杠   这里同时使用了命名路由的功能
					name: "AllNews",
					path: "AllNews",
					component: () => import("../views/AllNews.vue"),
				},
				{
					// 子路由不加斜杠   这里同时使用了命名路由的功能
					name: "CompanySearch",
					path: "CompanySearch",
					component: () => import("../views/CompanySearch.vue"),
				},
				{
					// 子路由不加斜杠   这里同时使用了命名路由的功能
					name: "PointNews",
					path: "PointNews",
					component: () => import("../views/PointNews"),
				},
				{
					// 子路由不加斜杠   这里同时使用了命名路由的功能
					name: "CollectionNews",
					path: "CollectionNews",
					component: () => import("../views/CollectionNews.vue"),
				},
				{
					// 子路由不加斜杠   这里同时使用了命名路由的功能
					name: "History",
					path: "History",
					component: () => import("../views/History.vue"),
				},
				{
					// 子路由不加斜杠   这里同时使用了命名路由的功能
					name: "TextSummary",
					path: "TextSummary",
					component: () => import("../views/TextSummary.vue"),
				},
				{
					// 子路由不加斜杠   这里同时使用了命名路由的功能
					name: "index",
					path: "index",
					component: () => import("../views/Index.vue"),
				},

			]
		},
	]
});

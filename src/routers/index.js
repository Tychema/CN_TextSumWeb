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
					name: "Index",
					path: "Index",
					component: () => import("../views/index/Index.vue"),
				},
				{
					name: "SurveyQuadrat",
					path: "SurveyQuadrat",
					component: () => import("../views/survey/SurveyQuadrat.vue"),
					children:[
						{
							name: "SurveyQuadratOne",
							path: "SurveyQuadratOne",
							component: () => import("../views/survey/SurveyQuadratOne.vue"),
						},
						{
							name: "SurveyQuadratTwo",
							path: "SurveyQuadratTwo",
							component: () => import("../views/survey/SurveyQuadratTwo.vue"),
						},
					]
				},
				{
					name: "EcoSystem",
					path: "EcoSystem",
					component: () => import("../views/ecosystem/EcoSystem.vue"),
					children:[
						{
							name: "EcoSystemOne",
							path: "EcoSystemOne",
							component: () => import("../views/ecosystem/EcoSystemOne.vue"),
						},
						{
							name: "EcoSystemTwo",
							path: "EcoSystemTwo",
							component: () => import("../views/ecosystem/EcoSystemTwo.vue"),
						},
					]
				},
				{
					name: "QuillEditor",
					path: "QuillEditor",
					component: () => import("../views/quill/QuillEditor.vue"),
				},
				{
					name: "Vegetation",
					path: "Vegetation",
					component: () => import("../views/vegetation/Vegetation.vue"),
				},
				{
					name: "Specimen",
					path: "Specimen",
					component: () => import("../views/specimen/Specimen.vue"),
				},
				{
					name: "PictureBank",
					path: "PictureBank",
					component: () => import("../views/picture/PictureBank.vue"),
					children:[
						{
							name: "PictureBankOne",
							path: "PictureBankOne",
							component: () => import("../views/picture/PictureBankOne.vue"),
						},
						{
							name: "PictureBankTwo",
							path: "PictureBankTwo",
							component: () => import("../views/picture/PictureBankTwo.vue"),
						},
					]
				},
				{
					name: "SoilBank",
					path: "SoilBank",
					component: () => import("../views/soil/SoilBank.vue"),
					children:[
						{
							name: "SoilBankOne",
							path: "SoilBankOne",
							component: () => import("../views/soil/SoilBankOne.vue"),
						},
						{
							name: "SoilBankTwo",
							path: "SoilBankTwo",
							component: () => import("../views/soil/SoilBankTwo.vue"),
						},
					]
				},
			]
		},
	]
});

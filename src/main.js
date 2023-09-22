import Vue from 'vue'
import App from './App.vue'
// 郑敬宇实际上是全部引入了啊  这个是需要按需引入的，不过现在用不到，等发布的时候再说
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import VueRouter from 'vue-router'
import router from "./routers/index.js";
import BaiduMap from 'vue-baidu-map'
// import BaiduMap from 'vue-baidu-map/components/map/Map.vue'

Vue.use(BaiduMap, {
	// http://api.map.baidu.com/api?v=2.0&ak=
  ak: 'S1XUGn8TWR5gDHscQ0apzfq6dEH6pAdX'
})

// 防止index报错
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

Vue.prototype.$http = axios
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 标准路由器引入
  router,
}).$mount('#app')

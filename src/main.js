import Vue from 'vue'
//引入layout布局组件
import Layout from './components/layout'
//通过 npm install vue-router --save 安装vue-router前端路由
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import IndexPage from './pages/index'
import DetailPage from './pages/detail'
import OrderListPage from './pages/orderList'
import DetailAnaPage from './pages/detail/analysis'
import DetailCouPage from './pages/detail/count'
import DetailForPage from './pages/detail/forecast'
import DetailPubPage from './pages/detail/publish'
//使用Vue.use全局插件注册使用VueRouter
Vue.use(VueRouter)

Vue.use(VueResource)

//VueRouter引入进来以后就是一个全局的类，在使用路由的时候就是实例化这个类
let router = new VueRouter({
	//模式使用H5的history
	mode: 'history',
	//route的map
	routes: [
		{
			//根目录使用IndexPage
			path: '/',
			component: IndexPage
		},
		{
			path: '/orderList',
			component: OrderListPage
		},
		{
			path: '/detail',
			component: DetailPage,
			redirect: '/detail/analysis',
			children: [
				{
					path: 'analysis',
					component: DetailAnaPage
				},
				{
					path: 'count',
					component: DetailCouPage
				},
				{
					path: 'forecast',
					component: DetailForPage
				},
				{
					path: 'publish',
					component: DetailPubPage
				}
			]
		}
	]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  //放到根节点的实例化对象里面
  router,
  //渲染到最外层
  template: '<Layout/>',
  //引入根组件也是Layout
  components: { Layout }
})

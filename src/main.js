// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
//h5字体自适应
import 'amfe-flexible'
// 图标字体
import '@/assets/font-icon/style.css'

// 提示组件
import Msg from 'vue-message'

// 通用js组件  来自 d-js-utils
import Dutils from 'd-js-utils'
// 项目内的通用组件挂在  来自 utils/index.js
import Mutils from '@/utils'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import filters from '@/filter'

// 引入指令
import '@/directive/imgsize'

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper)

Vue.use(Msg, {
  text: 'Hello world', duration: 3000, background: 'rgba(7,8,9,0.8)'
})

// 挂载
Vue.prototype.$dutils = Dutils
Vue.prototype.$mutils = Mutils

//登录拦截
router.beforeEach((to, from, next) => {
	if(to.path.indexOf('/login') < 0){
		let isLogin = sessionStorage.getItem('isLogin')
		if(isLogin == null || isLogin === ''){
			//vueProject.$msg('请登录')
			next({path: '/login'})
		}else{
			next()
		}
	}else{
		next();
	}
})

/* eslint-disable no-new */
// 准备实例化
let vueProject = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

// 注册filter
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

export {vueProject}

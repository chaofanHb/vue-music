import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

// 登陆模块
import Login from '@/views/login'
import LoginSub from '@/views/login/sublogin'

import Main from '@/views/Main.vue'

import Search from '@/views/find/search'
import Play from '@/views/find/play'

// 首页五大类
import Find from '@/views/find'

// Find
import Recommend from '@/views/find/recommend'
//歌单详情
import SheetDetail from '@/views/find/sheet/sheet-detail'

Vue.use(Router)

export default new Router({
  routes: [
/*    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },*/
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/main',
      name: 'home',
      redirect: '/main/find',
      component: Main,
      children: [
          // 搜索页面
          {
            path: '/main/search',
            name: 'search',
            component: Search,
            meta: {
              transition: 'fade-top',
              activeRouter: ['/main/find'],
              hideFixedMenu: true,
              keepAlive: true
            }
          },
          {
          path: '/main/find',
          name: 'find',
          redirect: '/main/find/recommend',
          component: Find,
          meta: {
            keepAlive: true
          },
          // 推荐
          children: [
            {
              path: '/main/find/recommend',
              name: 'findrecommend',
              component: Recommend,
              meta: {
                keepAlive: true
              }
            }
          ]
        },
        // 歌单详情
        {
          path: '/main/listdetail',
          name: 'listdetail',
          component: SheetDetail,
          meta: {
            transition: 'fade-left',
            activeRouter: ['/main/find']
          }
        },

        // 播放页面
        {
          path: '/main/play',
          name: 'play',
          component: Play,
          meta: {
            transition: 'fade-left',
            isFull: true
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      children: [
        {
          path: '/login/:type',
          name: 'loginsub',
          component: LoginSub
        }
      ]
    }
  ]
})

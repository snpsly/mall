import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'

    },
    {
      path: '/index',
      name: 'index',
      component: () => import('@/views/home/index')
    }, {
      path: '/fl',
      name: 'fl',
      component: () => import('@/views/Classification/classification')
    }, {
      path: '/shop',
      name: 'shop',
      component: () => import('@/views/shoppingcart/shoppingcart')
    }, {
      path: '/profilt',
      name: 'profilt',
      component: () => import('@/views/me/profilt')
    }, {
      path: '/detail/:iid',
      name: 'profilt',
      component: () => import('@/views/detail/detail')
    },
  ],
  mode: 'history'
})

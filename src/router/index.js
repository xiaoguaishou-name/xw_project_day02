import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
export default new VueRouter({

  routes: [
    {
      path: '/addcartsuccess',
      component: AddCartSuccess
    },
    {
      path: '/detail/:goodsId',
      component: Detail
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/login',
      component: Login,
      meta: {
        isHide: true
      }
    },
    {
      path: '/register',
      component: Register,
      meta: {
        isHide: true
      }
    },
    {
      path: '/search/:keyword?',
      component: Search,
      name: 'search',
      // props: route => ({
      //   keyword: route.params.keyword,
      //   keyword1: route.query.keyword1
      // })
    },
    {
      path: '/',
      redirect: '/home'
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})

// //终极解决多次触发push或replace报错的问题
const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace
VueRouter.prototype.push = function (location, onResolved, onRejected) {
  if (onResolved === undefined && onRejected === undefined) {
    return originPush.call(this, location).catch(err => err)
  } else {
    return originPush.call(this, location, onRejected, onResolved)
  }
}
VueRouter.prototype.replace = function (location, onResolved, onRejected) {
  if (onResolved === undefined && onRejected === undefined) {
    return originReplace.call(this, location).catch(err => err)
  } else {
    return originReplace.call(this, location, onRejected, onResolved)
  }
}


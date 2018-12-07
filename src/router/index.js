import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/home'
import Mine from '@/components/Mine/mine'
import Find from '@/components/Find/find'
import Buycar from '@/components/Buycar/buycar'
import City from '@/components/City/city'



Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      redirect:{name:"Home"}
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/find',
      name: 'Find',
      component: Find
    },
    {
      path: '/buycar',
      name: 'Buycar',
      component: Buycar
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/city',
      name: 'City',
      component: City
    }
  ]
})

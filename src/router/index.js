import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Newgame from '@/pages/Newgame'
import GameDetails from '@/pages/GameDetails'
import Ero404 from '@/pages/404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'home',
      component: Home,
      meta:{
        title:'6kw游戏盒子-首页',
      }
    },
    {
      path: '/newgame',
      name: 'Newgame',
      component: Newgame,
      meta:{
        title:'6kw游戏盒子-新游推荐',
      }
    },
    {
      path: '/GameDetails/:id',
      name: 'GameDetails',
      component: GameDetails,
      meta:{
        title:'6kw游戏盒子-游戏详情',
      }
    },
    {
      path:'/404',
      name:'Ero404',
      component: Ero404, 
      meta:{
        title:'6kw游戏盒子-404',
      } 
    },
    { path:"*",redirect:'/404'}  
  ],
  // mode:"history",
})

import Vue from 'vue'

import 'swiper/dist/css/swiper.min.css'
import '../static/css/style.css'

import App from './App'
import axios from 'axios'
import router from './router'
import VueAxios from 'vue-axios'

import './mock'
import 'babel-polyfill'
// import Toast from './test.js'
// Vue.use(Toast)

Vue.config.productionTip = false
Vue.use(VueAxios,axios)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
})

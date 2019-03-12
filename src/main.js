import Vue from 'vue'
import '../static/css/style.css'

import App from './App'
import axios from 'axios'
import router from './router'
import VueAxios from 'vue-axios'

import './mock'
import 'babel-polyfill'

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
});

// router.prototype.goBack = function () { 
// 　　this.isBack = true
// 　　window.history.go(-1)
// }

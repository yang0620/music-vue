import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import VueLazyLoad from 'vue-lazyload'
import fastclick from 'fastclick'
import 'common/stylus/index.styl'
import router from './router'
import store from './store'

Vue.config.productionTip = false

fastclick.attach(document.body)

// 注册vue-lazyload
Vue.use(VueLazyLoad, {
  loading: require('common/image/default.png')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

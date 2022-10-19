// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',//将当前vue组件生成的实例插入到页面的这个元素（id :app,这里使用了css当中的选择器）当中
  router,
  template: '<App/>',
  //vue使用template来创建html
  components: { App }
})

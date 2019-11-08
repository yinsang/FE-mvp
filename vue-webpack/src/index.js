import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Index from './Index.vue'
import Bar from './Bar.vue'
const routes = [
  { path: '/', name: 'index',component: Index, meta:{
    keepAlive:true
  } },
  { path: '/bar', name: 'bar',component: Bar , meta:{
    keepAlive:true
  } }
]
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})
import App from './app.vue'
new Vue({
  el:'#app',
  router,
  render : h => h(App)
})
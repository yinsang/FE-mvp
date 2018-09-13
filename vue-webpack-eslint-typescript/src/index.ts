import Vue from 'vue'
// ts-ignore
// import App from './App.vue'

import { default as App } from './App.vue';
import store from './vuex'
new Vue({
  el:'#app',
  store,
  render:(h:Function)=>h(App)
})
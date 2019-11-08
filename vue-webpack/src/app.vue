<template>
<keep-alive v-if="$route.meta.keepAlive">
  <router-view />
</keep-alive>
<router-view v-else />
</template>
<script>
import Vue from 'vue'
const aaa = '++++'
console.log( aaa);
export default {
  name:'App',
  created(){
    this.aaa = '----'
    console.log( this.aaa);
  }
}
</script>
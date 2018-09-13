<template>
  <div class="container">
      <div class="ab absolute1"></div>
      <div class="ab absolute2"></div>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  name: 'cpui-demo'
}
</script>
<style lang="less">
    .container{
        position: relative;
        color:blue;
    }
    .ab{
        position:absolute;
        width: 100px;
        height:100px;
        top:0;
        left:0;
    }
    .absolute1{
        left:60px;
        background: red;
        z-index: 1;
    }
    .absolute2{
        background: yellow;
        z-index: 9;
    }
</style>

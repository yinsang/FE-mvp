<template>
<div>
    app.vue
    <hello-world :msg="msg"></hello-world>
</div>
</template>
<script>
import helloWorld from './hello-world.vue'
export default {
  name: 'cpui-demo',
  data () {
    return {
      msg: '123'
    }
  },
  components: { helloWorld }
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

<template>
<div>
  refB:<h1 ref="refB">beautiful value</h1>
  <h2>this is a: {{a}}</h2>
  <h3>refB's value: {{bMsg}}</h3>
   computed: {{c}}
  <input type="button" value="changeB" @click="getB">
</div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
@Component
  export default  class Hello extends Vue {
    @Prop(String) a!: string;
    bMsg=''
    @Watch('bMsg')
    bChanged(v:string){
      console.log(v)
    }
    mounted():void{
      this['bMsg'] = (this.$refs['refB'] as HTMLElement).innerText
    }
    get c():string{
        return this.bMsg + ' is computed to c'
      }
    getB(){
        this.bMsg = 'changedB'
      }
  };
</script>


<template>
  <div>
    <div>
      <ul v-if="readonlyFactors" >
        <li v-for="(factor, i) in readonlyFactors"
        class="form-item-readonly"
        :readonly="true"
        :key="i"
        :label="factor.factor_display.factor_name"
        :value="factor.factor_value">
          {{factor.factor_value}}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>

import Vue from 'vue'
import setPageData from './setPageData'
export default {
  name:'Bar',
  data(){
    return {
      pageData:{}
    }
  },
  computed:{
    readonlyFactors(){
      const result = [];
      console.log(this.pageData.length);
      if(Object.keys(this.pageData).length === 0){
        return ''
      }
      this.pageData.factors.forEach((factorGroup) => {
        factorGroup.forEach((factor) => {
          if (factor.factor_readonly && !factor.disable_split) {
            result.push(factor);
          }
        });
      });
      return result;
    }
  },
  activated(){
    setPageData(this)
  }
}
</script>
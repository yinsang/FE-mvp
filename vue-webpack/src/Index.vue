<template>
  <div @click="handleClick">to Bar</div>
</template>
<script>
import Vue from 'vue'
export default {
  name:'index',
  methods:{
    handleClick(){
      this.$router.push({
          name: 'bar',
          params: {
            pageData: '{"page_name":"regist","page_title":"验证银行卡信息","factors":[[{"factor_type":1,"factor_key":"bank_name","factor_value":"浦发银行信用卡","factor_readonly":true,"factor_display":{"factor_name":"银行卡","factor_tip":""}},{"factor_type":1,"factor_key":"bankcard_no","factor_value":"4984511142864824","factor_readonly":true,"factor_display":{"factor_name":"卡 号","factor_tip":"请输入银行卡号"},"factor_hide":false},{"factor_type":1,"factor_key":"user_cellphone","factor_value":"","factor_readonly":false,"factor_display":{"factor_name":"手机号","factor_tip":"银行预留手机号","factor_help":{"help_title":"手机号","help_text":"银行预留手机号是在银行办卡时填写的手机号，若遗忘、换号可联系银行客服电话处理","help_img":""},"factor_value_sug":[{"sug_text":"上次使用的预留号码","sug_value":"17737781102"},{"sug_text":"1上次使用的预留号码","sug_value":"21737781102"}]},"factor_hide":false}]],"button_text":"同意协议并验证","submit_url":"/qdbsign/signbankcard","is_binded":false,"agreements":[{"agreement_name":"《用户协议》","agreement_url":"https://mpay.meituan.com/resource/ptp/pages/agreement-list.html?nb_platform=touch&nb_version=5.1.0&nb_uuid=CBD2EC109D560F2F8532036938AC319FA591BAD63E13EC37A89CACCA832A9768&nb_app=wap&tradeno=1971154079031545210620&paytype=227&userid=197115407&is_hello_payorder=2&token=T6djnuWugZglIU170R_zdWZHUDwAAAAAtwYAAKPD4RAO6D9TUpWgRZdKaycsCkrZ4hD3WssIQDjI4AVe0GZeYK3cvghXY9uZk-048g"}],"agreements_prefix":"查看","need_encrypt":true,"attach_params":"{\"id\":\"1971154079031545210620\",\"paytype\":227,\"bankcard\":0,\"banktype\":34,\"userid\":197115407,\"partnerid\":\"2015110400000001\",\"is_bindpay\":false,\"outno\":\"1971154079031545210620\",\"ordertime\":1545210620,\"orderip\":null,\"outmoney\":0,\"objid\":\"1971154071211545207452\",\"sign\":\"9870bf009b3507e634a3ef93b31f32d2\"}","account_insurance":{"icon":"https://img.meituan.net/financefacepay/48fee2c44a24e057319a3b1eef3e04a23812.png","text":"账户安全险保障中"},"outer_params":{"tradeno":"1971154079031545210620","trans_id":"1971154071211545207452"}}'
          }
        });
    }
  }
}
</script>
<template>
<div>
    <hello :a="a"></hello>
    <vix-button>11</vix-button>
</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Button } from '@mx/vix'
import Hello from './Hello.vue'
@Component({ components: { Hello, VixButton: Button } })
export default class App extends Vue {
  a:string='this is a msg.'
  sss () {
    window.name = '3'
    const a = window.name + 3
    console.log(a)
  }
}
</script>

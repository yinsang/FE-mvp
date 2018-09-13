<template>
<div>
    <hello :a="a"></hello>
</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Hello from './Hello.vue'
@Component({ components: { Hello } })
export default class App extends Vue {
  a:string='this is a msg.'
}
</script>

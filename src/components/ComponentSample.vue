<template>
  <div>
    <h1>Component Sample</h1>
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ComponentSample extends Vue {
  @Prop() someProp: string = '';
  sampleMethod() {
    
    this.$someGlobal = '';
  }
}
</script>

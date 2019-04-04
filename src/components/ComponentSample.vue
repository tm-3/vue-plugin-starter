<template>
  <div>
    <h1>Sample Component</h1>
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

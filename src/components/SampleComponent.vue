<template></template>
<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator';

export default class SampleComponent extends Vue {
  someMethod() {
    this.$myProperty = 'hi';
  }
}
</script>
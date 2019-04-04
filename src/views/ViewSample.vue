<template>
  <div>
    <h1>I am a View</h1>
    <sample-component>I am a component nested in a view</sample-component>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ComponentSample from '../components/ComponentSample.vue';

@Component({
  components: {
    'sample-component': ComponentSample,
  },
})
export default class ViewSample extends Vue {}
</script>
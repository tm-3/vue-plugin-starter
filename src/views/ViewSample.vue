<template>
  <div>
    <h1>I am a View</h1>
    <component-sample>I am a component nested in a view</component-sample>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ComponentSample from '../components/ComponentSample.vue';

@Component({
  components: {
    'component-sample': ComponentSample,
  },
})
export default class ViewSample extends Vue {}
</script>
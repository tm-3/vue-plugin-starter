<template>
  <div>
    <h1>hi</h1>
    <view-sample></view-sample>
  </div>
</template>
<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator';
import ViewSample from './views/ViewSample.vue';

export default Vue.extend({
  components: { ViewSample },
});
</script> 
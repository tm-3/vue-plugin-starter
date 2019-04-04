import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import ViewSample from './ViewSample.vue';
Vue.component('view-sample', ViewSample);

storiesOf('View Sample', module)
  .add('View', () => '<view-sample></view-sample>')
  .add('From Template', () => ({
    components: { ViewSample },
    template: '<view-sample></view-sample>',
  }));

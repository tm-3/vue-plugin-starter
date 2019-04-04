import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import { text } from '@storybook/addon-knobs';
import ComponentSample from './ComponentSample.vue';

Vue.component('component-sample', ComponentSample);

storiesOf('Component Sample', module)
  .add('Component', () => '<component-sample></component-sample>')
  .add('From Template', () => ({
    components: { ComponentSample },
    template: '<component-sample></component-sample>',
  }))
  .add('Slot', () => ({
    components: { ComponentSample },
    props: {
      text: {
        default: text('Text', 'This text is in a slot'),
      },
    },
    template: '<component-sample><h3>{{ text }}</h3></component-sample>',
  }));

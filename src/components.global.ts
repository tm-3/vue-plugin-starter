import Vue from 'vue';
import ComponentSample from './components/ComponentSample.vue';
import ViewSample from './views/ViewSample.vue';

/**
 * You can register components in the Vue instance globally.
 *
 */

export function registerComponents() {
  Vue.component('component-sample', ComponentSample);
}

export function registerViews() {
  Vue.component('view-sample', ViewSample);
}

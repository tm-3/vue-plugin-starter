import {
  configure,
  addDecorator,
  addParameters,
  storiesOf,
} from '@storybook/vue';
import centered from '@storybook/addon-centered/vue';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import { withKnobs } from '@storybook/addon-knobs';

/**
 * Vuetify Config
 */

// import Vue from 'vue';
// import Vuetify from 'vuetify';
// import 'vuetify/src/stylus/app.styl';
// import 'vuetify/dist/vuetify.min.css';
// import './fonts.css';
// Vue.use(Vuetify, {
//   theme: {
//     primary: '#ee44aa',
//     secondary: '#424242',
//     accent: '#82B1FF',
//     error: '#FF5252',
//     info: '#2196F3',
//     success: '#4CAF50',
//     warning: '#FFC107',
//   },
//   options: {
//     customProperties: true,
//   },
//   iconfont: 'md',
// });

// const vuetifyWrapper = storyFn => (
//   <div>
//     <v-app>{storyFn()}</v-app>
//   </div>
// );

//Adds v-app to every story for vuetify to work
// addDecorator(() => ({
//   template:
//     '<v-app style="background-color: transparent;" dark><story/></v-app>',
//   style: '.theme--light.application { background-color: transparent; }',
// }));

import { create } from '@storybook/theming';

const newViewports = {
  kindleFire2: {
    name: 'Kindle Fire 2',
    styles: {
      width: '600px',
      height: '963px',
    },
  },
  kindleFireHD: {
    name: 'Kindle Fire HD',
    styles: {
      width: '533px',
      height: '801px',
    },
  },
};

addParameters({
  options: {
    theme: create({
      base: 'dark',
      brandTitle: 'LCL Component Library',
    }),
    isFullscreen: false,
    panelPosition: 'right',
  },
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      ...newViewports,
    },
  },
});

addDecorator(centered);

addDecorator(withKnobs);

const req = require.context('../../src/', true, /.stories.(ts|tsx)$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

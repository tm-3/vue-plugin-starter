import { PluginObject, VueConstructor, VNode } from 'vue';
import { PluginOptions } from 'types';
import { DirectiveBinding } from 'vue/types/options';
import { registerComponents, registerViews } from './components.global';

const PluginName: PluginObject<PluginOptions> = {
  install(Vue: VueConstructor, options?: PluginOptions) {
    if (options) {
      // handle plugin options here
      if (options.registerComponentsGlobally) {
        registerComponents();
      }

      if (options.registerViewComponentsGlobally) {
        registerViews();
      }
    }

    // handle install tasks here
    Vue.prototype.$someProperty = 'Default';
    // tslint:disable-next-line:only-arrow-functions
    Vue.prototype.$someMethod = function() {
      // do stuff
      console.log('I did stuff');
      // I think arrow functions are bad here because they won't be bound to the Vue instance. Havne't researched.
    };

    // Vue.directive('some-directive', {
    //   bind: function(
    //     el: HTMLElement,
    //     binding: DirectiveBinding,
    //     vnode: VNode,
    //   ) {},
    //   componentUpdated: function(
    //     el: HTMLElement,
    //     binding: DirectiveBinding,
    //     vnode: VNode,
    //     oldNode: VNode,
    //   ) {},
    //   inserted: function(
    //     el: HTMLElement,
    //     binding: DirectiveBinding,
    //     vnode: VNode,
    //   ) {},
    //   unbind: function(
    //     el: HTMLElement,
    //     binding: DirectiveBinding,
    //     vnode: VNode,
    //   ) {},
    //   update: function(
    //     el: HTMLElement,
    //     binding: DirectiveBinding,
    //     vnode: VNode,
    //     oldNode: VNode,
    //   ) {},
    // });

    // Vue.mixin({
    //   created: function() {
    //     //do something
    //   },
    // });
  },
};

export default PluginName;

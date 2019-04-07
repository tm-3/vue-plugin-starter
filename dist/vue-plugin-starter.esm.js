import Vue$1 from 'vue';
import { Prop, Component, Vue } from 'vue-property-decorator';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

let ComponentSample = class ComponentSample extends Vue {
    sampleMethod() {
        this.$someGlobal = '';
    }
};
__decorate([
    Prop()
], ComponentSample.prototype, "someProp", void 0);
ComponentSample = __decorate([
    Component
], ComponentSample);
var script = ComponentSample;

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    [_c("h1", [_vm._v("Component Sample")]), _vm._v(" "), _vm._t("default")],
    2
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var ComponentSample$1 = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

let ViewSample = class ViewSample extends Vue {
};
ViewSample = __decorate([
    Component
], ViewSample);
var script$1 = ViewSample;

/* script */
const __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    [
      _c("h1", [_vm._v("I am a View")]),
      _vm._v(" "),
      _c("component-sample", [_vm._v("I am a component nested in a view")])
    ],
    1
  )
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  const __vue_inject_styles__$1 = undefined;
  /* scoped */
  const __vue_scope_id__$1 = undefined;
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var ViewSample$1 = normalizeComponent_1(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    undefined,
    undefined
  );

/**
 * You can register components in the Vue instance globally.
 *
 */
function registerComponents() {
    Vue$1.component('component-sample', ComponentSample$1);
}
function registerViews() {
    Vue$1.component('view-sample', ViewSample$1);
}

const PluginName = {
    install(Vue, options) {
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
        Vue.prototype.$someMethod = function () {
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

import Vue, { PluginFunction } from 'vue';
import { ComponentSample } from 'src/components';

declare const VuePluginTemplate: VuePluginTemplate;
export default VuePluginTemplate;

export interface VuePluginTemplate {
  install: PluginFunction<PluginOptions>;
}

//Vue Global Properties
declare module 'vue/types/vue' {
  interface Vue {
    $someGlobal: string;
    $someMethod: () => void;
  }
}

//Component Options
declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    myOption?: string;
  }
}

//Rename this to your plugin name

export interface PluginOptions {
  // If true, all components in this plugin will be registered globally.
  registerComponentsGlobally: boolean;
  registerViewComponentsGlobally: boolean;
}

export { ComponentSample };

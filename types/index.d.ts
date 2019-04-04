import Vue from 'vue/types/vue';
import { PluginFunction } from 'vue';
// import './lib';

declare const PluginName: PluginName;
export default PluginName;
export interface PluginName {
  // install: PluginFunction<PluginOptions>;
}

declare module 'somemodule' {
  const install: PluginFunction<{}>;
}

export interface PluginOptions {}

declare module 'vue/types/vue' {
  interface Vue {
    $myProperty: string;
  }
}

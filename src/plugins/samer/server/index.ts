import { PluginInitializerContext } from '../../../core/server';
import { SamerPlugin } from './plugin';

//  This exports static code and TypeScript types,
//  as well as, Kibana Platform `plugin()` initializer.

export function plugin(initializerContext: PluginInitializerContext) {
  return new SamerPlugin(initializerContext);
}

export { SamerPluginSetup, SamerPluginStart } from './types';

import './index.scss';

import { SamerPlugin } from './plugin';

// This exports static code and TypeScript types,
// as well as, Kibana Platform `plugin()` initializer.
export function plugin() {
  return new SamerPlugin();
}
export { SamerPluginSetup, SamerPluginStart } from './types';

export const MANAGEMENT_APP_ID = "Samra"

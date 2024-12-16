import { initHeader } from './modules/header/header.js';
import { Tabs } from './scripts/tabs.js';

initHeader();
new Tabs(
	'.services-tabs__header',
	'.services-tabs__header-item',
	'.services-tabs__content-item',
	'active',
	'grid',
);

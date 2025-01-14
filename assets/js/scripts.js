import { initHeader } from './modules/header/header.js';
import { Tabs } from './scripts/tabs.js';
import { lettersSwiper, technicSwiper } from './scripts/sliders.js';
import { skillsProgressInit } from './scripts/skillsProgress.js';

initHeader();
new Tabs(
	'.services-tabs__header',
	'.services-tabs__header-item',
	'.services-tabs__content-item',
	'active',
	'grid',
);

skillsProgressInit();

lettersSwiper.init();
technicSwiper.init();

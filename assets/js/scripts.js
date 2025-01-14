import { initHeader } from './modules/header/header.js';
import { Tabs } from './scripts/tabs.js';
import { lettersSwiper, technicSwiper } from './scripts/sliders.js';
import { skillsProgressInit } from './scripts/skillsProgress.js';
import { select } from './scripts/select.js';

initHeader();

try {
	new Tabs(
		'.services-tabs__header',
		'.services-tabs__header-item',
		'.services-tabs__content-item',
		'active',
		'grid',
	);
} catch {
	console.log('Ошибка');
}

skillsProgressInit();

lettersSwiper.init();
technicSwiper.init();

select();

import { initHeader } from './modules/header/header.js';
import { Tabs } from './scripts/tabs.js';
import { lettersSwiper, technicSwiper, reviewsSwiper, examplesSwiper } from './scripts/sliders.js';
import { skillsProgressInit } from './scripts/skillsProgress.js';
import { select } from './scripts/select.js';
import { Calc } from './scripts/calc.js';
import { spollersInit } from './scripts/spollers.js';
import { modalInit } from './scripts/modal.js';

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
reviewsSwiper.init();
examplesSwiper.init();

select();
new Calc('.calc__form');
spollersInit();
modalInit();

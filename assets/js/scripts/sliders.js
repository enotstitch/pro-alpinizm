import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

export const lettersSwiper = new Swiper('.letters__swiper', {
	modules: [Navigation, Pagination],

	init: false,
	direction: 'horizontal',
	loop: false,
	slidesPerView: 1,
	spaceBetween: 40,
	centeredSlides: false,

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	breakpoints: {
		992: {
			slidesPerView: 3,
		},
		576: {
			slidesPerView: 2,
		},
	},
});

export const technicSwiper = new Swiper('.technic__swiper', {
	modules: [Navigation, Pagination],

	init: false,
	direction: 'horizontal',
	loop: false,
	slidesPerView: 1,
	spaceBetween: 40,
	centeredSlides: false,

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	breakpoints: {
		992: {
			slidesPerView: 3,
		},
		576: {
			slidesPerView: 2,
		},
	},
});

export const reviewsSwiper = new Swiper('.reviews__swiper', {
	modules: [Navigation, Pagination],

	init: false,
	direction: 'horizontal',
	loop: false,
	slidesPerView: 1,
	spaceBetween: 40,
	centeredSlides: false,

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	breakpoints: {
		992: {
			slidesPerView: 3,
		},
		576: {
			slidesPerView: 2,
		},
	},
});

export const examplesSwiper = new Swiper('.examples__swiper', {
	modules: [Navigation],

	init: false,
	direction: 'horizontal',
	loop: false,
	slidesPerView: 1,
	spaceBetween: 20,
	centeredSlides: false,

	navigation: {
		nextEl: '.swiper-button-next--examples',
		prevEl: '.swiper-button-prev--examples',
	},

	breakpoints: {
		1200: {
			slidesPerView: 3,
		},
		768: {
			slidesPerView: 2,
		},
	},
});

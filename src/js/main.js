import './vendor';

// document.addEventListener('DOMContentLoaded', () => {
// 	let root = document.getElementsByTagName('html')[0];
// 	setTimeout(() => {
// 		root.classList.add('is-intro-hide');
// 	}, 2000);
// });

$(document).ready(() => {
	let $window = $(window);
	let $menuBtn = $('#menuBtn');
	let $menu = $('#menu');
	let $slider = $('.slider.owl-carousel');

	$menuBtn.on('click', (e) => {
		let $this = $(e.currentTarget);
		$this.toggleClass('menu__btn--open');
		$menu.toggleClass('menu--active');
	});

	$slider.owlCarousel({
		loop: true,
		dots: false,
		nav: true,
		mouseDrag: false,
		navText: ['<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M22 24.9995L17 19.9995L22 14.9995"/><path d="M9.89949 29.698C4.43215 24.2307 4.42819 15.3703 9.89065 9.90785C14.6598 5.13873 22.0189 4.53641 27.4488 8.09887M29.6985 9.899C35.1658 15.3663 35.1698 24.2267 29.7073 29.6892C24.9382 34.4583 17.579 35.0606 12.1491 31.4981" stroke-linejoin="round"/></svg>','<svg width="42" height="42" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg"><path d="M19 15.9995L24 20.9995L19 25.9995" stroke-linejoin="round"/><path d="M10.8995 30.698C5.43218 25.2307 5.42822 16.3703 10.8907 10.9078C15.6598 6.13873 23.019 5.53641 28.4488 9.09887M30.6985 10.899C36.1658 16.3663 36.1698 25.2267 30.7073 30.6892C25.9382 35.4583 18.579 36.0606 13.1492 32.4981" stroke-linejoin="round"/></svg>'],
		items: 1,
		autoplay: true,
		smartSpeed:1000,
		lazyLoad: true,
		autoplayTimeout: 7000,
	});
});

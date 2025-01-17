const modalLinks = document.querySelectorAll('.modal-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 800;

export const modalInit = () => {
	if (modalLinks.length > 0) {
		for (let index = 0; index < modalLinks.length; index++) {
			const modalLink = modalLinks[index];
			modalLink.addEventListener('click', (e) => {
				const modalName = modalLink.getAttribute('href').replace('#', '');
				const curentmodal = document.getElementById(modalName);
				modalOpen(curentmodal);
				e.preventDefault();
			});
		}
	}
	const modalCloseIcon = document.querySelectorAll('.close-modal');
	if (modalCloseIcon.length > 0) {
		for (let index = 0; index < modalCloseIcon.length; index++) {
			const el = modalCloseIcon[index];
			el.addEventListener('click', (e) => {
				modalClose(el.closest('.modal'));
				e.preventDefault();
			});
		}
	}

	function modalOpen(curentmodal) {
		if (curentmodal && unlock) {
			const modalActive = document.querySelector('.modal.open');
			if (modalActive) {
				modalClose(modalActive, false);
			} else {
				bodyLock();
			}
			curentmodal.classList.add('open');
			curentmodal.addEventListener('click', (e) => {
				if (!e.target.closest('.modal__content')) {
					modalClose(e.target.closest('.modal'));
				}
			});
		}
	}

	function modalClose(modalActive, doUnlock = true) {
		if (unlock) {
			modalActive.classList.remove('open');
			if (doUnlock) {
				bodyUnLock();
			}
		}
	}

	function bodyLock() {
		const lockPaddingValue =
			window.innerWidth - document.querySelector('.site-container').offsetWidth + 'px';

		if (lockPadding.length > 0) {
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight = lockPaddingValue;
			}
		}
		body.style.paddingRight = lockPaddingValue;
		body.classList.add('lock');

		unlock = false;
		setTimeout(() => {
			unlock = true;
		}, timeout);
	}

	function bodyUnLock() {
		setTimeout(() => {
			if (lockPadding.length > 0) {
				for (let index = 0; index < lockPadding.length; index++) {
					const el = lockPadding[index];
					el.style.paddingRight = '0px';
				}
			}
			body.style.paddingRight = '0px';
			body.classList.remove('lock');
		}, timeout);

		unlock = false;
		setTimeout(() => {
			unlock = true;
		}, timeout);
	}

	document.addEventListener('keydown', (e) => {
		if (e.which === 27) {
			const modalActive = document.querySelector('.modal.open');
			modalClose(modalActive);
		}
	});

	(function () {
		// проверяем поддержку
		if (!Element.prototype.closest) {
			// реализуем
			Element.prototype.closest = function (css) {
				let node = this;
				while (node) {
					if (node.matches(css)) return node;
					else node = node.parentElement;
				}
				return null;
			};
		}
	})();
	(function () {
		// проверяем поддержку
		if (!Element.prototype.matches) {
			// определяем свойство
			Element.prototype.matches =
				Element.prototype.matchesSelector ||
				Element.prototype.webkitMatchesSelector ||
				Element.prototype.mozMatchesSelector ||
				Element.prototype.msMatchesSelector;
		}
	})();
};

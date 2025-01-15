export class Tabs {
	constructor(headerSelector, tabSelector, contentSelector, activeClass, display = 'flex') {
		this.header = document.querySelector(headerSelector);
		if (!this.header) return;
		this.tab = document.querySelectorAll(tabSelector);
		this.content = document.querySelectorAll(contentSelector);
		this.activeClass = activeClass;
		this.display = display;
		this.hideTabContent();
		this.showTabContent();
		this.events();
	}

	hideTabContent() {
		this.content.forEach((item) => {
			item.style.display = 'none';
		});
		this.tab.forEach((item) => {
			item.classList.remove(this.activeClass);
		});
	}

	showTabContent(i = 0) {
		this.content[i].style.display = this.display;
		this.tab[i].classList.add(this.activeClass);
	}

	events() {
		this.header.addEventListener('click', (event) => {
			const target = event.target;

			this.tab.forEach((item, index) => {
				if (item.contains(target)) {
					this.hideTabContent();
					this.showTabContent(index);
				}
			});
		});
	}
}

// * Первый аргумент - класс шапки табов
// * Второй аргумент - класс элемента шапки
// * Третий аргумент - класс таба
// * Четвёртый аргумент - класс активности

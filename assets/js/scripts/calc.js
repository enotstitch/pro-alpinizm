export class Calc {
	constructor(calcSelector) {
		this.calc = document.querySelector(calcSelector);
		if (!this.calc) return;
		this.type = this.calc.querySelector('.select');
		this.typeName = this.type.querySelector('.select__current').innerText;
		this.typeCost = this.type.dataset.cost;
		this.squareInput = this.calc.querySelector('#square');
		this.costValue = this.calc.querySelector('.calc__cost');
		this.events();
	}

	events() {
		this.type.addEventListener('click', () => {
			this.typeCost = this.type.dataset.cost;
			this.calculation();
		});

		this.squareInput.addEventListener('input', () => {
			this.calculation();
		});
	}

	calculation() {
		const cost = this.typeCost * this.squareInput.value;
		this.costValue.innerText = cost + '₽';
	}
}

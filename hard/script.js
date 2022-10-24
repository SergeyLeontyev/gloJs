document.addEventListener('DOMContentLoaded', function (event) {
	const px = 10;

	const DomElement = function (selector = '.block', styleAtr = {}) {
		this.selector = selector === 'string' ? selector : (() => {
			styleAtr = typeof selector === 'object' ? selector : {};
			return '.block';
		})();
		this.height = '100px';
		this.width = '100px';
		this.bg = 'green';
		this.fontSize = '10px';
		this.cssText = '';

		if (!('height' in styleAtr)) {
			styleAtr.height = '100px';
		}
		if (!('width' in styleAtr)) {
			styleAtr.width = '100px';
		}
		if (!('background' in styleAtr)) {
			styleAtr.background = 'green';
		}
		if (!('font-size' in styleAtr)) {
			styleAtr['font-size'] = '10px';
		}

		for (let key in styleAtr) {
			this.cssText += `${key}: ${styleAtr[key]}; `;
		}
	};

	DomElement.prototype.newElem = function () {
		let elem;

		if (this.selector[0] === '.') {
			elem = document.createElement('div');
			elem.className = this.selector.slice(1);
		}

		if (this.selector[0] === '#') {
			elem = document.createElement('p');
			elem.id = this.selector.slice(1);
		}

		elem.style.cssText = this.cssText;
		elem.style.cssText += `left: ${Math.round(window.innerWidth / 2 - parseInt(this.width) / 2)}px; `;
		elem.style.cssText += `top: ${Math.round(window.innerHeight / 2 - parseInt(this.height) / 2)}px; `;

		elem.addEventListener('click', this.transfer);

		return elem;
	};

	let square = new DomElement({
		position: 'absolute'
	});

	document.body.appendChild(square.newElem());

	document.addEventListener('keyup', (event) => {
		const div = document.querySelector('div');
		if (event.key === 'ArrowUp') {
			div.style.top = parseInt(div.style.top) - px + 'px';
		}
		if (event.key === 'ArrowRight') {
			div.style.left = parseInt(div.style.left) + px + 'px';
		}
		if (event.key === 'ArrowLeft') {
			div.style.left = parseInt(div.style.left) - px + 'px';
		}
		if (event.key === 'ArrowDown') {
			div.style.top = parseInt(div.style.top) + px + 'px';
		}
	});
});
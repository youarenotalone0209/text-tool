import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-text-tool',
	templateUrl: './text-tool.component.html',
	styleUrls: ['./text-tool.component.scss']
})
export class TextToolComponent implements OnInit {
	showResult: boolean = false;
	showExtraField: boolean = false;
	resultMessage: string;

	constructor() { }

	ngOnInit() {
	}

	resetText(firstTextArea, secondTextArea) {
		firstTextArea.value = '';
		this.showResult = false;
		this.showExtraField = false;
	}

	lowerCase(text) {
		this.resultMessage = text.toLowerCase();
		this.showResult = true;
	}

	upperCase(text) {
		this.resultMessage = text.toUpperCase();
		this.showResult = true;
	}

	shuffle(text) {
		var currentIndex = text.length, temporaryValue, randomIndex;
		text = text.split('');
		// While there remain elements to shuffle...
		while (0 !== currentIndex) {

			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			temporaryValue = text[currentIndex];
			text[currentIndex] = text[randomIndex];
			text[randomIndex] = temporaryValue;
		}

		this.resultMessage = text.join().replace(/[,]/g, '');
		this.showResult = true;
	}

	toHex(text) {
		var dec,
			sum = [],
			hex = [],
			i,
			s;

		if (!text.match(/^[0-9]*$/)) {
			this.resultMessage = 'Please type in number only';
		} else {
			dec = text.split('');
			while (dec.length) {
				s = 1 * dec.shift();
				for (i = 0; s || i < sum.length; i++) {
					s += (sum[i] || 0) * 10;
					sum[i] = s % 16;
					s = (s - sum[i]) / 16;
				}
			}
			while (sum.length) {
				hex.push(sum.pop().toString(16));
			}
			this.resultMessage = hex.join('');
		}
		this.showResult = true;
	}

	random(text) {
		if (!text) {
			this.resultMessage = 'Please type in how many letters you want to generate for this random text';
			this.showResult = true;
			return;
		}
		if (!text.match(/^[0-9]*$/)) {
			this.resultMessage = 'Please type in number only';
			this.showResult = true;
			return;
		}
		var result = "";
		var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		for (var i = 0; i < parseInt(text, 10); i++)
			result += possible.charAt(Math.floor(Math.random() * possible.length));

		this.resultMessage = result;
		this.showResult = true;
	}
}

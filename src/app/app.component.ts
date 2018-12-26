import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	constructor(private router: Router) { }
	menuItems = [{
		name: 'Conversion',
		path: '/conversion'
	}, {
		name: 'Text Compare',
		path: '/text-compare'
	}];

	routeToPage(path) {
		this.router.navigate([path]);
	}
}

/* eslint-disable no-bitwise */
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

/** Class for the app component that is bootstrapped to run the application
 */
@Component({
	selector: 'body',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	/** string used to hold the url for the skipToMain link */
	skipToMain: string | undefined;
	users = [];

	/** constructor for setting up DI in this component */
	constructor(
		private readonly router: Router,
	) {}

	/** this class requires this method to implement the OnInit interface */
	ngOnInit() {
		this.router.events
			.pipe(filter((event) => event instanceof NavigationEnd))
			.subscribe((event: NavigationEnd) => {
				this.setSkipLinkUrl(event.urlAfterRedirects);
			});
	}

	/**
	 * setSkipLinkUrl takes in a url string and processes whether
	 * the skipToMain link should be updated to use the new value
	 * @param currentUrl the new url to refer to
	 */
	private setSkipLinkUrl(currentUrl: string): void {
		if (!currentUrl.endsWith('#app-content')) {
			this.skipToMain = `${currentUrl}#app-content`;
		}
	}
}
import { Injectable } from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class HttpInterceptorService implements HttpInterceptor {
	constructor() {}

	intercept(
		request: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		request = request.clone({
			setHeaders: {
				Authorization: `Bearer ${sessionStorage.getItem(
					'encodedAccessToken'
				)}`
			},
		});

		return next.handle(request);
	}
}
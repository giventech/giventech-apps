import { Component, OnInit } from '@angular/core';

import { RestApiService } from '@gnt/shared/auth';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Component({
	selector: 'gnt-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
	public readonly loginFormGroup: FormGroup;

	public loggedIn: Observable<boolean>;

	/**
	 *  Presentational component example
	 */

	/**
	 * The login container component access external data source
	 * e.g. External source Ressource server, Authorisation server, REST- API Websoket
	 * e.g. Internal data source are Application State (this could be stored in @input @output, Redux Store, or Subject/ Behaviour subjest
	 * this processing is so data is made available to presentational commponents.
	 * Most common case is unidirectional passing data down.
	 * Angular, RxJS and NgRx makes it possible to have bi-directional data-flow, so data may also be made available for sibling and parent.
	 * @param restApiService
	 */

	constructor(
		private loginFormBuilder: FormBuilder,
		private restApiService: RestApiService,
	) {
		this.loginFormGroup = this.loginFormBuilder.group({
			username: new FormControl('', null),
			password: new FormControl('', null),
		});

		//ADD Method populateData();
	}

	ngOnInit(): void {}

	authenticate(): void {
		const loginData = this.loginFormGroup.value;
		this.restApiService.obtainAccessToken(loginData);
		// this.loggedIn =  this.restApiService.readHelloWorld('fabrice').pipe(
		//   switchMap(value => !!value ? of(true): of(false))
		// );
	}

	populateData() {
		// Get initial data for the form
		// Get Reference for the drop down ( for example)
	}
}

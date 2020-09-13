import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'gnt-oauth-login',
  templateUrl: './oauth-login.component.html',
  styleUrls: ['./oauth-login.component.scss']
})
export class OauthLoginComponent implements OnInit {

  @Input()
  loggedIn: boolean;

  constructor(
  ) {

  }

  ngOnInit(): void {

  }

  // TODO: Add method to map form to model

  retrieveData(): void {

  }


}

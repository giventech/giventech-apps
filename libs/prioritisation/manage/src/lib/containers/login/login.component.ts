import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../../../../../shared/auth/src/lib/rest-api.service';
import { replaceNgsp } from '@angular/compiler/src/ml_parser/html_whitespaces';
//import { RestApiService } from '@giventech-apps/shared/auth';

@Component({
  selector: 'giventech-apps-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private restApiService:RestApiService

  ) { }

  ngOnInit(): void {

    this.restApiService.readHelloWorld('fabrice').subscribe(
      response => {
        console.log(response );
        console.log('this is the response' + response );
      }
    );
  }

}

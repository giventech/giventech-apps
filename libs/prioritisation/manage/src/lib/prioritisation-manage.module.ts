import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './containers/login/login.component';
import { RouterModule } from '@angular/router';

//TODO Question: How do I reduce the below import in a clean way

import { SharedAuthModule } from '@gnt/shared/auth';
import { RestApiService } from '../../../../shared/auth/src/lib/rest-api.service';
import { OauthLoginComponent } from './component/oauth-login/oauth-login.component';

@NgModule({
  imports: [CommonModule, SharedAuthModule,
  RouterModule.forChild([
    {path: '' , component: LoginComponent},
  ])
  ],
  declarations: [LoginComponent, OauthLoginComponent],
  providers:[RestApiService]
})
export class PrioritisationManageModule {}

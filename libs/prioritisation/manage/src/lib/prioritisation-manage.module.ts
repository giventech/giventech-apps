import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RestApiService, SharedAuthModule } from '@gnt/shared/auth';
import { OauthLoginComponent } from './component/oauth-login/oauth-login.component';
import { LoginComponent } from './containers/login/login.component';

//TODO Question: How do I reduce the below import in a clean way
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@gnt/prioritisation/list/feature-shell').then(m => m.PrioritisationListFeatureShellModule)
  },

];

@NgModule({
  imports: [CommonModule, SharedAuthModule,
  RouterModule.forChild(routes)
  ],
  declarations: [LoginComponent, OauthLoginComponent],
  providers:[RestApiService]
})
export class PrioritisationManageModule {}



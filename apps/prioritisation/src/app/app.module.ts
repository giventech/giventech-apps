import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: 'items',
    loadChildren: () => import('@giventech-apps/prioritisation/manage').then(m => m.PrioritisationManageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('@giventech-apps/shared/auth').then(m => m.SharedAuthModule
    )
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

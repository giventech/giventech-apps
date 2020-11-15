import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  // This is prioritisation app companion library
  {
    path: 'manage',
    loadChildren: () => import('@gnt/prioritisation/manage').then(m => m.PrioritisationManageModule)
  }
];

//TODO : Consider what is the impact of ModuleWithProvider in the instanciation of services
//https://angular.io/guide/migration-module-with-providers

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

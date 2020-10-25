import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { PrioritisationListDataAccessModule } from '@gnt/prioritisation/list/data-access';
import { ListHomeComponent } from './components/list-home/list-home.component';


//TODO : Consider what is the impact of ModuleWithProvider in the instantiation of services
//https://angular.io/guide/migration-module-with-providers

@NgModule({
  declarations: [],
  imports: [
    PrioritisationListDataAccessModule, // Encapsulate access to state management or Graphql
    // For child indicates a Lazy loaded route

    RouterModule.forChild([
      {path: '' , pathMatch: 'full', component: ListHomeComponent},
    ])
  ],
  providers: []
  // bootstrap: [], // No need to bootstrap
})
export class PrioritisationListFeatureShellModule {}

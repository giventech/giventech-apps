import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { PrioritisationListDataAccessModule } from '@gnt/prioritisation/list/data-access';
import { ListHomeComponent } from './components/list-home/list-home.component';
import { ListHomeSmartComponent } from './containers/list-home-smart/list-home-smart.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [ListHomeSmartComponent, ListHomeComponent],
  imports: [
    PrioritisationListDataAccessModule,  // Encapsulate access to state management or Graphql
    RouterModule.forChild([       // forChild enables lazy loading of the route.
      { path: '', pathMatch: 'full', component: ListHomeSmartComponent }
    ]),
    CommonModule
  ],
  providers: []
})
export class PrioritisationListFeatureShellModule {}

import { Component, OnInit } from '@angular/core';
import { PrioritisationListSandboxService } from '../../../../../data-access/src/lib/prioritisation-list-sandbox.service';
import { Observable } from 'rxjs';
import {RestApiService} from '@gnt/shared/auth'
@Component({
  selector: 'gnt-list-home-smart',
  templateUrl: './list-home-smart.component.html',
  styleUrls: ['./list-home-smart.component.scss']
})
export class ListHomeSmartComponent implements OnInit {

  constructor(
    private priotisationSb: PrioritisationListSandboxService,
    private restApiService:RestApiService) { }
  priorityListService$: Observable<{businessValue: string, criticality: string, WSJF: number}[]>;
  ngOnInit(): void {
    this.priorityListService$ = this.priotisationSb.priorityListService$
  }



  get accesstToken(): void {
    return this.restApiService.getWithExpiry('access_token');

  }





}

import { Component, OnInit } from '@angular/core';
import { PrioritisationListSandboxService } from '../../../../../data-access/src/lib/prioritisation-list-sandbox.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'gnt-list-home-smart',
  templateUrl: './list-home-smart.component.html',
  styleUrls: ['./list-home-smart.component.scss']
})
export class ListHomeSmartComponent implements OnInit {


  constructor(private priotisationSb: PrioritisationListSandboxService) { }

  priorityListService$: Observable<{businessValue: string, criticality: string, WSJF: number}[]>;


  ngOnInit(): void {
    this.priorityListService$ = this.priotisationSb.priorityListService$
  }

}

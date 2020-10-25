import { Component, OnInit } from '@angular/core';
import { PrioritisationListSandboxService } from '../../../../../data-access/src/lib/prioritisation-list-sandbox.service';

@Component({
  selector: 'gnt-list-home-smart',
  templateUrl: './list-home-smart.component.html',
  styleUrls: ['./list-home-smart.component.scss']
})
export class ListHomeSmartComponent implements OnInit {

  constructor(private priotisationSb: PrioritisationListSandboxService) { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'gnt-list-home',
  templateUrl: './list-home.component.html',
  styleUrls: ['./list-home.component.scss']
})
export class ListHomeComponent implements OnInit {

  @Input() priorities: {businessValue: string, criticality: string, WSJF: number}[];

  constructor() { }

  ngOnInit(): void {
  }

}

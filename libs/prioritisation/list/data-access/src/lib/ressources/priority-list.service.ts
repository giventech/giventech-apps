import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PriorityListService {

  constructor() { }

  getPriorities(): Observable<{businessValue: string, criticality: string, WSJF: number}[]> {

    return of([
      {businessValue: '5', criticality: '2', WSJF:12},
      {businessValue: '6', criticality: '2', WSJF:12},
      {businessValue: '2', criticality: '5', WSJF:8}
    ]);
  }
}

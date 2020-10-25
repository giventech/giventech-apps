import { Injectable } from '@angular/core';
import { PriorityListService } from './ressources/priority-list.service';

@Injectable({
  providedIn: 'root'
})
export class PrioritisationListSandboxService {

  priorityListService$ = this.priorityListService.getPriorities();

  constructor(private priorityListService: PriorityListService) {
  }

}

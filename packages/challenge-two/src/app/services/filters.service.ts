import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GeneralObject } from '../inferfaces/util.interface';

@Injectable({
  providedIn: 'root',
})
export class FiltersService {
  private filters$: BehaviorSubject<GeneralObject> = new BehaviorSubject({});

  constructor() {
    this.filters$.next({ p: 1 });
  }

  getCurrentFilters() {
    return this.filters$.value;
  }

  getFiltersObservable() {
    return this.filters$.asObservable();
  }

  setFilters(filters: GeneralObject) {
    this.filters$.next(filters);
  }
}

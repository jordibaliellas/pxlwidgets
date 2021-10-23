import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InputForm } from 'src/app/inferfaces/filter.interface';
import { GeneralObject } from 'src/app/inferfaces/util.interface';
import { FiltersService } from 'src/app/services/filters.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {
  @Input() inputs: InputForm[];

  constructor(private filtersService: FiltersService) {}

  changeInput(key: string, value: string) {
    const currentFilters = this.filtersService.getCurrentFilters();
    currentFilters[key] = value;
    this.filtersService.setFilters(currentFilters);
  }
}

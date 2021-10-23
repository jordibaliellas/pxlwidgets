import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InputForm } from 'src/app/inferfaces/filter.interface';
import { GeneralObject } from 'src/app/inferfaces/util.interface';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  private filterForm: GeneralObject = {};

  @Input() inputs: InputForm[];
  @Output() changeFilter = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  changeInput(key: string, value: string) {
    this.filterForm[key] = value;
    this.changeFilter.next(this.filterForm);
  }
}

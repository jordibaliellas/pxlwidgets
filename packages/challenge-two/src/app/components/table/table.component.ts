import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GeneralObject } from 'src/app/inferfaces/util.interface';
import { Column } from '../../inferfaces/table.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() columns: Column[];
  @Input() rows: GeneralObject[];

  @Output() clickedRow = new EventEmitter<GeneralObject>();

  constructor() {}

  ngOnInit(): void {}

  clickRow(column: Column, row: GeneralObject, rowIndex: number) {
    this.clickedRow.emit(row);
  }
}

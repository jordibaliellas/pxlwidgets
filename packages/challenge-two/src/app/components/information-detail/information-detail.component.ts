import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-information-detail',
  templateUrl: './information-detail.component.html',
  styleUrls: ['./information-detail.component.scss'],
})
export class InformationDetailComponent implements OnInit {
  @Input() title: string;
  _info: string | string[];
  get info(): string {
    if (typeof this._info === 'string') return this._info;
    return this._info.join('/');
  }
  @Input() set info(value: string | string[]) {
    this._info = value;
  }

  constructor() {}

  ngOnInit(): void {}
}

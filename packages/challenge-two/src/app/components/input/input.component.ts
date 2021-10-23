import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() label: string;
  @Input() placeholder: string;

  @Output() changeInput = new EventEmitter<string>();

  valueInput = '';

  constructor() {}

  onChangeInput() {
    this.changeInput.next(this.valueInput);
  }
}

import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss'],
})
export class DropDownComponent {
  @Input() options: string[];
  @Input() selected: number = 0;
  @Output() optionClicked = new EventEmitter<number>();
  @ViewChild('selectorContainer') selectorContainer: ElementRef;

  dropdownOpen = false;

  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event: any): void {
    if (
      this.selectorContainer &&
      !this.selectorContainer.nativeElement.contains(event.target)
    ) {
      // clicked outside => close dropdown list
      this.dropdownOpen = false;
    }
  }

  onClickOption(itemSelected: number) {
    this.selected = itemSelected;
    this.optionClicked.emit(itemSelected);
    this.dropdownOpen = false;
  }
}

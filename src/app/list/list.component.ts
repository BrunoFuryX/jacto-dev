import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ItemComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  @Input() data: any;

  @Input() loading: boolean = false;

  @Output() messageEvent = new EventEmitter();

  sendPagePlus() {
    this.messageEvent.emit(`${this.data.page + 1}`)
  }
  sendPageMinus() {
    this.messageEvent.emit(`${this.data.page - 1}`)
  }
}

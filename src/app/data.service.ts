import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class DataService {

  private itemSource = new BehaviorSubject<string>("1123")
  currentItem = this.itemSource.asObservable();

  private openModal = new BehaviorSubject<boolean>(false)
  currentModal = this.openModal.asObservable();
  constructor() { }

  changeItem(item: any) {
    this.itemSource.next(item)
  }

  changeModal(item: any) {
    this.openModal.next(item)
  }
}

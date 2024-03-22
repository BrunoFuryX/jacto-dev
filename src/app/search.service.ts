import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class DataService {

  private searchSource = new BehaviorSubject<string>("Vingadores")
  currentSearch = this.searchSource.asObservable();

  constructor() { }

  changeSearch(item: any) {
    this.searchSource.next(item)
  }

}

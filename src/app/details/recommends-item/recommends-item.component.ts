import { Component, Input } from '@angular/core';
import { DataService } from '../../modal.service';

@Component({
  selector: 'app-recommends-item',
  standalone: true,
  imports: [],
  templateUrl: './recommends-item.component.html',
  styleUrl: './recommends-item.component.scss'
})
export class RecommendsItemComponent {
  @Input() item: any

  constructor(private data: DataService) { }

  modal() {
    this.data.changeItem(`${this.item.id}`)
    this.data.changeModal(true)
  }

  ngOnChanges() {
    var release_date = this.item.release_date.split("-")
    this.item.release_date = `${release_date[2]}/${release_date[1]}/${release_date[0]}`

    var vote_average = this.item.vote_average
    this.item.vote_average = `${vote_average.toFixed(1)}`
  }

}

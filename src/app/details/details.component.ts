import { Component } from '@angular/core';
import { DataService } from '../modal.service';
import { instance } from '../../utils/api';
import { RecommendsItemComponent } from './recommends-item/recommends-item.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RecommendsItemComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentItem.subscribe(item => this.changeItem(item))
    this.data.currentModal.subscribe(open => this.open = open)

  }
  item: any;
  related: any;
  open: boolean = false;

  close() {
    this.data.changeModal(false)
  }
  USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  changeItem(id: string) {
    instance.get(`/3/movie/${id}?language=pt-BR`)
      .then(response => {
        response.data.release_date_format = `${response.data.release_date.split("-")[2]}/${response.data.release_date.split("-")[1]}/${response.data.release_date.split("-")[0]}`
        response.data.vote_average_format = `${response.data.vote_average.toFixed(1)}`
        response.data.budget_format = this.USDollar.format(response.data.budget)
        response.data.revenue_format = this.USDollar.format(response.data.revenue)
        this.item = response.data
      })
      .catch(err => {
        console.error(err)
      });
    instance.get(`/3/movie/${id}/recommendations?language=pt-Br&page=1`)
      .then(response => {
        this.related = response.data.results
      })
      .catch(err => {
        console.error(err)
      });
  }
}

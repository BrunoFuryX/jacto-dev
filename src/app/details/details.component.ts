import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { instance } from '../../utils/api';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
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
        response.data.release_date = `${response.data.release_date.split("-")[2]}/${response.data.release_date.split("-")[1]}/${response.data.release_date.split("-")[0]}`
        response.data.vote_average = `${response.data.vote_average.toFixed(1)}`
        response.data.budget = this.USDollar.format(response.data.budget)
        response.data.revenue = this.USDollar.format(response.data.revenue)
        this.item = response.data
      })
      .catch(err => {
        console.error(err)
      });
  }
}

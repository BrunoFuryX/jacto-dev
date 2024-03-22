import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './list/list.component';
import { instance } from '../utils/api'
import { DetailsComponent } from './details/details.component';
import { Placeholder } from '../assets/homepage.js'
import { HeaderComponent } from './header/header.component';
import { DataService } from './search.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ListComponent, DetailsComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'jacto-dev';
  page: any = 1;
  loading: boolean = false;
  searchInput: string = "";
  response: any = Placeholder

  constructor(private data: DataService) { }


  Search(searchInput: string) {
    this.searchInput = searchInput
    this.loading = true
    instance.get(`/3/search/movie?query=${searchInput}&include_adult=false&language=pt-BR&page=${this.page}`)
      .then(response => {
        this.response = response.data
        this.loading = false
      })
      .catch(err => {
        console.error(err)
        this.loading = false
      });
  }

  Populares() {
    this.searchInput = ""
    this.loading = true
    instance.get(`/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=${this.page}&sort_by=popularity.desc`)
      .then(response => {
        this.response = response.data
        this.loading = false
      })
      .catch(err => {
        console.error(err)
        this.loading = false
      });
  }

  receivePage($event: any) {
    this.page = $event
    console.log(this.searchInput)
    this.Direction(this.searchInput)
  }

  ngOnInit() {
    this.data.currentSearch.subscribe(item => this.searchInput = item)
    this.data.currentSearch.subscribe(item => this.Direction(item))

  }

  Direction(search: string) {
    switch (search) {
      case '':
        this.Populares()

        break;
      case 'Populares':
        this.page = 1

        this.Populares()
        break;
      default:
        this.Search(search)
    }
  }
}

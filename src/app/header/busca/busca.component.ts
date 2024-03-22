import { Component } from '@angular/core';
import { DataService } from '../../search.service';

@Component({
  selector: 'app-busca',
  standalone: true,
  imports: [],
  templateUrl: './busca.component.html',
  styleUrl: './busca.component.scss'
})
export class BuscaComponent {
  constructor(private data: DataService) { }

  searchTerm: string = '';

  onInput(event: any) {
    this.searchTerm = event.target.value;
  }

  search() {
    this.data.changeSearch(`${this.searchTerm}`)
  }
}

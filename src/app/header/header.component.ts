import { Component } from '@angular/core';
import { BuscaComponent } from './busca/busca.component';
import { DataService } from '../search.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [BuscaComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private data: DataService) { }

  populares() {
    this.data.changeSearch(`Populares`)
  }
}

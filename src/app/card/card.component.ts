import { Component } from '@angular/core';
import { Card } from '../model/card';
import { CardService } from '../service/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  public listaCards:Card[] = [];
  constructor(private service:CardService) {

  }
  ngOnInit(): void {
    this.service.getClientes().subscribe(res =>{
      this.listaCards = res;
    })
  }

}

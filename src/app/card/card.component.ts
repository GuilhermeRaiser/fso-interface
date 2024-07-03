import { Component, Input, OnInit} from '@angular/core';
import { Card } from '../model/card';
import { CardService } from '../service/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  public listaCards:any[] = []; //antes era Card em vez de Any
  constructor(private service:CardService) {

  }
  @Input() 
  umaCard: any;
  ngOnInit(): void {
    this.service.getCard().subscribe(res =>{
      this.listaCards = res;
    });
  }

}

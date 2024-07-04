import { Component } from '@angular/core';
import { CardService } from '../service/card.service';
import { Card } from '../model/card';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrl: './deck.component.css'
})
export class DeckComponent {
  cards: Card[] = [];

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.cardService.getCard().subscribe((data: Card[]) => {
      this.cards = data;
    });
  }
}


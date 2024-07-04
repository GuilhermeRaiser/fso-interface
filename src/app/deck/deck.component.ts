import { Component, OnInit } from '@angular/core';
import { CardService } from '../service/card.service';
import { Card } from '../model/card';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit {
  cards: Card[] = [];
  editingCard: Card | null = null;

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.cardService.getCard().subscribe((data: Card[]) => {
      this.cards = data;
    });
  }

  deleteCard(cardId: number | undefined): void {
    if (cardId === undefined) {
      console.error('cardId está undefined!');
      return;
    }
    this.cardService.deleteCard(cardId).subscribe(() => {
      this.cards = this.cards.filter(card => card.id !== cardId);
    });
  }

}

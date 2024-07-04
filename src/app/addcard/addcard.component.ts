import { Component } from '@angular/core';
import { CardService } from '../service/card.service';
import { Router } from '@angular/router';
import { Card } from '../model/card';

@Component({
  selector: 'app-addcard',
  templateUrl: './addcard.component.html',
  styleUrls: ['./addcard.component.css']
})
export class AddcardComponent {
  card: Card = {
    titulo: '',
    textoFrente: '',
    addnomeDeck: ''
  };

  constructor(private cardService: CardService, private router: Router) { }

  onSubmit() {
    this.cardService.createCard(this.card).subscribe(() => {
      this.router.navigate(['/deck']);
    });
  }

  
  
  
}

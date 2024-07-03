import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { AddcardComponent } from './addcard/addcard.component';
import { HomeComponent } from './home/home.component';
import { DeckComponent } from './deck/deck.component';

const routes: Routes = [
  {path: "card", component: CardComponent},
  {path: "addcard", component: AddcardComponent},
  {path: "home", component: HomeComponent},
  {path: "deck", component: DeckComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

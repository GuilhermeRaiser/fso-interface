import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { AddcardComponent } from './addcard/addcard.component';

const routes: Routes = [
  {path: "card", component: CardComponent},
  {path: "addcard", component: AddcardComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

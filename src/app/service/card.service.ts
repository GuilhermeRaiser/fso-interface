import { Injectable } from '@angular/core';
import { Card } from '../model/card';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {


  private apiURL = "http://localhost:8080/api/v1/card";

  constructor(private http:HttpClient) { }

  getCard(): Observable<Card[]> {
    return this.http.get<Card[]>(this.apiURL);
  }

  createCard(card: Card): Observable<Card> {
    return this.http.post<Card>(this.apiURL, card);
  }

  getCardById(id: number): Observable<Card> {
    return this.http.get<Card>(`${this.apiURL}/${id}`);
  }
}
  



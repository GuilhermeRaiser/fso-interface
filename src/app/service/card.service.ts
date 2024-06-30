import { Injectable } from '@angular/core';
import { Card } from '../model/card';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardService {


  apiURL = "http://localhost:8080/api/v1/card";

  constructor(private http:HttpClient) { }

  getClientes(){
    return this.http.get<Card[]>(this.apiURL)
  }
}

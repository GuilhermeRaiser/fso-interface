import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AddcardService {

private apiURL = "http://localhost:8080/api/v1/card"

  constructor(private http: HttpClient) { }


}

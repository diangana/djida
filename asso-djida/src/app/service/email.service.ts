import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Email } from 'src/models/email.model';
const baseUrl = 'http://localhost:3000/emailing';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }
  envoyerEmail(data: Email): Observable<Email> {
    return this.http.post(baseUrl, data);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Adherent } from 'src/models/Adherent.model';
import { Observable } from 'rxjs';
const baseUrl = 'http://localhost:3000/adherent';

@Injectable({
  providedIn: 'root'
})
export class AdherentService {

  constructor(private http: HttpClient) { }
    getAll(): Observable<any> {
      return this.http.get<Adherent[]>(baseUrl);
    }

    getconn(id: any,password:any): Observable<any> {
      return this.http.get(`${baseUrl}/${id}/${password}`);
    }
    get(id: any): Observable<any> {
      return this.http.get(`${baseUrl}/${id}`);
    }
    create(data: any): Observable<any> {
      return this.http.post(baseUrl, data);
    }

    update(data: any): Observable<any> {
      return this.http.put(baseUrl, data);
    }

    deleteUser(id: any): Observable<any> {
      return this.http.delete(`${baseUrl}/${id}`);
    }

    deleteAll(): Observable<any> {
      return this.http.delete(baseUrl);
    }

    findByTitle(title: any): Observable<Adherent[]> {
      return this.http.get<Adherent[]>(`${baseUrl}?nom=${title}`);
    }
  }

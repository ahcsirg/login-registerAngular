import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStoreService } from './local-store.service';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestApiService<T> {
  private apiUrl = 'tu url';
  private token: string;

  constructor(private http: HttpClient, private readonly storageService: LocalStoreService) {
    this.token = this.storageService.getItem('token') || '';
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
  }

  get(path: string): Observable<T[]> {
    return this.http.get<T[]>(`${this.apiUrl}/${path}`, { headers: this.getHeaders() });
  }

  getById(id: string, path: string): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${path}/${id}`, { headers: this.getHeaders() });
  }

  create(object: T, path: string): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}/${path}`, object, { headers: this.getHeaders() });
  }

  update(id: string, object: T, path: string): Observable<T> {
    return this.http.put<T>(`${this.apiUrl}/${path}/${id}`, object, { headers: this.getHeaders() });
  }

  delete(id: string, path: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${path}/${id}`, { headers: this.getHeaders() });
  }
}

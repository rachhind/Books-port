import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl = 'http://localhost:3000/books'; //API base endpoint

  constructor(private http: HttpClient) {}

  // Get all books (GET)
  getBooks(): Observable<Book[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    return this.http.get<Book[]>(`${this.baseUrl}/getBooks`, { headers });
  }

  // Add a new book (POST)
  addBook(book: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    return this.http.post(`${this.baseUrl}/addBook`, book, { headers });
  }

}
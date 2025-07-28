import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';  // same folder, so './book'

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl = 'http://localhost:3000/books'; //API base endpoint

  constructor(private http: HttpClient) {}

  // Implement getBooks() using HTTP GET
  getBooks(): Observable<Book[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.http.get<Book[]>(`${this.baseUrl}/getBooks`, { headers });
  }

  // Implement addBook() using HTTP POST
  addBook(bookData: Book): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.http.post<any>(`${this.baseUrl}/addBook`, bookData, { headers });
  }
}

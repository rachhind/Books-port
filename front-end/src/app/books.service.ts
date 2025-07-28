import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  // GET all books
  getBooks() {
    const url = 'http://localhost:3000/books/getBooks'; // API endpoint
    return this.http.get(url); // GET HTTP method
  }

  //POST to add a new book
  addBook(form: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    const options = { headers: headers };
    const url = 'http://localhost:3000/books/addBook'; // API endpoint

    return this.http.post(url, JSON.stringify(form), options);
  }

  // PATCH to borrow or return a book
  changeBook(email: any, id: any) {
    const headers = new HttpHeaders({'Content-Type': 'application/json', 'Accept': 'application/json'});
    const options = { headers: headers };
    return this.http.patch(`http://localhost:3000/books/changeBook/${id}`, JSON.stringify({ email }), options);
  }
}

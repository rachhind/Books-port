import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books: any[] = [];
  emailInput: string = '';

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooks().subscribe({
      next: (data: any) => {
        this.books = data;
      },
      error: (err) => {
        console.error('Error fetching books:', err);
      }
    });
  }

  toggleBookStatus(book: any): void {
    if (!this.emailInput) {
      alert('Please enter your email.');
      return;
    }

    this.bookService.changeBook(this.emailInput, book.ID).subscribe({
      next: () => {
        this.getBooks(); // refresh list
      },
      error: (err) => {
        console.error('Error updating book:', err);
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/book';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: Book[];
  constructor( private service: BookService) {
    this.service.getBooks().subscribe((books: Book[]) => { this.books = books; });
   }
  ngOnInit() {}

}
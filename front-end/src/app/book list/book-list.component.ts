import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
books: Book[];
  constructor( ) {
    
   }

  ngOnInit() {
  }

}
/* Inject the service, then use the getBooks method to fill the books property */
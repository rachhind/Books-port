import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books = [
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      description: 'A classic novel set in the Roaring Twenties.',
      cover: 'https://covers.openlibrary.org/b/id/7222246-L.jpg',
      status: 'Available'
    },
    {
      id: 2,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      description: 'A novel about racial injustice in the Deep South.',
      cover: 'https://covers.openlibrary.org/b/id/8228691-L.jpg',
      status: 'Borrowed'
    }
  ];

  constructor() {}

  ngOnInit(): void {
    // Later, fetch books from your service here
  }
}
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
      cover: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781524879761/the-great-gatsby-9781524879761_hr.jpg',
      status: 'Available'
    },
    {
      id: 2,
      title: 'Harry Potter and the Philosopher\'s Stone',
      author: 'J.K. Rowling',
      description: 'A young wizard\'s journey begins at Hogwarts School of Witchcraft and Wizardry.',
      cover: 'https://m.media-amazon.com/images/I/61mvKTMbbxL._UF1000,1000_QL80_.jpg',
      status: 'Borrowed'
    },
    {
      id: 3,
      title: 'The House at Watch Hill',
      author: 'Karen Marie Moning',
      description: 'It follows Zo Grey, who inherits a Gothic mansion and a large fortune in Divinity, Louisiana',
      cover: 'https://m.media-amazon.com/images/I/81EJDQfg3dL._UF1000,1000_QL80_.jpg',
      status: 'Borrowed'
    }
  ];

  constructor() {}

  ngOnInit(): void {
    // Later, fetch books from your service here
  }
}
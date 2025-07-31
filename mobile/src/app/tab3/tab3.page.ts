import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../book.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  bookForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private bookService: BookService
  ) {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      image: ['', Validators.required],
      contact: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      abstract: ['', Validators.required],
      category: ['', Validators.required]
    });
  }

  addBook() {
    if (this.bookForm.valid) {
      const newBook = this.bookForm.value;
      this.bookService.addBook(newBook).subscribe({
        next: (res) => {
          alert('Book added!');
          this.bookForm.reset();
        },
        error: (err) => {
          alert('Error adding book');
        }
      });
    }
  }
}
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../book'; // Make sure this interface exists
import { BookService } from '../books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
  @Input() book!: Book;
  @Input() emailInput: string = '';
  @Output() toggleStatus = new EventEmitter<Book>();

  constructor(private service: BookService, private router: Router) {}

  ngOnInit(): void {}

  onToggleStatus(): void {
    if (!this.emailInput.trim()) {
      alert('Please enter your email to toggle book status.');
      return;
    }

    this.service.changeBook(this.emailInput, this.book).subscribe({
      next: (result: { success: boolean }) => {
        if (result.success) {
          this.toggleStatus.emit(this.book);
        } else {
          alert('Failed to update book. Please check your email.');
        }
      },
      error: (err) => {
        console.error('Error updating book status:', err);
      }
    });
  }
}

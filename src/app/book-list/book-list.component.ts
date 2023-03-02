import { Component } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html'
})
export class BookListComponent {
  books = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925},
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { title: '1984', author: 'George Orwell', year: 1949 },
    { title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 }
  ]

  filter: string = ''
}

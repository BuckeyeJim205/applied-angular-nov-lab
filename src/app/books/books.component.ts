import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { BookListApiResponse, Book } from './services/types';
import { map } from 'rxjs';

@Component({
  selector: 'app-books',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [JsonPipe],
  template: `
    <div data-testid="books-feature">Books Feature</div>
    <!--<pre>{{ books() | json }}</pre>-->
    <pre>{{ loadBooks() | json }}</pre>
    <!--<pre>{{ getBooks() | json }}</pre>-->
    <!--<ul>
      @for (book of loadBooks2(); track book.id) {
        <li>
          <pre>{{ book | json }}</pre>
        </li>
      }
    </ul>-->
  `,
  styles: ``,
})
export class BooksComponent {
  #httpClient = inject(HttpClient);
  books = toSignal(this.#httpClient.get('/api/books'));

  //pipe(map((res) => res.data)
  //books = toSignal(
  //   this.#client
  //   .get<{
  //     data: { id: string; title: string; author: string; year: number }[];
  //   }>("/api/books")
  //   .pipe(map((res) => res.data))
  // );
  loadBooks = toSignal(
    this.#httpClient
      .get<BookListApiResponse>('/api/books')
      .pipe(map((bl) => bl.books)),
  );

  loadBooks2 = toSignal(
    this.#httpClient.get<BookListApiResponse>('/api/books').pipe(
      map((bl) => bl.books),
      map((b) =>
        b.map((t) => {
          const book: Book = {
            id: t.id,
            author: t.author,
            title: t.title,
            year: t.year,
          };
          return book;
        }),
      ),
    ),
  );

  getBooks() {
    return toSignal(
      this.#httpClient
        .get<BookListApiResponse>('/api/books')
        .pipe(map((bl) => bl.books)),
    );
  }
}

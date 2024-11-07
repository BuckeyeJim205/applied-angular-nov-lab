export type BookListApiResponse = {
    books: BooksApiResponse[];
  };

export type BooksApiResponse = {
    author: string;
    county: string;
    imageLink: string;
    language: string;
    link: string;
    pages: number;
    id: number;
    title: string;
    year: number;
  };

  export type Book = {
    id: number;
    author: string;
    title: string;
    year: number;
  };
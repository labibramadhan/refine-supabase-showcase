import { Genre } from './genre';

export class Book {
  id: string;
  title: string;
  author: string;
  isbn: string;
  publication_year: string;
  genre_id: string;
  genre?: Genre;
  description: string;
  created_at: Date;
  updated_at: Date;

  constructor(values: Partial<Book>) {
    this.id = values.id ?? '';
    this.title = values.title ?? '';
    this.author = values.author ?? '';
    this.isbn = values.isbn ?? '';
    this.publication_year = values.publication_year ?? '';
    this.genre_id = values.genre_id ?? '';
    this.description = values.description ?? '';
    this.created_at = values.created_at ?? new Date();
    this.updated_at = values.updated_at ?? new Date();
  }
}

import { Dayjs } from 'dayjs';

export class Borrowing {
  id: string;
  book_id: string;
  member_id: string;
  borrow_date?: Dayjs | string;
  return_date?: Dayjs | string;
  status: string;
  notes: string;
  created_at: Date;
  updated_at: Date;

  constructor(values: Partial<Borrowing>) {
    this.id = values.id ?? '';
    this.book_id = values.book_id ?? '';
    this.member_id = values.member_id ?? '';
    this.borrow_date = values.borrow_date ?? '';
    this.return_date = values.return_date ?? '';
    this.status = values.status ?? '';
    this.notes = values.notes ?? '';
    this.created_at = values.created_at ?? new Date();
    this.updated_at = values.updated_at ?? new Date();
  }
}

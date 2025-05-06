import { Dayjs } from 'dayjs';

export class Member {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  address: string;
  membership_start_date?: Dayjs | string;
  membership_end_date?: Dayjs | string;
  status: string;
  created_at: Date;
  updated_at: Date;

  constructor(values: Partial<Member>) {
    this.id = values.id ?? '';
    this.first_name = values.first_name ?? '';
    this.last_name = values.last_name ?? '';
    this.email = values.email ?? '';
    this.phone_number = values.phone_number ?? '';
    this.address = values.address ?? '';
    this.membership_start_date = values.membership_start_date ?? '';
    this.membership_end_date = values.membership_end_date ?? '';
    this.status = values.status ?? '';
    this.created_at = values.created_at ?? new Date();
    this.updated_at = values.updated_at ?? new Date();
  }
}

export class Genre {
  id: string;
  name: string;
  created_at?: Date;
  updated_at?: Date;

  constructor(values: Partial<Genre>) {
    this.id = values.id ?? '';
    this.name = values.name ?? '';
    this.created_at = values.created_at;
    this.updated_at = values.updated_at;
  }
}

export interface Categories {
  id: number;
  name: string;
  filters: CategoryFilter[];
}

export interface CategoryFilter {
  key: string;
  value: string;
}

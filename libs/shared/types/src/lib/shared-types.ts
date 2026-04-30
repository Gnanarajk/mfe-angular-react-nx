export interface PaginatedResponse<T> {
  [key: string]: T[] | number; // 'products'|'recipes'|'users' array
  total: number;
  skip: number;
  limit: number;
}

export interface ApiError {
  message: string;
  status?: number;
}

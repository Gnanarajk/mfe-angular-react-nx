export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  phone: string;
  role: 'admin' | 'moderator' | 'user';
  image: string;
  token?: string;
  refreshToken?: string;
}

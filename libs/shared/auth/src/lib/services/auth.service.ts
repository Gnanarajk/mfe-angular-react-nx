import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private readonly apiUrl = 'https://dummyjson.com/auth/login';

  login(username: string, password: string): Observable<any> {
    const body = {
      username,
      password,
      expiresInMins: 30,
    };

    // HttpClient handles JSON stringifying and headers automatically
    return this.http.post(this.apiUrl, body, {
      withCredentials: true, // Replaces credentials: 'include'
    });
  }

  getUserInfo(): Observable<any> {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
      throw new Error('No access token found');
    }
    return this.http.get('https://dummyjson.com/auth/me', {
      credentials: 'include',
    });
  }
}

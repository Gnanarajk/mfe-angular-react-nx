import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthStore } from '../shared-auth/shared-auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-login.component',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  readonly store = inject(AuthStore);
  username = '';
  password = '';

  onLogin() {
    this.store.login({ username: this.username, password: this.password });
  }
}

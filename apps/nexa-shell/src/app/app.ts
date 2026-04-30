import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { AuthStore } from '@mfe-angular-react-nx/shared-auth';
import { getState } from '@ngrx/signals';

@Component({
  imports: [RouterModule, MatButtonModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App implements OnInit {
  protected title = 'host';
  readonly store = inject(AuthStore);

  ngOnInit() {
    // Run the test right away
    this.testLogin();
  }

  testLogin() {
    console.log('Testing Login...');
    this.store.login({ username: 'emilys', password: 'emilyspass' });
  }
}

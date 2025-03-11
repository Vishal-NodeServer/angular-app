import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="container mx-auto p-8">
      <div class="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 class="text-2xl font-bold mb-6">Login</h2>
        <form (ngSubmit)="onSubmit()">
          <div class="mb-4">
            <label class="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              [(ngModel)]="email"
              name="email"
              class="w-full p-2 border rounded"
              required
            />
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              [(ngModel)]="password"
              name="password"
              class="w-full p-2 border rounded"
              required
            />
          </div>
          <button
            type="submit"
            class="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  `,
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) { }

  onSubmit() {
    console.log('Login attempt:', { email: this.email });
    this.router.navigate(['/home']);
  }
}

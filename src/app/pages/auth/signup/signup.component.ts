/*************  ✨ Codeium Command 🌟  *************/
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, RouterModule],
  template: `
    <div class="container mx-auto p-8">
      <div class="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 class="text-2xl font-bold mb-6">Sign Up</h2>
        <form (ngSubmit)="onSubmit()">
          <div class="mb-4">
            <label class="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              [(ngModel)]="name"
              name="name"
              class="w-full p-2 border rounded"
              required
            />
          </div>
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
            Sign Up
          </button>
        </form>
      </div>
    </div>
  `,
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router) { }

  onSubmit() {
    localStorage.setItem('name', this.name);
    localStorage.setItem('email', this.email);
    console.log('Signup attempt:', { name: this.name, email: this.email });

    this.router.navigate(['/home']);
  }
}


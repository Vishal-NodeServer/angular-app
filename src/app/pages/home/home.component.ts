import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="container mx-auto p-8">
      <h1 class="text-4xl font-bold mb-4">Welcome, {{ name }}</h1>
      <p class="text-lg text-gray-600">Your email: {{ email }}</p>
    </div>
  `,
})
export class HomeComponent {
  name: string = localStorage.getItem('name') || 'Guest';
  email: string = localStorage.getItem('email') || 'Not provided';
}

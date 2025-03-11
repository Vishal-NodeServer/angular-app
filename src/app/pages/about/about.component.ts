import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="container mx-auto p-8">
      <h1 class="text-4xl font-bold mb-4">About Us</h1>
      <p class="text-lg text-gray-600">
        Learn more about our company and mission.
      </p>
    </div>
  `,
})
export class AboutComponent {}
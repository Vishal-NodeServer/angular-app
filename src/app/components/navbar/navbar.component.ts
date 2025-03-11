import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  template: `
    <nav class="bg-blue-600 p-4">
      <div class="container mx-auto flex justify-between items-center">
        <a routerLink="/" class="text-white text-xl font-bold">my app</a>
        <div class="space-x-4">
          <a routerLink="/" class="text-white hover:text-blue-200">Home</a>
          <a routerLink="/about" class="text-white hover:text-blue-200">About</a>
          <a routerLink="/login" class="text-white hover:text-blue-200">Login</a>
          <a routerLink="/signup" class="text-white hover:text-blue-200">Signup</a>
        </div>
      </div>
    </nav>
  `,
})
export class NavbarComponent { }
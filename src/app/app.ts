import { Component } from '@angular/core';
import { ProfileCard } from './profile-card/profile-card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProfileCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  fullName = 'Tanhueco, Jean Kyle S.';
  initials = 'JK';
  location = 'Angeles City, Pampanga';
  email = 'jstanhueco@student.hau.edu.ph';
  phone = '09XX XXX XXXX';

  profile =
    "I'm a student from Angeles City who lowkey enjoys building things for the web. " +
    "I am lowkey dying, need ko po ng lambing.";

  skills = [
    'HTML and CSS',
    'JavaScript',
    'TypeScript',
    'Angular'
  ];

  message = 'Welcome to my profile!';
  clickCount = 0;

  showMessage() {
    this.clickCount++;
    this.message = `You clicked the button ${this.clickCount} time(s).`;
  }
}

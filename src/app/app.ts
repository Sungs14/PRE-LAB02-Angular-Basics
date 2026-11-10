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
    "I'm a student from Angeles City who enjoys building things for the web. " +
    "I'm learning TypeScript and Angular, and I like turning what I learn into small projects. " +
    "My goal is to become a front-end web developer who builds clean, responsive websites that are easy for anyone to use. " +
    "Right now I'm focusing on understanding components, data binding, and how to organize my code properly. " +
    "I also want to get comfortable with Git and GitHub so I can work with a team someday. " +
    "In the future, I hope to build full web applications that solve real problems for people in my community." +
    "im lokwey dying, need kona po ng lambing";

  skills = [
    'HTML and CSS',
    'JavaScript',
    'TypeScript',
    'Angular',
    'Responsive design',
    'Angular CLI',
    'Node.js and npm',
    'Git and GitHub',
    'Visual Studio Code',
    'Problem solving'
  ];

  proficiencies = [
    {
      category: 'Languages',
      items: ['HTML', 'CSS', 'JavaScript', 'TypeScript']
    },
    {
      category: 'Frameworks and tools',
      items: ['Angular', 'Angular CLI', 'Node.js and npm']
    },
    {
      category: 'Development tools',
      items: ['Visual Studio Code', 'Git', 'GitHub']
    },
    {
      category: 'Web concepts',
      items: ['Components', 'Data binding', 'Responsive layout']
    }
  ];

  message = 'Welcome to my profile!';
  clickCount = 0;

  showMessage() {
    this.clickCount++;
    this.message = `You clicked the button ${this.clickCount} time(s).`;
  }
}

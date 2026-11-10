import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.css'
})
export class ProfileCard {
  cardTitle = 'A Little About Me';
  description = 'I like Malice Mizer and Buck-Tick, and I love grilling and barbecue.';
  hobbies = ['Wangan', 'Warzone', 'Cooking', 'Working out'];
}

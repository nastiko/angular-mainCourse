import { Component, signal } from '@angular/core';
import {GreetingComponent} from '../components/greeting/greeting.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GreetingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  message = signal('Let\'s start creating Greeting Component');
}

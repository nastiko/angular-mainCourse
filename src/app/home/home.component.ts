import { Component, signal } from '@angular/core';
import {GreetingComponent} from '../components/greeting/greeting.component';
import {CounterComponent} from '../components/counter/counter.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GreetingComponent, CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  keyPressed = signal('');
  message = signal('Let\'s start creating Greeting Component');

  keyUpHandler(event: KeyboardEvent) {
    if(event.target instanceof HTMLInputElement) {
      this.keyPressed.set(event.target.value);
    }
  }
}

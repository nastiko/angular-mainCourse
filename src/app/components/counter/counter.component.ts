import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  counterValue = signal(0);

  increase() {
    this.counterValue.update(prev => prev + 1);
  }

  decrease() {
    this.counterValue.update(prev => prev - 1);
  }

  reset() {
    this.counterValue.set(0);
  }

}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, HeaderComponent],
  template: `
    <app-header />
    <main>
      <app-home />
    </main>

  `,
  styles: [
    `
      main {
        padding: 0 25px;
      }
    `
  ],
})
export class AppComponent {
  title = 'angular-mainCourse';
}

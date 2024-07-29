import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    Szia {{city}}, {{2+3}}!
  `,
  styles: `
    :host {
      color: #a144eb;
    }
  `,
  standalone: true,
})
export class AppComponent {
  city ='San Francisco';
}
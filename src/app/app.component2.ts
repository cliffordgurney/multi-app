import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component2.html',
  styleUrls: ['./app.component2.css']
})
export class AppComponent {
  title = 'app';
  constructor() {
    console.log('Loading App 2');
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  heros: Array<string> = [];
  isExtraCss: boolean = false;

  constructor() {
    // are the place where the initialization will happen
    this.title = 'Angular';
    this.heros = ['A', 'B', 'C'];
    this.isExtraCss = true;
  }

  test() {
    return 'hello';
  }
  
}

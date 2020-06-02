import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { CounterComponent } from './counter/counter.component';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `
  //   <h1>App Component<h1>
  //   <style>
  //     h1 {
  //       background-color: red;
  //     }
  //   </style>
  // `,
  styleUrls: ['./app.component.css'],
  // styles: [
  //   `
       
  //   `
  // ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  title: string;
  heros: Array<string> = [];
  isExtraCss: boolean = false;
  todaysDate: Date = new Date();
  @ViewChild(CounterComponent) counterComponent: CounterComponent;

  counter: number = 1;

  isPass: boolean = true;

  constructor(private sharedService: SharedService) {
    // are the place where the initialization will happen
    this.title = 'Angular';
    this.heros = ['A', 'B', 'C'];
    this.isExtraCss = true;
  }

  test() {
    return 'hello';
  }

  incValue() {
    console.log('from click evet', this.counterComponent);
    this.counterComponent.incCounter();
  }
  
  incrementCounter(value) {
    console.log('from parent ', value);
    this.counter = value;
  }

  update() {
    this.isPass = !this.isPass;
    this.sharedService.setIsPass(this.isPass);

    this.sharedService.isPass$.next(this.isPass);
  }

}

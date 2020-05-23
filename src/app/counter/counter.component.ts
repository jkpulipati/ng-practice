import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Input() counter: number;
  @Output() incrementCounter: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log(this.counter, this.incrementCounter);
  }

  incCounter() {
    this.counter += 1;
    this.incrementCounter.emit(this.counter);
  }

}

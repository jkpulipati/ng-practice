import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  status: boolean;

  @Input() counter: number;
  @Output() incrementCounter: EventEmitter<any> = new EventEmitter();

  constructor(private sharedService: SharedService) {
    // this.status = this.sharedService.getIsPass();

    this.sharedService.isPass$.subscribe(value => {
      this.status = value;
    });
  }

  ngOnInit(): void {
    console.log(this.counter, this.incrementCounter);
  }

  incCounter() {
    this.counter += 1;
    this.incrementCounter.emit(this.counter);
  }

  Refresh() {
    this.status = this.sharedService.getIsPass();
  }

}

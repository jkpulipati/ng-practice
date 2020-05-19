import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() name: string;
  @Input() heading; string;
  @Input() obj: any;

  @Output() test = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.obj, this.test);
    this.test.emit({num: '67'});
  }

}

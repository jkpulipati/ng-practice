import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  isPass: boolean;

  isPass$: Subject<any> = new Subject();

  constructor() { }

  setIsPass(value: boolean) {
    this.isPass = value;
  }

  getIsPass() {
    return this.isPass;
  }

}

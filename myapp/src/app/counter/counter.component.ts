import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  like=0;
  disLike=0;

  increment(){
    this.like++;
  }
  decrement(){
    this.disLike++;
  }

}

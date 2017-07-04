import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  initValue: number; //元本
  rate: number;      //金利

  //複利計算
  calc(): number {
    if(isNaN(this.initValue) || isNaN(this.rate)) {
      return null;
    }

    let answer: number = this.initValue;

    for(let i = 0; i < 10; i++) {
      answer = answer * (1 + this.rate/100);
    }

    return Math.floor(answer);
  }

}

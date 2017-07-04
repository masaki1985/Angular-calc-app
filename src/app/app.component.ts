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

  //年毎の金額明細
  calcArray() :number[] {
    if(isNaN(this.initValue) || isNaN(this.rate)) {
      return null;
    }
    let answer: number = this.initValue;
    let ret: number[] = [answer];

    for(let i = 0; i < 10; i++) {
      answer = answer * (1 + this.rate/100);
      ret.push(Math.floor(answer));
    }
    return ret;
  }

  //入力値を保存
  save(): void {
    localStorage.setItem("initValue", this.initValue.toString());

    localStorage.setItem("rate", this.rate.toString());
  }

  //入力値と保存データをクリア
  clear(): void {
    localStorage.setItem("initValue", "0");
    localStorage.setItem("rate", "0");
    this.initValue = 0;
    this.rate = 0;
  }

  //アプリ起動時の入力値設定
  ngOnInit() {
    if(localStorage.getItem("initValue")) {
      this.initValue = Number(localStorage.getItem("initValue"));
      this.rate = Number(localStorage.getItem("rate"));
    }
    else {
      this.clear();
    }
  }
  
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  num1: number = 0;
  num2: number = 0;
  sum: number = 0;

onClickSum(){
  this.sum = this.num1 + this.num2;
}

onClickSub(){
  this.sum = this.num1 - this.num2;
}
  
onClickMul(){
  this.sum = this.num1 * this.num2;
}

onClickDiv(){
  this.sum = this.num1 / this.num2;
}

onClickPot(){
  this.sum = this.num1 ** this.num2;
}

onClickRad(){
  this.sum = Math.sqrt(this.num1);
}

}

import { Component, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component {

  inputValue : string;

  print(value: string){
    this.inputValue = value;
  }
}

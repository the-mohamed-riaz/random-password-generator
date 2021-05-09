import { Component, OnInit } from '@angular/core';
import {lorem} from 'faker'

@Component({
  selector: 'app-typing',
  templateUrl: './typing.component.html',
  styleUrls: ['./typing.component.css']
})
export class TypingComponent implements OnInit {
  randSentance: string = lorem.sentence()
  userInput:string = '';
  constructor() { }

  ngOnInit(): void {
  }
  handleUserInput(value:string){
    this.userInput = value;
  }
  progressBar(){
    let len = Math.floor((this.userInput.length / this.randSentance.length) * 100);
    console.log(len);
    return len<100 ? len : "100"
  }
  compare(randomLetter:string,userLetter:string){
    if(!userLetter){
      return "pending"
    }
    return randomLetter === userLetter ? "correct" : "wrong"
  }

}

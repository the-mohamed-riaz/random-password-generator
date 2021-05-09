import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.css']
})
export class PasswordGeneratorComponent implements OnInit {
  length:any = '';
  useCha:boolean = false;
  useNumb:boolean = false;
  useSymb:boolean = false;
  error:string = null;
  password:string = '';
  styleClass:string = "";

  constructor() { }

  ngOnInit(): void {
  }

  handleInput(value: string){
    let n = Number(value)
    if(!isNaN(n)){
      this.length = n;
      this.error = null;
      this.styleClass = "is-success"
    } else {
      this.styleClass = "is-danger"
      this.error = "Must be a number between 8 to 20"
    }
  }
  handleCheckbox(id:string){
    if(id === "cha"){
      this.useCha = !this.useCha
    }
    if(id === "numb"){
      this.useNumb = !this.useNumb
    }
    if(id === "symb"){
      this.useSymb = !this.useSymb
    }
  }

  handleButton(){
    const alpha:string = "abcdefghijklmnopqrstuvwxyz";
    const int:string = "1234567890";
    const specialCha:string = "!@#$%^&*()";
    let password_choice:string = "";
    let gen_password:string = ""

    if(this.useCha){
      password_choice += alpha;
    }
    if(this.useNumb){
      password_choice += int;
    }
    if(this.useSymb){
      password_choice += specialCha;
    }

    for(let i=0; i < this.length; i++){
      gen_password += password_choice[Math.floor(Math.random() * password_choice.length)]
    }
    this.password = gen_password;
    // console.log(`
    // Cha: ${this.useCha}
    // Numb: ${this.useNumb}
    // Symb: ${this.useSymb}

    // Length: ${this.length}

    // Choice list: ${password_choice.length}
    // Final Password: ${this.password}
    // `);
  }

}

import { Component, OnInit } from '@angular/core';
import contacts from 'src/assets/data';
import { Url } from 'url';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  data:any;
  constructor() { }

  
  ngOnInit(): void {
    this.data= contacts;
    console.log(this.data)
  }

}

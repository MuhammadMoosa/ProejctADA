import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {


  messages = ["messages1", "messages2", "messages3"];
   

  constructor() { }

  ngOnInit() {
  }

}

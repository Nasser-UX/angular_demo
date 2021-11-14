import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clickCounter: number = 0;
  name: string = '';



  itemCount: number = 4;
  btnText: string = 'Add an Item';
  goalText: string = 'My first life goal';
  goals = [];

  constructor() { }

  ngOnInit(): void {
    this.itemCount = this.goals.length;
  }

// add items to list

  addItem() {
    this.goals.push(this.goalText as never);
    this.goalText = '';
    this.itemCount = this.goals.length;
  }

  countClick() {
   this.clickCounter ++;
  }

  setClasses() {
    let myClasses = {
      active: this.clickCounter > 4,
      notactive: this.clickCounter <= 4
    }

    return myClasses;
  }


}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  employeeView: boolean;

  constructor() { }

  ngOnInit() {
    this.employeeView = false;
    console.log(this.employeeView)
  }

  toggle(): void {
    console.log('click!');
    if (this.employeeView) {
      this.employeeView = false;
    } else {
      this.employeeView = true;
    }
    console.log(this.employeeView);
  }

}

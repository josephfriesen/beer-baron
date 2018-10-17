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
  }

  toggle(): void {
    if (this.employeeView) {
      this.employeeView = false;
    } else {
      this.employeeView = true;
    }
  }

}

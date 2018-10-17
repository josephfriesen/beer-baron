import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'keg-display',
  templateUrl: './keg-display.component.html',
  styleUrls: ['./keg-display.component.css']
})
export class KegDisplayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() employeeView: boolean;

}

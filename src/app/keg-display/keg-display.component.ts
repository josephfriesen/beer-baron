import { Component, OnInit, Input } from '@angular/core';
import { Keg } from '../models/keg.model';
import { kegs } from '../models/mock-kegs';

@Component({
  selector: 'keg-display',
  templateUrl: './keg-display.component.html',
  styleUrls: ['./keg-display.component.css']
})
export class KegDisplayComponent implements OnInit {

  inventory = kegs;
  selectedKeg: Keg;

  log(arg): void {
    console.log(arg);
  }

  constructor() { }

  ngOnInit() {
  }

  @Input() employeeView: boolean;


}

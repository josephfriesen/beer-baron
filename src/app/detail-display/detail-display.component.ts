import { Component, OnInit, Input } from '@angular/core';
import { Keg } from '../models/keg.model';
import { kegs } from '../models/mock-kegs';

@Component({
  selector: 'detail-display',
  templateUrl: './detail-display.component.html',
  styleUrls: ['./detail-display.component.css']
})

export class DetailDisplayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() kegToShow: Keg;

  log(arg): void {
    console.log(arg);
  }


}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'add-keg',
  templateUrl: './add-keg.component.html',
  styleUrls: ['./add-keg.component.css']
})
export class AddKegComponent implements OnInit {
  keg = new Keg(0,'',0,'',0,'',0,'');

  constructor() { }

  ngOnInit() {
  }

  log(arg): void {
    console.log(arg);
  }

  @Output() addFinished = new EventEmitter();

  allDone(keg: Keg) {
    this.addFinished.emit(keg);
  }

}

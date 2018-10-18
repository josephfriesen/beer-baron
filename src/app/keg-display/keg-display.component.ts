import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  editKeg: Keg;
  newKeg: boolean = false;

  log(arg): void {
    console.log(arg);
  }

  constructor() { }

  ngOnInit() {
  }

  @Input() employeeView: boolean;

  @Output() editAKeg = new EventEmitter();

  editKegClicked(kegToEdit: Keg) {
    this.editAKeg.emit(kegToEdit)
  }

  addKeg(keg: Keg) {
    this.inventory.push(keg);
    this.newKeg = false;
  }

  sellAPint(keg): void {
    keg.pintsLeft = keg.pintsLeft - 1;
  }

  deleteThisKeg(keg): void {
    this.inventory.splice(this.inventory.indexOf(keg), 1);
  }


}

import { Component, OnInit, Input, Output } from '@angular/core';
import { Keg } from '../models/keg.model';
import { kegs } from '../models/mock-kegs';

@Component({
  selector: 'edit-keg',
  templateUrl: './edit-keg.component.html',
  styleUrls: ['./edit-keg.component.css']
})
export class EditKegComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  @Input() keg: Keg;

}

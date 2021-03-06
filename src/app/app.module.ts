import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { KegDisplayComponent } from './keg-display/keg-display.component';
import { DetailDisplayComponent } from './detail-display/detail-display.component';
import { EditKegComponent } from './edit-keg/edit-keg.component';
import { AddKegComponent } from './add-keg/add-keg.component';
import { StyleFilterPipe } from './style-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    KegDisplayComponent,
    DetailDisplayComponent,
    EditKegComponent,
    AddKegComponent,
    StyleFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

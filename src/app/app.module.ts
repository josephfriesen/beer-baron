import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { KegDisplayComponent } from './keg-display/keg-display.component';
import { DetailDisplayComponent } from './detail-display/detail-display.component';
import { EditKegComponent } from './edit-keg/edit-keg.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    KegDisplayComponent,
    DetailDisplayComponent,
    EditKegComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { KegDisplayComponent } from './keg-display/keg-display.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    KegDisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

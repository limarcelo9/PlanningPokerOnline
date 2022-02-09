import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRountingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ModalModule } from './modal/modal.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRountingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ModalModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRountingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignUpComponent } from './sign-up/sign-up.component';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRountingModule,
    HttpClientModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LeftSectionComponent } from './components/left-section/left-section.component';
import { RightSectionComponent } from './components/right-section/right-section.component';
import { BienvenueComponent } from './components/bienvenue/bienvenue.component';
import { Component1Component } from './components/right-section/component1/component1.component';
import { Component2Component } from './components/right-section/component2/component2.component';
import { Component3Component } from './components/right-section/component3/component3.component';
import { Component4Component } from './components/right-section/component4/component4.component';
import { Component5Component } from './components/right-section/component5/component5.component';
import { Component6Component } from './components/right-section/component6/component6.component';
import { Component7Component } from './components/right-section/component7/component7.component';
import { AlertComponent } from './components/right-section/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftSectionComponent,
    RightSectionComponent,
    BienvenueComponent,
    Component1Component,
    Component2Component,
    Component3Component,
    Component4Component,
    Component5Component,
    Component6Component,
    Component7Component,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

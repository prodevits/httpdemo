import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { HttpClientModule} from '@angular/common/http';
import { SecondComponent } from './second/second.component';
import { EmpComponent } from './emp/emp.component';
import { HttpRestComponent } from './http-rest/http-rest.component'
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    EmpComponent,
    HttpRestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

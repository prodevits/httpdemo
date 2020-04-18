import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { HttpClientModule} from '@angular/common/http';
import { SecondComponent } from './second/second.component';
import { EmpComponent } from './emp/emp.component'
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    EmpComponent
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

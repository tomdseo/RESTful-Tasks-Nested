import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { HttpService } from './http.service';
import { FormsModule } from '@angular/forms'; // <-- import FormsModule

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule // <-- register FormsModule with our app.
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

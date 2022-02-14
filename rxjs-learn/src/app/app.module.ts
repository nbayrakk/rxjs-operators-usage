import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FetchWithInputComponent } from './components/fetchWithInput/fetch-with-input/fetch-with-input.component';
import { DashboardComponent } from './components/Dashboard/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    FetchWithInputComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

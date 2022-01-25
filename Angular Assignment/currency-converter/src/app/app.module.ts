import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyComponent } from './currency/currency.component';
import { FectchDataFromApiComponent } from './fectch-data-from-api/fectch-data-from-api.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { Ass3ParentComponent } from './ass3-parent/ass3-parent.component';
import { Ass3ChildComponent } from './ass3-child/ass3-child.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyComponent,
    FectchDataFromApiComponent,
    HomeComponent,
    Ass3ParentComponent,
    Ass3ChildComponent
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

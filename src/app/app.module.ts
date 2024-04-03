import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PowerBoostCalculatorComponent } from "./power-boost-calculator.component";
import { ExponentialStrengthPipe } from './exponential-strength.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PowerBoostCalculatorComponent,
    ExponentialStrengthPipe,
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule
  ]
})
export class AppModule { }

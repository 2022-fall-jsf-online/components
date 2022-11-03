import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PizzaToppingsComponent } from './pizza-toppings/pizza-toppings.component';


import { DestComponentComponent } from './dest-component/dest-component.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { DmeyMultiplyComponent } from './dmey-multiply/dmey-multiply.component';


import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import { RaCalculatorComponent } from './ra-calculator/ra-calculator.component';


import { TjsMultiplicationComponent } from './tjs-multiplication/tjs-multiplication.component';
import { DhCouponComponent } from './dh-coupon/dh-coupon.component';
import { AlmAdditionalComponent } from './alm-additional/alm-additional.component';
import { BsanMathComponent } from './bsan-math/bsan-math.component';
import { SnahnDivisionComponent } from './snahn-division/snahn-division.component';
import { AriceAdditionComponent } from './arice-addition/arice-addition.component';
import { SmfTipCalculatorComponent } from './smf-tip-calculator/smf-tip-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaToppingsComponent,
    DestComponentComponent,
    DmeyMultiplyComponent,
    RaCalculatorComponent,
    TjsMultiplicationComponent,
    DhCouponComponent,
    AlmAdditionalComponent,
    BsanMathComponent,
    AriceAdditionComponent,
    SnahnDivisionComponent,
    AriceAdditionComponent,
    SmfTipCalculatorComponent
  ],
  imports: [
    BrowserModule
    , FormsModule
    , BrowserAnimationsModule
    , MatCardModule
    , MatButtonModule
    , MatCheckboxModule
    , MatInputModule
    , MatDatepickerModule
    , MatFormFieldModule
    , ReactiveFormsModule
    , MatNativeDateModule
    , MatExpansionModule
    , MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

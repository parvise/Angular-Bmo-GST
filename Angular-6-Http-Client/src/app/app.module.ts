import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CustomerService } from './customer.service';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ChidComponent } from './chid/chid.component';
import { SearchComponent } from './search/search.component';
import { NavBarService } from './nav-bar.service';
import { FinYearComponent } from './fin-year/fin-year.component';
import { TaxComponent } from './tax/tax.component';
import { ItemComponent } from './item/item.component';
import { CustomerGstComponent } from './customer-gst/customer-gst.component';
import { Globalexceptionhandler } from './globalexceptionhandler';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerDetailsComponent,
    AddCustomerComponent,
    LoginViewComponent,
    WelcomeComponent,
    NavMenuComponent,
    ChidComponent,
    SearchComponent,
    FinYearComponent,
    TaxComponent,
    ItemComponent,
    CustomerGstComponent
  ],
  entryComponents: [
    LoginViewComponent,
    AddCustomerComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CustomerService, NavBarService, Globalexceptionhandler,{provide:ErrorHandler,useClass:Globalexceptionhandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from '../customer/customer.component';
import { AddCustomerComponent } from '../add-customer/add-customer.component';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';
import { LoginViewComponent } from '../login-view/login-view.component';
import { WelcomeComponent } from '../welcome/welcome.component';
import { SearchComponent } from '../search/search.component';
import { TaxComponent } from '../tax/tax.component';
import { ItemComponent } from '../item/item.component';
import { CustomerGstComponent } from '../customer-gst/customer-gst.component';
import { FinYearComponent } from '../fin-year/fin-year.component';

const routes: Routes = [
  { path: 'customers', component: CustomerComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'login', component: LoginViewComponent },
  { path: 'logout', component: LoginViewComponent },
  { path: 'finYear', component: FinYearComponent },
  { path: 'tax', component: TaxComponent },
  { path: 'item', component: ItemComponent },
  { path: 'customerGst', component: CustomerGstComponent },
  { path: 'customer/add', component: AddCustomerComponent },
  { path: 'customers/:id', component: CustomerDetailsComponent },
  { path: 'search', component: SearchComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }


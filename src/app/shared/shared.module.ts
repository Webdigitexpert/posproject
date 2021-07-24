import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxLoaderModule } from '@tusharghoshbd/ngx-loader';

import { SearchComponent } from './components/search/search.component';
import { ButtonComponent } from './components/button/button.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { DeleteComponent } from './components/delete/delete.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { InputTypeComponent } from './components/input-type/input-type.component';
import { SelectComponent } from './components/select/select.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { PriceComponent } from './components/price/price.component';
import { D3PieComponent } from './components/d3-pie/d3-pie.component';
import { SearchByDateComponent } from './components/search-by-date/search-by-date.component';
import { TablesComponent } from '../admin/shared/components/tables/tables.component';

import { MoneyPipe } from './pipes/currency.pipe';

import { DialogServiceService } from './services/dialog/dialog-service.service';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    InputTypeComponent,
    SearchComponent,
    ButtonComponent,
    AddCustomerComponent,
    DeleteComponent,
    EditCustomerComponent,
    SelectComponent,
    TextareaComponent,
    PriceComponent,
    D3PieComponent,
    MoneyPipe,
    SearchByDateComponent,
    ResetPasswordComponent,
    FilterPipe,
  ],
  exports: [
    InputTypeComponent,
    SearchComponent,
    ButtonComponent,
    AddCustomerComponent,
    DeleteComponent,
    EditCustomerComponent,
    SelectComponent,
    TextareaComponent,
    PriceComponent,
    D3PieComponent,
    MoneyPipe,
    SearchByDateComponent,
    FilterPipe,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgxLoaderModule],
  providers: [DialogServiceService],
})
export class SharedModule {}

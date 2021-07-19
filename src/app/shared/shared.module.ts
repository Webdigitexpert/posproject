import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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

import { MoneyPipe } from './pipes/currency.pipe';

import { DialogServiceService } from './services/dialog/dialog-service.service';


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
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [DialogServiceService],
})
export class SharedModule {}
